<<<<<<< HEAD
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import API from "../api";
import { useNavigate } from "react-router-dom";
import '../index.css'

function EventCard({ event }) {
  const { userToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (!userToken) {
      navigate("/login");
      return;
    }

    try {
      await API.post(
        `/register/${event._id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
      alert("Registered successfully!");
    } catch (error) {
      alert(error.response?.data?.message || "Error");
    }
  };

  return (
    <div className="event-card">
      <h3>{event.name}</h3>
      <p>{event.location}</p>
      <p>{new Date(event.date).toLocaleDateString()}</p>

      <button onClick={() => navigate(`/event/${event._id}`)}>
        View Details
      </button>

      <p style={{marginTop: '5px'}}>
  <strong>Available Seats:</strong> {event.availableSeats}
</p>

     {event.availableSeats > 0 ? (
  <button onClick={handleRegister}>
    Register
  </button>
) : (
  <p style={{ color: "red" }}>Sold Out</p>
)}
    </div>
  );
}

// const cardStyle = {
//   border: "1px solid #ddd",
//   padding: "15px",
//   margin: "10px",
//   borderRadius: "8px"
// };

export default EventCard;
=======
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import API from "../api";
import { useNavigate } from "react-router-dom";
import '../index.css'

function EventCard({ event }) {
  const { userToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (!userToken) {
      navigate("/login");
      return;
    }

    try {
      await API.post(
        `/register/${event._id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
      alert("Registered successfully!");
    } catch (error) {
      alert(error.response?.data?.message || "Error");
    }
  };

  return (
    <div className="event-card">
      <h3>{event.name}</h3>
      <p>{event.location}</p>
      <p>{new Date(event.date).toLocaleDateString()}</p>

      <button onClick={() => navigate(`/event/${event._id}`)}>
        View Details
      </button>

      <p style={{marginTop: '5px'}}>
  <strong>Available Seats:</strong> {event.availableSeats}
</p>

     {event.availableSeats > 0 ? (
  <button onClick={handleRegister}>
    Register
  </button>
) : (
  <p style={{ color: "red" }}>Sold Out</p>
)}
    </div>
  );
}

// const cardStyle = {
//   border: "1px solid #ddd",
//   padding: "15px",
//   margin: "10px",
//   borderRadius: "8px"
// };

export default EventCard;
>>>>>>> 9dbec2931f522b93ea3ea727b1b5a615b8705091
