require('dotenv').config();
const express = require('express');
const httpStatusText = require('./utils/httpStatusText');
const app = express();

// ==> JSON MIDDLEWARE
app.use(express.json()); 


// ==> ROUTING
const aiRoutes = require('./routes/aiRoutes');
app.use('/api', aiRoutes);

// ==> ROUTE ERR HANDLER
app.all(/.*/, (req, res) => {
    res.status(404).json({
        status: httpStatusText.ERROR,
        message: "route is not available",
        code: 404
    });
});

// ==> GLOBAL ERR HANDLER
app.use((error, req, res, next) => {    
    res.status(error.statusCode || 500).json({status: error.statusText || "error",
        message: error.message || "unknown error",
        code: error.statusCode || 500
    });
})

// ==> LISTENING TO PORT
app.listen(5000 , ()=>{    
    console.log(`Listening to port 5000 !`);
});