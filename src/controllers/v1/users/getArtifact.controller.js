const express = require("express");
const app = express();
const Artifact = require("../../../model/Artifact");

const getArtifact = async (req,res) => {
  try {
    const artifactID = req.params.id
    await Artifact.findById(artifactID).then((data) => res.json(data));
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Error in Fetching");
  }
};

module.exports = getArtifact;