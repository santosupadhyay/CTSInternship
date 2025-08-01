const express = require('express')
const passport = require('passport')
const session = require('express-session')
const cors = require('cors')

const app = express()

require('dotenv').config()
require('./auth/google')


app.use(express.json())
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

const PORT = process.env.PORT 

app.use(cors({ origin : 'http://localhost:5173', credentials:true}))
app.use(session({
  secret: process.env.MY_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false,
    httpOnly: true,
    sameSite: 'lax'
  }
}));

app.use(passport.initialize())
app.use(passport.session())


app.get("/auth/google", passport.authenticate("google",{scope:["profile", "email"]} ))

app.get(
    "/auth/google/callback",
    passport.authenticate("google",{
        failureRedirect:"/login",
        session:true
    }),
    (request, response) => {
        response.redirect("http://localhost:5173/dashboard")
    }
)

app.get('/api/user', (request, response) => {
    if(request.isAuthenticated()){
        response.json({
            user:request.user
        })
    }else{
        response.status(401).json({ error: 'Not authenticated'})
    }
})

// In your Express backend
app.get("/auth/logout", (req, res, next) => {
  req.logout(function (err) {
    if (err) return next(err);

    req.session.destroy(() => {
      res.clearCookie("connect.sid");
      res.status(200).json({ message: "Logged out" });
    });
  });
});

app.get('/', (req,res) => {
    try {
        res.send('Hello backend')
    } catch (error) {
        console.error({ message : error})
    }
})

app.listen(PORT, () => {
    console.log(`app is running in the port : ${PORT}`)
})

module.exports = app