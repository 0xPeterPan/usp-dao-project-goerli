import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDrop = await sdk.getContract("0x8a01aA1Cc6889830bAc6a1D1f5bc26B322071275", "edition-drop");
    await editionDrop.createBatch([
      {
        name: "Key of Return",
        description: "This is USP DAO Genesis NFT & will give you access!",
        image: readFileSync("scripts/assets/Key of Return.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();