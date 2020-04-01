const mongoose = require('mongoose');

mongoose.connect(process.env.MONGIDB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})