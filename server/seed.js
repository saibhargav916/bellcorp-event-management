<<<<<<< HEAD
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Event = require("./models/Event");

require("dotenv").config();
mongoose.connect(process.env.MONGO_URI);


const seedEvents = async () => {
  await Event.deleteMany();

  await Event.insertMany([
    {
      name: "React Conference",
      organizer: "Tech Org",
      location: "Hyderabad",
      date: new Date("2026-05-10"),
      description: "Frontend Conference",
      capacity: 50,
      category: "Tech"
    },
    {
      name: "AIML Conference",
      organizer: "Tech Org",
      location: "Hyderabad",
      date: new Date("2026-04-15"),
      description: "Data Engineer Conference",
      capacity: 55,
      category: "Tech"
    },
    {
      name: "AI Conference",
      organizer: "Tech Org",
      location: "Hyderabad",
      date: new Date("2026-06-03"),
      description: "AI Conference",
      capacity: 60,
      category: "Tech"
    },
    {
      name: "Cybersecurity Conference",
      organizer: "Tech Org",
      location: "Hyderabad",
      date: new Date("2026-05-30"),
      description: "Cyber Conference",
      capacity: 50,
      category: "Tech"
    },
    {
      name: "Music Fest",
      organizer: "Live Nation",
      location: "Delhi",
      date: new Date("2026-07-15"),
      description: "Music Festival",
      capacity: 100,
      category: "Music"
    },
    {
      name: "Anirudh Music Concert",
      organizer: "Live Nation",
      location: "Chennai",
      date: new Date("2026-04-05"),
      description: "Music Festival",
      capacity: 400,
      category: "Music"
    },
    {
      name: "Anirudh Music Concert",
      organizer: "Live Nation",
      location: "Kochi",
      date: new Date("2026-12-22"),
      description: "Music Festival",
      capacity: 300,
      category: "Music"
    },
    {
      name: "Yuvan Music Concert",
      organizer: "Live Nation",
      location: "Hyderabad",
      date: new Date("2026-03-25"),
      description: "Music Festival",
      capacity: 300,
      category: "Music"
    },
    {
      name: "Rangoli Celebrations",
      organizer: "Zam Events",
      location: "Mumbai",
      date: new Date("2026-03-04"),
      description: "Holi Festival",
      capacity: 300,
      category: "Rangoli"
    },
    {
      name: "Rangoli Celebrations",
      organizer: "Hash Events",
      location: "Delhi",
      date: new Date("2026-03-04"),
      description: "Holi Festival",
      capacity: 300,
      category: "Rangoli"
    },
    {
      name: "Holi Rangoli",
      organizer: "VE Events",
      location: "Hyderabad",
      date: new Date("2026-03-04"),
      description: "Holi Festival",
      capacity: 300,
      category: "Rangoli"
    }
  ]);

  console.log("Seeded successfully");
  process.exit();
};

seedEvents();
=======
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Event = require("./models/Event");

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const seedEvents = async () => {
  await Event.deleteMany();

  await Event.insertMany([
    {
      name: "React Conference",
      organizer: "Tech Org",
      location: "Hyderabad",
      date: new Date("2026-05-10"),
      description: "Frontend Conference",
      capacity: 50,
      category: "Tech"
    },
    {
      name: "AIML Conference",
      organizer: "Tech Org",
      location: "Hyderabad",
      date: new Date("2026-04-15"),
      description: "Data Engineer Conference",
      capacity: 55,
      category: "Tech"
    },
    {
      name: "AI Conference",
      organizer: "Tech Org",
      location: "Hyderabad",
      date: new Date("2026-06-03"),
      description: "AI Conference",
      capacity: 60,
      category: "Tech"
    },
    {
      name: "Cybersecurity Conference",
      organizer: "Tech Org",
      location: "Hyderabad",
      date: new Date("2026-05-30"),
      description: "Cyber Conference",
      capacity: 50,
      category: "Tech"
    },
    {
      name: "Music Fest",
      organizer: "Live Nation",
      location: "Delhi",
      date: new Date("2026-07-15"),
      description: "Music Festival",
      capacity: 100,
      category: "Music"
    },
    {
      name: "Anirudh Music Concert",
      organizer: "Live Nation",
      location: "Chennai",
      date: new Date("2026-04-05"),
      description: "Music Festival",
      capacity: 400,
      category: "Music"
    },
    {
      name: "Anirudh Music Concert",
      organizer: "Live Nation",
      location: "Kochi",
      date: new Date("2026-12-22"),
      description: "Music Festival",
      capacity: 300,
      category: "Music"
    },
    {
      name: "Yuvan Music Concert",
      organizer: "Live Nation",
      location: "Hyderabad",
      date: new Date("2026-03-25"),
      description: "Music Festival",
      capacity: 300,
      category: "Music"
    },
    {
      name: "Rangoli Celebrations",
      organizer: "Zam Events",
      location: "Mumbai",
      date: new Date("2026-03-04"),
      description: "Holi Festival",
      capacity: 300,
      category: "Rangoli"
    },
    {
      name: "Rangoli Celebrations",
      organizer: "Hash Events",
      location: "Delhi",
      date: new Date("2026-03-04"),
      description: "Holi Festival",
      capacity: 300,
      category: "Rangoli"
    },
    {
      name: "Holi Rangoli",
      organizer: "VE Events",
      location: "Hyderabad",
      date: new Date("2026-03-04"),
      description: "Holi Festival",
      capacity: 300,
      category: "Rangoli"
    }
  ]);

  console.log("Seeded successfully");
  process.exit();
};

seedEvents();
>>>>>>> 9dbec2931f522b93ea3ea727b1b5a615b8705091
