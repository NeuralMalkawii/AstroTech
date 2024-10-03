const express = require("express");
const connectDB = require("./db.js");
const itemModel = require("./models/item.js");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

// POST route to save new submission
app.post("/", async (req, res) => {
  try {
    const { teamName, judgeName, totalRating, ratings } = req.body;
    const newSubmission = new Submission({
      teamName,
      judgeName,
      totalRating,
      ratings: ratings || {}, // Initialize ratings as an empty object if not provided
    });
    await newSubmission.save();
    res.status(201).json({ message: "Data saved successfully" });
  } catch (error) {
    console.error("Error saving submission:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// GET route to fetch all submissions
app.get("/submissions", async (req, res) => {
  try {
    const submissions = await itemModel.find();
    res.status(200).json(submissions);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
