require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRouter = require('./routes/userRoutes');
const vehicleRouter = require('./routes/vehicleRoute');
const app = express();


// middleware
app.use(express.json());
app.use(cors());

// database connection
mongoose.connect(process.env.DBURI)
    // if passed
    .then(() => {
        console.log("Database connected successfully");
        const port = process.env.PORT;
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        })
    })
    // if failed
    .catch(() => {
        console.log("Databse failed to connect");
    });


// routes 
app.use('/user', userRouter);
app.use('/vehicle', vehicleRouter);

app.get('*', (req, res)=>{
    res.status(404).json({error: "Page not Found"});
})

app.post('*', (req, res)=>{
    res.status(404).json({error: "Page not Found"});
})