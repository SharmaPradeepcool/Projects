import { useNavigate } from "react-router-dom";

function Home() {
const navigate = useNavigate();

return (
    <div className="container">
    <h1>Connecting People Across Faiths & Interests</h1>
    <p>Connecting people of all faiths through events and community support.</p>
    <button onClick={() => navigate("/events")}>Explore Events</button>
    </div>
);
}

export default Home;
