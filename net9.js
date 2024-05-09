const { DateTime } = require("luxon");

const momentAgo = DateTime.now().minus({ seconds: 1 });
console.log(momentAgo.toISO());
