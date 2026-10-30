const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

import { Url } from "./Url.js";
import { getNextId } from "./Counter.js";
import { encode } from "./convert.js";
import mongoose from "mongoose";

app.post("/api/shorten", async (req, res) => {
  const { longUrl } = req.body;

  function isValidUrl(value) {
    try {
      const url = new URL(value);
      return url.protocol === "http:" || url.protocol === "https:"
    } catch {
      return false;
    }
  }

  // 1. Validate longUrl. If it's invalid, respond with status 400 and an error message.
  if (!isValidUrl(longUrl)) {
    return res.status(400).json({ error: "Invalid Url" });
  }
  try {
    // 2. Get the next number from getNextId().
    const id = await getNextId();
    // 3. Turn it into a shortCode with encode().
    const shortCode = encode(id);
    // 4. Save { longUrl, shortCode } using the Url model.
    await Url.create({ longUrl, shortCode });
    // 5. Respond with { shortCode, shortUrl }.
    res.status(201).json({
      shortCode,
      shortUrl: `{process.env.BASE_URL}$/{shortCode}`
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Internal server Error" })
  }
});

app.get("/:code", async (req, res) => {
  const { code } = req.params;

  try {
    // 1. Find the link with this shortCode AND add 1 to clicks, in one database call
    const link = await Url.findOneAndUpdate(
      {shortCode :code},
      {$inc :{clicks : 1}},
      {
      returnDocument : "after"
      }
    )
    if(!link){
      return res.status(404).json({error :"Invalid url"});
    }
    if(link.expiresAt && link.expiresAt < new Date ()){
      return res.status(410).json({error :"This link has expired"});
    }
    res.redirect(302,longUrl);
    // 2. If nothing was found, respond with 404

    // 3. If it has expired, respond with 410
    // 4. Otherwise, redirect to the long URL
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/", (req, res) => {
  res.send("Express server is running!");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});