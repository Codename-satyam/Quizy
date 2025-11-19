const SCORES_KEY = 'qq_scores';

function loadScores() {
  try {
    const raw = localStorage.getItem(SCORES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveScores(list) {
  localStorage.setItem(SCORES_KEY, JSON.stringify(list));
}

export function addScore(record) {
  const list = loadScores();
  list.push({ id: Date.now(), ...record });
  saveScores(list);
}

export function getScores() {
  return loadScores();
}

export function clearScores() {
  saveScores([]);
}

const scores = { addScore, getScores, clearScores };
export default scores;
