const Booking = require('../models/booking.model')


// Devuelve todas las reervas
const getAllBookings = async (req, res) => {
    try{
        const allBookings = await Booking.find().populate({
            path: "bookings", select:"destination, user"
            });
        return res.status(200).json(allBookings);
    }catch(error){
        return res.status(500).json(error);
    }
    
}

// Devuelve una reserva según su _id
const getBookingById = async (req, res) => {
    try{
        const {id} = req.params; 
        const getBookingId = await Booking.find({_id: id});
        return res.status(200).json(getBookingId);
    }catch(error){
        return res.status(500).json(error);
    }
    
}

// Devuelve una reserva según su _id
const getBookingByUserId = async (req, res) => {
    try{
        const {user} = req.params; 
        const getBookingId = await Booking.find({user: user});
        return res.status(200).json(getBookingId);
    }catch(error){
        return res.status(500).json(error);
    }
    
}


// Crea una nueva reserva en la DB
//PREGUNTAR A DAYANA POR ARRAY DE IMÁGENES
const postBooking = async (req, res) => {
    try{
        const newBooking = new Booking(req.body);

        if(req.file.path){
            newBooking.image = req.file.path;
        }
        const createdBooking = await newBooking.save();
        return res.status(201).json(createdBooking);
    }catch (error) {
        return res.status(500).json(error);
    }
}
// Modifica una fruta enviando id por la url y datos nuevos por el body
//PREGUNTAR A DAYANA POR ARRAY DE IMÁGENES
const updateBooking = async (req, res) => {
    console.log(req.body);
    try{
        const {id} = req.params;
        const putBooking = new Booking(req.body);
        putBooking._id = id;
        if(req.file.path){
            putBooking.image = req.file.path;
        }
        const updatedBooking = await Booking.findByIdAndUpdate(id, putBooking, {new: true});
        if(!updatedBooking){
            return res.status(404).json({message: "Reserva no encontrada"})
        }
        return res.status(200).json(updatedBoolking);
    }catch(error){
        return res.status(500).json(error)
    }
}

// Elimina una reserva de la base de datos mandando su id por la url
const deleteBooking = async (req, res) => {
    try{
        const {id} = req.params;
        const deletedBooking = await Booking.findByIdAndDelete(id);
        if(!deletedBooking){
            return res.status(404).json({message:"Reserva no encontrada"});
        }
        return res.status(200).json(deletedBooking);
    }catch(error){
        return res.status(500).json(error);
    }
    
}

module.exports = {
    getAllBookings,
    getBookingById,
    getBookingByUserId,
    postBooking,
    updateBooking,
    deleteBooking, 
    };