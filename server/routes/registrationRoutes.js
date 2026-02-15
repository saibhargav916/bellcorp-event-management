<<<<<<< HEAD
const express = require("express");
const Registration = require("../models/Registration");
const Event = require("../models/Event");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/:eventId", protect, async (req, res) => {
  const { eventId } = req.params;

  const already = await Registration.findOne({
    userId: req.user._id,
    eventId
  });
  if (already) return res.status(400).json({ message: "Already registered" });

  const event = await Event.findById(eventId);
  const count = await Registration.countDocuments({ eventId });

  if (count >= event.capacity)
    return res.status(400).json({ message: "Event full" });

  await Registration.create({ userId: req.user._id, eventId });
  res.json({ message: "Registered successfully" });
});

router.get("/my", protect, async (req, res) => {
  const registrations = await Registration.find({ userId: req.user._id })
    .populate("eventId");
   const valid = registrations.filter(r => r.eventId);

  res.json(registrations);
});

router.delete("/:eventId", protect, async (req, res) => {
  await Registration.findOneAndDelete({
    userId: req.user._id,
    eventId: req.params.eventId
  });
  res.json({ message: "Registration cancelled" });
});

module.exports = router;
=======
const express = require("express");
const Registration = require("../models/Registration");
const Event = require("../models/Event");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/:eventId", protect, async (req, res) => {
  const { eventId } = req.params;

  const already = await Registration.findOne({
    userId: req.user._id,
    eventId
  });
  if (already) return res.status(400).json({ message: "Already registered" });

  const event = await Event.findById(eventId);
  const count = await Registration.countDocuments({ eventId });

  if (count >= event.capacity)
    return res.status(400).json({ message: "Event full" });

  await Registration.create({ userId: req.user._id, eventId });
  res.json({ message: "Registered successfully" });
});

router.get("/my", protect, async (req, res) => {
  const registrations = await Registration.find({ userId: req.user._id })
    .populate("eventId");
   const valid = registrations.filter(r => r.eventId);

  res.json(registrations);
});

router.delete("/:eventId", protect, async (req, res) => {
  await Registration.findOneAndDelete({
    userId: req.user._id,
    eventId: req.params.eventId
  });
  res.json({ message: "Registration cancelled" });
});

module.exports = router;
>>>>>>> 9dbec2931f522b93ea3ea727b1b5a615b8705091
