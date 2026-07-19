export interface User {
  email: string;
}

export function validateUser(user: User) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(user.email)) {
    throw new Error("Invalid email format");
  }

  return true;
}
