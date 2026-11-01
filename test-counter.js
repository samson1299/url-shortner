import { connectToMongoDB } from "./db.js";
import { getNextId } from "./Counter.js";

async function main() {
  try {
    await connectToMongoDB();

    console.log("Generated ID:", await getNextId());
    console.log("Generated ID:", await getNextId());
    console.log("Generated ID:", await getNextId());
  } catch (error) {
    console.error("Test failed:", error);
  } finally {
    await (await import("mongoose")).default.disconnect();
  }
}

main();