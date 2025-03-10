import { useState } from "react";

function Events() {
const [events, setEvents] = useState([
    { title: "Charity Drive", date: "2025-03-15", category: "Charity" },
    { title: "Community Meetup", date: "2025-03-20", category: "Social" },
]);
const [filter, setFilter] = useState("");
const [newEvent, setNewEvent] = useState({ title: "", date: "", category: "" });

const handleAddEvent = () => {
    if (newEvent.title && newEvent.date && newEvent.category) {
    setEvents([...events, newEvent]);
    setNewEvent({ title: "", date: "", category: "" });
    }
};

return (
    <div className="container">
    <h1>Upcoming Events</h1>

      {/* Filter Dropdown */}
    <label>Filter by Category:</label>
    <select onChange={(e) => setFilter(e.target.value)}>
        <option value="">All</option>
        <option value="Religious">Religious</option>
        <option value="Social">Social</option>
        <option value="Charity">Charity</option>
    </select>

      {/* Event List */}
    {events
        .filter((event) => (filter ? event.category === filter : true))
        .map((event, index) => (
        <div key={index} className="event-card">
            <h2>{event.title}</h2>
            <p>{event.date} - {event.category}</p>
        </div>
        ))}

      {/* Add New Event Form */}
    <h2>Add New Event</h2>
    <input
        type="text"
        placeholder="Event Title"
        value={newEvent.title}
        onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
    />
    <input
        type="date"
        value={newEvent.date}
        onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
    />
    <select
        value={newEvent.category}
        onChange={(e) => setNewEvent({ ...newEvent, category: e.target.value })}
    >
        <option value="">Select Category</option>
        <option value="Religious">Religious</option>
        <option value="Social">Social</option>
        <option value="Charity">Charity</option>
    </select>
    <button onClick={handleAddEvent}>Add Event</button>
    </div>
);
}

export default Events;
