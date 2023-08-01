const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors')
const cloudinary = require('cloudinary').v2;


dotenv.config();
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
})


const routerUser = require('./src/api/routes/user.routes.js');
const routerBooking = require('./src/api/routes/booking.routes.js');
const routerActivity = require('./src/api/routes/activity.routes.js');
const routerDestination = require('./src/api/routes/destination.routes.js');

const app = express();
const {connect} = require('./src/utils/db.js');
connect();
app.use(cors());

app.use(express.json());
app.use('/bookings', routerBooking);
app.use('/users', routerUser);
app.use('/activities', routerActivity);
app.use('/destinations', routerDestination);




const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
