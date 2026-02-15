<<<<<<< HEAD
const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event",
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("Registration", registrationSchema);
=======
const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event",
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("Registration", registrationSchema);
>>>>>>> 9dbec2931f522b93ea3ea727b1b5a615b8705091
