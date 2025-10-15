// const router = require('express').Router();
// const bcrypt = require('bcryptjs');
// const User = require('../models/user.model');

// // POST /api/users/register
// router.post('/register', async (req, res) => {
//   try {
//     const { firstName, lastName, email, password } = req.body;

//     // Check if user already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ msg: "An account with this email already exists." });
//     }

//     // Hash the password
//     const salt = await bcrypt.genSalt(10);
//     const passwordHash = await bcrypt.hash(password, salt);

//     // Create a new user
//     const newUser = new User({
//       firstName,
//       lastName,
//       email,
//       password: passwordHash,
//     });

//     const savedUser = await newUser.save();
//     res.json(savedUser);

//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// module.exports = router;

// backend/routes/users.js

const router = require('express').Router();
const bcrypt = require('bcryptjs');
const User = require('../models/user.model');

/* =========================================
   @route   POST /api/users/register
   @desc    Register a new user
   @access  Public
   ========================================= */
router.post('/register', async (req, res) => {
  try {
    // Destructure request body
    const { firstName, lastName, email, password } = req.body;

    // --- Validation ---
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ msg: "Please enter all required fields." });
    }

    // Check if user already exists in the database
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({ msg: "An account with this email already exists." });
    }

    // --- Password Hashing ---
    // Generate a salt (random string) to add to the password before hashing
    const salt = await bcrypt.genSalt(10);
    // Hash the password with the salt
    const passwordHash = await bcrypt.hash(password, salt);

    // --- Create and Save New User ---
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: passwordHash, // Store the hashed password, not the original
    });

    const savedUser = await newUser.save();

    // Send back the saved user data (excluding the password)
    res.status(201).json({
        id: savedUser._id,
        firstName: savedUser.firstName,
        lastName: savedUser.lastName,
        email: savedUser.email
    });

  } catch (err) {
    // Handle server errors
    console.error(err.message);
    res.status(500).json({ error: "Server error occurred during registration." });
  }
});


/* =========================================
   @route   POST /api/users/login
   @desc    Authenticate a user and log them in
   @access  Public
   ========================================= */
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // --- Validation ---
    if (!email || !password) {
      return res.status(400).json({ msg: "Please enter both email and password." });
    }

    // --- Find User ---
    // Find the user by email in the database
    const user = await User.findOne({ email: email });
    if (!user) {
      // If no user is found with that email
      return res.status(400).json({ msg: "Invalid credentials." });
    }

    // --- Compare Passwords ---
    // Compare the submitted password with the hashed password stored in the database
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      // If passwords don't match
      return res.status(400).json({ msg: "Invalid credentials." });
    }

    // --- Successful Login ---
    // If login is successful, send back user data (excluding the password)
    res.json({
      id: user._id,
      firstName: user.firstName,
      email: user.email,
    });

  } catch (err) {
    // Handle server errors
    console.error(err.message);
    res.status(500).json({ error: "Server error occurred during login." });
  }
});


// Export the router to be used in server.js
module.exports = router;