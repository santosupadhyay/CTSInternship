const express = require("express");
const authRoutes = require("./routes/authRoutes");
const blogRoutes = require("./routes/blogRoutes");
const cors = require('cors')

require("dotenv").config();

const port = process.env.PORT;
const { mongodbConnection } = require("./config/connection");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());
app.use(cookieParser())

app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

mongodbConnection(process.env.MONGO_URI).then(() =>
  console.log(`mongodb connection successful!`)
);

app.use("/api/auth", authRoutes);
app.use("/api/blogs", blogRoutes);


app.get("/", (request, response) => {
  response.send("Hello backend");
});



app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
