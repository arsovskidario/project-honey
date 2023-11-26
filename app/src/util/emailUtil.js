export const extractUsernameFromEmail = (email) => {
    const regex = /^([^\s@]+)@/;
    const match = email.match(regex);
    return match[1];
}
