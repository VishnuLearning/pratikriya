const mongoose = require("../config/mongodb");

const feedbackForm = {
    //define schema
};

module.exports = mongoose.model("FeedbackForm", feedbackForm);

