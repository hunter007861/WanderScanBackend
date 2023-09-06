const express = require("express");
const Artifact = require("../../../model/Artifact");
const app = express();

const CreateArtifact = async (req, res) => {
  try {
    data = new Artifact(req.body);

    await data.save().then(() => {
      res.status(200).json(data)
    });
  } catch (e) {
    console.log(e.message);
    res.status(500).send("Error in Saving");
  }
};
module.exports = CreateArtifact;
