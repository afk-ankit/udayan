const express = require("express");
const app = express();
const path = require("path");
const session = require("express-session");
const MySQLStore = require("express-mysql-session")(session);
const checkAuthenticated = require("./middlewares/checkAuth");
const factulySignin = require("./routes/Faculty/FacultySignin");
const facultyLogin = require("./routes/Faculty/FacultyLogin");
const studentSignin = require("./routes/Student/StudentSignin");
const studentLogin = require("./routes/Student/StudentLogin");
const projectsRouter = require("./routes/Projects/projects");
const options = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "project_management_session",
};

const sessionStore = new MySQLStore(options);

app.use(
  session({
    key: "session",
    secret: "session_cookie_secret",
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(
  express.urlencoded({
    extended: "false",
  })
);
app.set("view engine", "ejs");
app.use(express.json());
app.get("/", (req, res) => {
  res.render("index");
});
app.use("/signin/faculty", factulySignin);
app.use("/signin/student", studentSignin);
app.use("/login/faculty", facultyLogin);
app.use("/login/student", studentLogin);
app.use("/projects", projectsRouter);
//error middle
app.use((err, req, res, next) => {
  res.send(err);
});
app.listen(3000, () => {
  console.log("server running in http://localhost:3000");
});
