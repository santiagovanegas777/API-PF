
const Activity = require('../models/activity.model.js')


// Devuelve todas las actividades
const getAllActivities = async (req, res) => {
    try{
        const allActivities = await Activity.find()
        return res.status(200).json(allActivities);
    }catch(error){
        return res.status(500).json(error);
    }
    
}

// Devuelve una actividad desde su _id por params
const getActivitiesId = async (req, res) => {
    try{
        const {id} = req.params; 
        const getActivityId = await Activity.find({_id: id});
        return res.status(200).json(getActivityId);
    }catch(error){
        return res.status(500).json(error);
    }
    
}

// Devuelve el precio de actividad desde su nombre por params
const getActivitiesPrice = async (req, res) => {
    try{
        const {activityName} = req.params; 
        const getActivityPrice = await Activity.find({activityName: activityName},{_id:0, activityPrice:1});
        return res.status(200).json(getActivityPrice);
    }catch(error){
        return res.status(500).json(error);
    }
    
}

// Devuelve actividades desde su localización por params
const getActivitiesPlace = async (req, res) => {
    try{
        const {activityPlace} = req.params; 
        const getActivityPlace = await Activity.find({activityPlace: activityPlace});
        return res.status(200).json(getActivityPlace);
    }catch(error){
        return res.status(500).json(error);
    }
    
}



// Crea un nueva actividad en la DB
const postActivities = async (req, res) => {
    try{
        const newActivity = new Activity(req.body);

        if(req.file.path){
            newActivity.activityImg = req.file.path;
        }
        const createdActivity = await newActivity.save();
        return res.status(201).json(createdActivity);
    }catch (error) {
        return res.status(500).json(error);
    }
}
// Modifica una actividad desde id por params y datos por el body
const putActivities = async (req, res) => {
    console.log(req.body);
    try{
        const {id} = req.params;
        const putActivity = new Activity(req.body);
        putActivity._id = id;
        if(req.file.path){
            putActivity.activityImg = req.file.path;
        }
        const updatedActivity = await Activity.findByIdAndUpdate(id, putActivity, {new: true});
        if(!updatedActivity){
            return res.status(404).json({message: "Actividad no encontrada"})
        }
        return res.status(200).json(updatedActivity);
    }catch(error){
        return res.status(500).json(error)
    }
}
// Elimina actividades de la base de datos mandando su id por la url
const deleteActivities = async (req, res) => {
    try{
        const {id} = req.params;
        const deletedActivity = await Activity.findByIdAndDelete(id);
        if(!deletedActivity){
            return res.status(404).json({message:"Actividad no encontrada"});
        }
        return res.status(200).json(deletedActivity);
    }catch(error){
        return res.status(500).json(error);
    }
    
}

module.exports = {
    getAllActivities,
    getActivitiesId,
    getActivitiesPrice,
    getActivitiesPlace,
    // -----------------
    postActivities, 
    putActivities, 
    deleteActivities, 
    };