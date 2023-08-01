
const Destination = require('../models/destination.model.js')


// Devuelve todos los destinos
const getAllDestinations = async (req, res) => {
    try{
        const allDestinations = await Destination.find()
        return res.status(200).json(allDestinations);
    }catch(error){
        return res.status(500).json(error);
    }
    
}

// Devuelve un destino desde su _id por params
const getDestinationsId = async (req, res) => {
    try{
        const {id} = req.params; 
        const getDestinationId = await Destination.find({_id: id});
        return res.status(200).json(getDestinationId);
    }catch(error){
        return res.status(500).json(error);
    }
    
}

// Devuelve la descripción del destino desde su localización por params
const getDestinationsDescription = async (req, res) => {
    try{
        const {destinationPlace} = req.params; 
        const getDestinationDescription = await Destination.find({destinationPlace: destinationPlace},{_id:0, destinationDescription:1});
        return res.status(200).json(getDestinationDescription);
    }catch(error){
        return res.status(500).json(error);
    }
    
}

// Devuelve destinos desde su localización por params
const getDestinationsFromPlace = async (req, res) => {
    try{
        const {destinationPlace} = req.params; 
        const getDestinations = await Destination.find({destinationPlace: destinationPlace});
        return res.status(200).json(getDestinations);
    }catch(error){
        return res.status(500).json(error);
    }
    
}



// Crea un nuevo destino en la DB
const postDestinations = async (req, res) => {
    try{
        const newDestination = new Destination(req.body);
        console.log(req.files);
        for (let i = 0; i < req.files.destinationImg.length; i++) {
          newDestination.destinationImg = [
            ...newDestination.destinationImg,
            req.files.destinationImg[i].path,
          ];
        }
        console.log(newDestination);
        const createdDestination = await newDestination.save();
        return res.status(201).json(createdDestination);
    }catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
}
// Modifica un destino enviando id por la url y datos nuevos por el body
const putDestinations = async (req, res) => {
    console.log(req.body);
    try{
        const {id} = req.params;
        const putDestination = new Destination(req.body);
        putDestination._id = id;
        for (let i = 0; i < req.files.destinationImg.length; i++) {
            putDestination.destinationImg = [
              ...putDestination.destinationImg,
              req.files.destinationImg[i].path,
            ];
          }
        const updatedDestination = await Destination.findByIdAndUpdate(id, putDestination, {new: true});
        if(!updatedDestination){
            return res.status(404).json({message: "Destino no encontrado"})
        }
        return res.status(200).json(updatedDestination);
    }catch(error){
        return res.status(500).json(error)
    }
}
// Elimina destinos de la base de datos mandando su id por la url
const deleteDestinations = async (req, res) => {
    try{
        const {id} = req.params;
        const deletedDestination = await Destination.findByIdAndDelete(id);
        if(!deletedDestination){
            return res.status(404).json({message:"Destino no encontrado"});
        }
        return res.status(200).json(deletedDestination);
    }catch(error){
        return res.status(500).json(error);
    }
    
}

module.exports = {
    getAllDestinations,
    getDestinationsId,
    getDestinationsDescription,
    getDestinationsFromPlace,
    // -----------------
    postDestinations, 
    putDestinations, 
    deleteDestinations, 
    };