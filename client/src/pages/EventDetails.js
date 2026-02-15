<<<<<<< HEAD
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api";
import '../index.css'

function EventDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      const res = await API.get(`/events/${id}`);
      setEvent(res.data);
    };

    fetchEvent();
  }, [id]);

  if (!event) return <p>Loading...</p>;

  return (
    <>
    <div className="eventDetails">
      <h2>{event.name}</h2>
      <p>{event.description}</p>
      <p>Place: {event.location}</p>
      <p>Date: {new Date(event.date).toLocaleDateString()}</p>
      <p>Category: {event.category}</p>
    </div>
    </>
  );
}

export default EventDetails;
=======
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api";
import '../index.css'

function EventDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      const res = await API.get(`/events/${id}`);
      setEvent(res.data);
    };

    fetchEvent();
  }, [id]);

  if (!event) return <p>Loading...</p>;

  return (
    <>
    <div className="eventDetails">
      <h2>{event.name}</h2>
      <p>{event.description}</p>
      <p>Place: {event.location}</p>
      <p>Date: {new Date(event.date).toLocaleDateString()}</p>
      <p>Category: {event.category}</p>
    </div>
    </>
  );
}

export default EventDetails;
>>>>>>> 9dbec2931f522b93ea3ea727b1b5a615b8705091
