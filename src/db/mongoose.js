const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL)
.then(() => {
    console.log('Connected to MongoDB');
}).catch(() => {
    console.log('Unable to connect to MongoDB');
});