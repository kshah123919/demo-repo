export interface User {
  email: string;
}

export function validateUser(user: User) {
  if (!user.email) {
    throw new Error("Email is required");
  }

  return true;
}
