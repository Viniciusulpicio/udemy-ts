const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

export default {
    port: 8080,
    dbUri: `mongodb+srv://${dbUser}:${dbPassword}@udemy-ts.mgi7bmx.mongodb.net/?retryWrites=true&w=majority&appName=udemy-ts`,
    env: "development",
};