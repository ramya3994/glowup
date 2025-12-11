import { useEffect, useState } from "react";
import { createWin, deleteWin, getAllWins, updateWin } from "./api";
import "./App.css";
import WinCharts from "./WinCharts";

function App() {
  const [wins, setWins] = useState([]);
  const [form, setForm] = useState({
    date: "",
    title: "",
    category: "",
    mood: 3,
    notes: "",
  });
  const [editingId, setEditingId] = useState(null);
  const [filterDate, setFilterDate] = useState("");
  const [filterCategory, setFilterCategory] = useState("");

  const loadWins = async () => {
    try {
      const res = await getAllWins();
      setWins(res.data);
    } catch (err) {
      console.error("Error loading wins", err);
    }
  };

  useEffect(() => {
    loadWins();
  }, []);

  const resetForm = () => {
    setForm({
      date: "",
      title: "",
      category: "",
      mood: 3,
      notes: "",
    });
    setEditingId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const winPayload = { ...form };
    if (!winPayload.date) delete winPayload.date;

    try {
      if (editingId !== null) {
        await updateWin(editingId, winPayload);
      } else {
        await createWin(winPayload);
      }
      resetForm();
      loadWins();
    } catch (err) {
      console.error("Error saving win", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteWin(id);
      if (editingId === id) resetForm();
      loadWins();
    } catch (err) {
      console.error("Error deleting win", err);
    }
  };

  const handleEditClick = (win) => {
    setForm({
      date: win.date || "",
      title: win.title || "",
      category: win.category || "",
      mood: win.mood ?? 3,
      notes: win.notes || "",
    });
    setEditingId(win.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const clearFilters = () => {
    setFilterDate("");
    setFilterCategory("");
  };

  // FRONTEND FILTERING
  const filteredWins = wins.filter((w) => {
    const matchDate = filterDate ? w.date === filterDate : true;
    const matchCategory = filterCategory
      ? (w.category || "")
          .toLowerCase()
          .includes(filterCategory.toLowerCase())
      : true;
    return matchDate && matchCategory;
  });

  return (
    <div className="app">
      <h1>GlowUp – Daily Small Wins Tracker</h1>
      <p className="app-subtitle">
        Log your small victories every day and watch your progress grow ✨
      </p>

      <form onSubmit={handleSubmit} className="win-form">
        {editingId !== null && (
          <div className="editing-banner">
            <span>Editing win #{editingId}</span>
            <button type="button" onClick={resetForm}>
              Cancel edit
            </button>
          </div>
        )}

        <input
          type="date"
          name="date"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
        />

        <input
          type="text"
          name="title"
          placeholder="Your win (e.g., Completed Gym)"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
        />

        <input
          type="text"
          name="category"
          placeholder="Category (Study, Exercise, Career...)"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        />

        <input
          type="number"
          name="mood"
          min="1"
          max="5"
          value={form.mood}
          onChange={(e) => setForm({ ...form, mood: e.target.value })}
        />

        <textarea
          name="notes"
          placeholder="Notes (what did you do, how did it feel?)"
          value={form.notes}
          onChange={(e) => setForm({ ...form, notes: e.target.value })}
        />

        <button type="submit">
          {editingId !== null ? "Update Win" : "Add Win"}
        </button>
      </form>

      <div className="section-header">
        <h2>All Wins</h2>
        <div className="filters">
          <input
            type="date"
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
          />
          <input
            type="text"
            placeholder="Filter by category"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          />
          <button type="button" onClick={clearFilters}>
            Clear
          </button>
        </div>
      </div>

      {filteredWins.length === 0 ? (
        <div className="empty-state">No wins yet. Add your first one! 🌱</div>
      ) : (
        <ul className="win-list">
          {filteredWins.map((w) => (
            <li key={w.id} className="win-item">
              <div className="win-main">
                <div>
                  <strong>{w.title}</strong>{" "}
                  <span>
                    ({w.category && w.category.trim()
                      ? w.category
                      : "General"}
                    ) – Mood: {w.mood}
                  </span>
                </div>
                <div className="win-meta">
                  <div>Date: {w.date}</div>
                  {w.notes && <div>Notes: {w.notes}</div>}
                </div>
              </div>
              <div className="win-actions">
                <button
                  type="button"
                  className="edit-btn"
                  onClick={() => handleEditClick(w)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="delete-btn"
                  onClick={() => handleDelete(w.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* Charts section */}
      <WinCharts wins={wins} />
    </div>
  );
}

export default App;
