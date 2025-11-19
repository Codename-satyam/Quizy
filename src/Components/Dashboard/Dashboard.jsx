import React, { useEffect, useMemo, useState } from 'react';
import './Dashboard.css';
import scoresApi from '../../api/scores';
import auth from '../../api/auth';

function Dashboard() {
  const [scores, setScores] = useState([]);
  const [query, setQuery] = useState('');
  const [filterDifficulty, setFilterDifficulty] = useState('');
  const [filterMy, setFilterMy] = useState(true);

  useEffect(() => {
    setScores(scoresApi.getScores());
  }, []);

  const current = auth.getCurrentUser();

  const filtered = useMemo(() => {
    return scores.filter((s) => {
      if (filterMy && current) {
        if (!s.email || s.email !== current.email) return false;
      }
      if (filterDifficulty) {
        if (!s.quiz || !s.quiz.toLowerCase().includes(filterDifficulty.toLowerCase())) return false;
      }
      if (query) {
        const q = query.toLowerCase();
        return (
          (s.name && s.name.toLowerCase().includes(q)) ||
          (s.quiz && s.quiz.toLowerCase().includes(q)) ||
          (s.email && s.email.toLowerCase().includes(q))
        );
      }
      return true;
    });
  }, [scores, query, filterDifficulty, filterMy, current]);
  return (
    <div className="dashboard-root">
      <div className="dashboard-box">
        <h2>Scores Dashboard</h2>

        <div className="dashboard-controls">
          <div>
            <label>Search:</label>
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search name, quiz or email" />
          </div>
          <div>
            <label>Filter difficulty:</label>
            <select value={filterDifficulty} onChange={(e) => setFilterDifficulty(e.target.value)}>
              <option value="">Any</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          <div>
            <label>
              <input type="checkbox" checked={filterMy} onChange={(e) => setFilterMy(e.target.checked)} /> My scores only
            </label>
          </div>
        </div>

        <div className="scores-table-wrap">
          <table className="scores-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Quiz Choice</th>
                <th>Score</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={5} style={{ textAlign: 'center' }}>No scores found</td>
                </tr>
              ) : (
                filtered.map((s) => (
                  <tr key={s.id}>
                    <td>{s.name}</td>
                    <td>{s.email}</td>
                    <td>{s.quiz}</td>
                    <td>{s.score}/{s.total}</td>
                    <td>{new Date(s.date).toLocaleString()}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
