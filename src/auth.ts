export function validateUser(user: User) {
    if (!user.email) {
        throw new Error("Email missing");
    }

    return true;
}
