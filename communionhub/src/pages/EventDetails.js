import { useParams } from "react-router-dom";

const EventDetails = ({ events = [] }) => {
    const { id } = useParams();
    const event = events.find((e) => e.id === Number(id)); // Ensure id is a number

    if (!event) {
        return <h2>Event Not Found</h2>;
    }

    return (
        <div>
            <h1>{event.name}</h1>
            <p>{event.description}</p>
            <p>Date: {event.date}</p>
            <p>Location: {event.location}</p>
        </div>
    );
};

export default EventDetails;
