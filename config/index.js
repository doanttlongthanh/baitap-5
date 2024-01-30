const mongoose = require("mongoose");
async function connect() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/diachido");
        console.log("kết nối thành công");
    } catch (error) {
        console.log("kết nối lõi");
    }
}

module.exports = { connect };
