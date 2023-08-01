const express = require('express');
const upload = require("../../middlewares/upload.file");
const { isAuth, isAdmin } = require('../../middlewares/auth');

const {
    getAllActivities, 
    getActivitiesId,
    getActivitiesPrice,
    getActivitiesPlace,
    // --------------------
    postActivities, 
    putActivities, 
    deleteActivities, 
    } = require('../controller/activity.controller');

const router = express.Router();

router.get('/', getAllActivities);

router.get('/id/:id', getActivitiesId);
router.get('/activityPrice/:activityName', getActivitiesPrice);
router.get('/activitiesPlace/:activityPlace', getActivitiesPlace);
// -----------------------------------------
router.post('/', upload.single('activityImg'), postActivities);
router.put('/:id', upload.single('activityImg'), putActivities);
router.delete('/:id', [isAdmin], deleteActivities);



module.exports = router;
