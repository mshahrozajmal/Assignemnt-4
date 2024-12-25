const express = require('express');
const connectDB = require('./config/db-connection');
const userRoutes = require('./routes/userRoutes');
const path = require('path');

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());

// Database Connection
connectDB();

// Routes
app.use('/api/users', userRoutes);

// Serve static files from "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

