// Simple auth helper using localStorage for demo purposes
const USERS_KEY = "qq_users";
const CURRENT_KEY = "qq_currentUser";

function loadUsers() {
  try {
    const raw = localStorage.getItem(USERS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function register({ name, email, password }) {
  const users = loadUsers();
  if (users.find((u) => u.email === email)) {
    throw new Error("User already exists");
  }
  const user = { id: Date.now(), name, email, password };
  users.push(user);
  saveUsers(users);
  // auto-login after register
  localStorage.setItem(CURRENT_KEY, JSON.stringify({ id: user.id, name: user.name, email: user.email }));
  return user;
}

export function login({ email, password }) {
  const users = loadUsers();
  const u = users.find((x) => x.email === email && x.password === password);
  if (!u) throw new Error("Invalid credentials");
  localStorage.setItem(CURRENT_KEY, JSON.stringify({ id: u.id, name: u.name, email: u.email }));
  return { id: u.id, name: u.name, email: u.email };
}

export function logout() {
  localStorage.removeItem(CURRENT_KEY);
}

export function getCurrentUser() {
  try {
    const raw = localStorage.getItem(CURRENT_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

export function isAuthenticated() {
  return !!getCurrentUser();
}

const auth = { register, login, logout, getCurrentUser, isAuthenticated };
export default auth;
