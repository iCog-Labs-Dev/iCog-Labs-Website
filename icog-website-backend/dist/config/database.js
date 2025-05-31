const parse = require("pg-connection-string").parse;
const parsed = parse(process.env.DATABASE_URL);
console.log("🔍 Parsed DB Config:", parsed);
module.exports = () => ({
    connection: {
        client: "postgres",
        connection: {
            host: parsed.host,
            port: "5432",
            database: parsed.database,
            user: parsed.user,
            password: parsed.password,
            ssl: {
                rejectUnauthorized: false,
            },
        },
    },
});
