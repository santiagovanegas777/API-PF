const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Ajusto el modelo al que hemos acordado en la reunión de equipo:

const bookingSchema = new Schema(
    {
        user: [{type: Schema.Types.ObjectId, ref: 'users'}],
        destination: [{type: Schema.Types.ObjectId, ref: 'destinations'}],
        activities: [{type: Schema.Types.ObjectId, ref: 'activities'}] 
         // la ref de reservas: es el nombre de la colección en la DB de donde toma los id
    },{
        timestamps: true,
        collection: 'bookings'
    }
)

const Booking = mongoose.model('reservas', bookingSchema);

module.exports = Booking;