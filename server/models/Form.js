const mongoose = require('mongoose');
const FormSchema = new mongoose.Schema({
    name: String,
    email: String,
    regNo: String,
    course: String,
    formNo: String,
    status: { type: String, default: 'Pending' } // Added status field
});
const FormModel = mongoose.model("form", FormSchema);
module.exports = FormModel;
