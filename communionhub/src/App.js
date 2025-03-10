import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./pages/Home";
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails";
import Navbar from "./components/Navbar";
import AdminPanel from "./components/AdminPanel";
import { useState } from "react";

function App() {
    // State to manage events
    const [events, setEvents] = useState([
        { id: 1, title: "Charity Drive", date: "2025-03-15", category: "Charity" },
        { id: 2, title: "Community Meetup", date: "2025-03-20", category: "Social" }
    ]);

    return (
        <ThemeProvider>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/events" element={<Events />} />
                <Route path="/events/:id" element={<EventDetails />} />
                <Route path="/admin" element={<AdminPanel events={events} setEvents={setEvents} />} />
            </Routes>
        </ThemeProvider>
    );
}

export default App;
