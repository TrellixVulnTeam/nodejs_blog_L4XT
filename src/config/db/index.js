const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost/f8_education_dev');
        console.log('Connect Successfully');
    } catch (error) {
        console.log('Connect Failure');
    }
}

module.exports = {connect};