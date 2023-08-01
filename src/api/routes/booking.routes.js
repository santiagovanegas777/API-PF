const express = require('express');
const {
    getAllBookings,
    getBookingById,
    getBookingByUserId,
    postBooking,
    updateBooking,
    deleteBooking, 
    } = require('../controller/booking.controller');

    const { isAuth, isAdmin } = require('../../middlewares/auth');

    const router = express.Router();

    //RUTAS DE PRUEBA
    router.get('/pruebaAll/', getAllBookings);
    router.get('/pruebauserid/:user', getBookingByUserId);
    router.post('/pruebanewbook/', postBooking);
    router.put('/pruebaupdate/:id', updateBooking);
    router.delete('/pruebadelete/:id', deleteBooking);

    //---------------------
    router.get('/', [isAdmin], getAllBookings);
    router.get('/id/:id', getBookingById);
    router.get('/userid/:user', [isAuth], getBookingByUserId);
    router.post('/newbook/', [isAuth], postBooking);
    router.put('/update/:id', [isAuth], updateBooking);
    router.delete('/delete/:id', [isAdmin], deleteBooking);

module.exports = router;
