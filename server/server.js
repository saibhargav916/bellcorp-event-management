<<<<<<< HEAD
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors");
require("dotenv").config();

const app = express()

app.use(cors());
app.use(express.json())

app.get('/', (request, response) => {
     response.send("API is running...")
})


app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/events", require("./routes/eventRoutes"));
app.use("/api/register", require("./routes/registrationRoutes"));


const PORT = process.env.PORT || 5000


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed:", err.message);
  });





=======
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors");
require("dotenv").config();

const app = express()

app.use(cors());
app.use(express.json())

app.get('/', (request, response) => {
     response.send("API is running...")
})


app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/events", require("./routes/eventRoutes"));
app.use("/api/register", require("./routes/registrationRoutes"));


const PORT = process.env.PORT || 5000


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed:", err.message);
  });





>>>>>>> 9dbec2931f522b93ea3ea727b1b5a615b8705091
