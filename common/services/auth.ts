interface User {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
}

// Load existing users from localStorage or start with a default user
const storedUsers = localStorage.getItem("mockUsers");
const users: User[] = storedUsers ? JSON.parse(storedUsers) : [{ email: "test@example.com", password: "123456" }];

// Helper to persist users
const saveUsers = () => localStorage.setItem("mockUsers", JSON.stringify(users));

export const login = async (userData: User) => {
  const user = users.find((u) => u.email === userData.email && u.password === userData.password);
  if (!user) throw new Error("Invalid email or password");

  const token = "mock-jwt-token";
  localStorage.setItem("token", token);
  return { token, user };
};

export const register = async (userData: User) => {
  const exists = users.find((u) => u.email === userData.email);
  if (exists) throw new Error("Email already registered");

  const newUser = { ...userData};
  users.push(newUser);
  saveUsers(); // persist user
  return { user: newUser };
};

export const logout = () => {
  localStorage.removeItem("token");
  // user remains in localStorage/mockUsers
};
