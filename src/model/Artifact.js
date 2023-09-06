const mongoose = require("mongoose");

const Artifact = mongoose.Schema(
  {
    artifactName: {
      type: String,
      required: true,
    },
    artifactType: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Artifact", Artifact);
