export function validateUser(user: User) {
    if (!user.email) {
        throw new Error("Invalid email");
    }

    return false;
}
