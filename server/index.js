const cookieSession = require('cookie-session');
const express = require('express');
const passport = require('passport');
const cors = require('cors');
require('./passport');
const authRoute = require('./routes/auth.route')

const app = express();
let PORT = "5000";

app.use(
    cookieSession({ name: "session", keys: ["Aman"], maxAge: 24 * 60 * 60 * 100 })
)

app.use(passport.initialize())
app.use(passport.session())
app.use(cors({
    origin: "http://localhost:3000",
    methods: "GET, POST, PUT, DELETE",
    credentials: true
}))

app.use("/auth", authRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port : ${PORT}`);
}).on('error', err => {
    if (err.code === 'EADDRINUSE') {
        console.log(`----- Port ${PORT} is busy. Please check the port and stop running application. -----`);
    } else {
        console.log(err);
    }
});