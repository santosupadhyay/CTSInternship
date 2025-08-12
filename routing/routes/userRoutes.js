const express = require("express");
const router = express.Router();

// GET all users
router.get("/", (req, res) => {
  res.json([
    { id: 1, name: "Bibek" },
    { id: 2, name: "Santos" },
  ]);
});

// GET single user by ID
router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.json({ message: `User with ID ${id} fetched successfully` });
});

// POST - Create new user
router.post("/", (req, res) => {
  const { name } = req.body;
  res.status(201).json({ message: "User created successfully", name });
});

// PUT - Update user
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  res.json({ message: `User with ID ${id} updated`, name });
});

// DELETE - Remove user
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.json({ message: `User with ID ${id} deleted` });
});

module.exports = router;