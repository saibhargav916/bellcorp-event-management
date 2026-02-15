
import { useEffect, useState, useContext } from "react";
import API from "../api";
import { AuthContext } from "../context/AuthContext";
import "../index.css"

function Dashboard() {

  const [registrations, setRegistrations] = useState([]);
  const { userToken } = useContext(AuthContext);

  useEffect(() => {
    const fetchRegistrations = async () => {
      try {
        const res = await API.get("/register/my", {
          headers: {
            Authorization: `Bearer ${userToken}`
          }
        });

        setRegistrations(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRegistrations();
  }, [userToken]);

  const validRegistrations = registrations.filter(
  (item) => item?.eventId && item.eventId.date
);

const today = new Date();

const upcomingEvents = validRegistrations.filter(
  (item) => new Date(item.eventId.date) > today
);

const pastEvents = validRegistrations.filter(
  (item) => new Date(item.eventId.date) <= today
);

  return (
    <div className="container">
      <h2 className="dashboard-title">My Registered Events</h2>

      
      <h3 className="section-title">Upcoming Events</h3>

{upcomingEvents.length === 0 ? (
  <p className="empty-state">No upcoming events</p>
) : (
  <div className="dashboard-grid">
    {upcomingEvents.map(item => (
      <div key={item._id} className="dashboard-card">

       <h4>{item.eventId?.name}</h4>

        <p><strong>Organizer:</strong> {item.eventId.organizer}</p>
        <p><strong>Location:</strong> {item.eventId.location}</p>
        <p><strong>Date:</strong> {new Date(item.eventId.date).toLocaleString()}</p>
        <p><strong>Description:</strong> {item.eventId.description}</p>
        <p><strong>Category:</strong> {item.eventId.category}</p>
        <p><strong>Total Capacity:</strong> {item.eventId.capacity}</p>

        <button
          className="cancel-btn"
          onClick={async () => {
  try {
    await API.delete(`/register/${item.eventId._id}`, {
      headers: {
        Authorization: `Bearer ${userToken}`
      }
    });

    
    setRegistrations(prev =>
      prev.filter(r => r.eventId?._id !== item.eventId._id)
    );

  } catch (error) {
    console.log(error);
  }
}}

        >
          Cancel Registration
        </button>

      </div>
    ))}
  </div>
)}


      
      <h3 className="section-title">Past Events</h3>

      {pastEvents.length === 0 ? (
        <p className="empty-state">No past events</p>
      ) : (
        <div className="dashboard-grid">
          {pastEvents.map(item => (
            <div key={item._id} className="dashboard-card past-card">
              <h4>{item.eventId.name}</h4>
              <p>{item.eventId.location}</p>
              <p>{new Date(item.eventId.date).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}

export default Dashboard;
