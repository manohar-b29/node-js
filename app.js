const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000; // still defaults to 3000, but can be overridden

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Default route (optional — index.html will load automatically)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

