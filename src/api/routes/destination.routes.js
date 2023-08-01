const express = require('express');
const upload = require("../../middlewares/upload.file")
const {
    getAllDestinations, 
    getDestinationsId,
    getDestinationsDescription,
    getDestinationsFromPlace,
    // --------------------
    postDestinations, 
    putDestinations, 
    deleteDestinations, 
    } = require('../controller/destination.controller');

const router = express.Router();

router.get('/', getAllDestinations);
router.get('/id/:id', getDestinationsId);
router.get('/destinationDescription/:destinationPlace', getDestinationsDescription);
router.get('/destinationsFromPlace/:destinationPlace', getDestinationsFromPlace);
// -----------------------------------------
// router.post('/', upload.single('destinationImg'), postDestinations);
router.post('/', upload.fields([{ name: 'destinationImg' }]), postDestinations);
router.put('/:id', upload.fields([{ name: 'destinationImg' }]), putDestinations);
router.delete('/:id', deleteDestinations);


module.exports = router;
