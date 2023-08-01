const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const destinationSchema = new Schema(
    {
        destinationPlace: {type: String, required: true},
        destinationDate: {type: String, required: true},
        destinationPrice: {type: Number, required: true},
        destinationDescription: {type: String, required: true},
        destinationIncluded: [{type: String}],
        destinationHotel:{
            "hotelName": { type: String, required: true},
            "hotelCategory": { type: String, required: false, default:""},
            "hotelLocation": { type: String, required: false, default:""}
            },
        destinationInformation: { type: String, required: false, default:""},
        destinationImg:[{type: String}]
    },{
        timestamps: true,
        collection: 'destinations'
    }
)

const Destination = mongoose.model('destinations', destinationSchema);

module.exports = Destination;