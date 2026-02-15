import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import EventCard from "../components/EventCard";
import API from "../api";
import '../index.css'

function Events() {

  const [events, setEvents] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("search") || "";
  const category = searchParams.get("category") || "";
  const location = searchParams.get("location") || "";
  const page = Number(searchParams.get("page")) || 1;
  const startDate = searchParams.get("startDate") || "";
const endDate = searchParams.get("endDate") || "";


  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await API.get(
          `/events?search=${search}&category=${category}&location=${location}&page=${page}&startDate=${startDate}&endDate=${endDate}
`
        );
        setEvents(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchEvents();
  }, [search, category, location,startDate, endDate, page]);

  return (
    <div className="container"> 

      <h2>Events</h2>

      <div className="filters">

    
      <input
        type="text"
        placeholder="Search events..."
        value={search}
        onChange={(e) =>
          setSearchParams({
            search: e.target.value,
            category,
            location,
            page: 1
          })
        }
      />
     <label className="dateLabel">Start Date:</label>
      <input
  type="date"
  value={startDate}
  onChange={(e) =>
    setSearchParams({
      search,
      category,
      location,
      startDate: e.target.value,
      endDate,
      page: 1
    })
  }
/>
 <label className="dateLabel">End Date:</label>
<input
  type="date"
  value={endDate}
  onChange={(e) =>
    setSearchParams({
      search,
      category,
      location,
      startDate,
      endDate: e.target.value,
      page: 1
    })
  }
/>


      
      <select
        value={category}
        onChange={(e) =>
          setSearchParams({
            search,
            category: e.target.value,
            location,
            page: 1
          })
        }
      >
        <option value="">All Categories</option>
        <option value="Tech">Tech</option>
        <option value="Music">Music</option>
        <option value="Rangoli">Rangoli</option>
        <option value="Diwali">Diwali</option>
        <option value="Sports">Sports</option>
      </select>

      
      <select
        value={location}
        onChange={(e) =>
          setSearchParams({
            search,
            category,
            location: e.target.value,
            page: 1
          })
        }
      >
        <option value="">All Locations</option>
        <option value="Hyderabad">Hyderabad</option>
        <option value="Chennai">Chennai</option>
        <option value="Kochi">Kochi</option>
        <option value="Bangalore">Bangalore</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Delhi">Delhi</option>
      </select>

      </div>

      
      {events.map((event) => (
        <div key={event._id}>
          {/* <h3>{event.name}</h3> */}
          {/* <p>{event.location}</p> */}
        </div>
      ))}

      {events.map((event) => (
  <EventCard key={event._id} event={event} />
))}

      
    <div className="pagination">
  
      <button
        onClick={() =>
          setSearchParams({
            search,
            category,
            location,
            page: page - 1
          })
        }
        disabled={page === 1}
      >
        Prev
      </button>

      <button
        onClick={() =>
          setSearchParams({
            search,
            category,
            location,
            page: page + 1
          })
        }
        disabled={events.length < 5}
      >
        Next
      </button>
  </div>
    </div>
  );
}

export default Events;
