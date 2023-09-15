const express = require("express");
const app = express();
const Artifact = require("../../../model/Artifact");

const GetAllArtifact = async (req,res) => {
  try {
    await Artifact.find().then((data) => res.json(data));
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Error in Fetching");
  }
};

module.exports = GetAllArtifact;