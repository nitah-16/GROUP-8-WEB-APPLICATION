const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000; // You can change this if needed

// Enable CORS so your React frontend can talk to this backend server
app.use(cors());
app.use(express.json());

// Task 5 Mandatory Health Endpoint for Tutukayo Mobile
app.get('/api/health', (req, res) => {
    res.status(200).json({
        "status": "success",
        "message": "Tutukayo Mobile API is running smoothly"
    });
});

app.listen(PORT, () => {
    console.log(`Backend server is running successfully on port ${PORT}`);
});