const mongoose = require('mongoose');

const connect = async () => {
    return mongoose.connect("mongodb+srv://chanchal:chsv1609@cluster0.muj7zwv.mongodb.net/myntra?retryWrites=true&w=majority")
}

module.exports = connect;