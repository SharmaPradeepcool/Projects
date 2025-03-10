import { useState } from "react";

function AdminPanel({ events, setEvents }) {
    const [editId, setEditId] = useState(null);
    const [editTitle, setEditTitle] = useState("");
    const [editDate, setEditDate] = useState("");
    const [editCategory, setEditCategory] = useState("");

    // DELETE EVENT
    const handleDelete = (id) => {
        setEvents(events.filter(event => event.id !== id));
    };

    // EDIT EVENT
    const handleEdit = (event) => {
        setEditId(event.id);
        setEditTitle(event.title);
        setEditDate(event.date);
        setEditCategory(event.category);
    };

    // SAVE EDIT
    const handleSave = () => {
        setEvents(events.map(event =>
            event.id === editId ? { ...event, title: editTitle, date: editDate, category: editCategory } : event
        ));
        setEditId(null);
    };

    return (
        <div className="admin-panel">
            <h2>Manage Events</h2>
            {events.map(event => (
                <div key={event.id} className="event-card">
                    {editId === event.id ? (
                        <>
                            <input type="text" value={editTitle} onChange={(e) => setEditTitle(e.target.value)} />
                            <input type="date" value={editDate} onChange={(e) => setEditDate(e.target.value)} />
                            <input type="text" value={editCategory} onChange={(e) => setEditCategory(e.target.value)} />
                            <button onClick={handleSave}>Save</button>
                            <button onClick={() => setEditId(null)}>Cancel</button>
                        </>
                    ) : (
                        <>
                            <h3>{event.title}</h3>
                            <p>{event.date} - {event.category}</p>
                            <button onClick={() => handleEdit(event)}>Edit</button>
                            <button onClick={() => handleDelete(event.id)}>Delete</button>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
}

export default AdminPanel;
