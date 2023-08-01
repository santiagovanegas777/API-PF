const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const activitySchema = new Schema(
    {
        activityName: {type: String, required: true},
        activityPlace: {type: String, required: true},
        activityDate: {type: String, required: true},
        activityTime: {type: String, required: true},
        activityPrice: {type: Number, required: true},
        activityImg: {type: String, required: true},
        activityDescription: {type: String, required: true}

    },{
        timestamps: true,
        collection: 'activities'
    }
)

const Activity = mongoose.model('activities', activitySchema);

module.exports = Activity;