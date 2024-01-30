const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema({
    name: { type: String },
    descripton: { type: String },
    image: { type: String },
});

module.exports = mongoose.model("Course", Course);
