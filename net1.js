const roleA = ["admin", "manger"];
const roleB = ["user", "recepitation"];
const newRole = roleA.some((role) => roleB.includes(role));
console.log(newRole);
