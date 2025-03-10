import { Link } from "react-router-dom";

const EventList = ({ events }) => {
return (
    <div>
    {events.map((event) => (
        <div key={event.id} style={{ border: "1px solid #ddd", padding: "10px", marginBottom: "10px" }}>
        <h3>
            <Link to={`/events/${event.id}`} style={{ textDecoration: "none", color: "black" }}>
            {event.name}
            </Link>
        </h3>
        <p>{event.date} - {event.category}</p>
        </div>
    ))}
    </div>
);
};

export default EventList;
