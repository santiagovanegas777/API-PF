mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();
const User = require("../api/models/user.model.js");


const arrayUsers = [
    {
        email: 'carlosgonzalo@gmail.com',
        password: '123456',
        userName: 'Carlos',
        userLastname: 'Gonzalo',
        adress: '13 rue del Percebe, Madrid',
        fruits: []
    },
    {
        email: 'emiliogomez@gmail.com',
        password: '123456',
        userName: 'Emilio',
        userLastname: 'Gómez',
        adress: 'Angustias 15 4A, Valladolid',
        fruits: []
    },
    {
        email: 'javiermartinez@gmail.com',
        password: '123456',
        userName: 'Javier',
        userLastname: 'Martínez',
        adress: 'Avda Juan Carlos I 18 4A, Segovia',
        fruits: []
    },
    {
        email: 'sheilagrande@gmail.com',
        password: '123456',
        userName: 'Sheila',
        userLastname: 'Grande',
        adress: 'Príncipe 46 3Izqda, Vigo',
        fruits: []
    },
    {
        email: 'sergiobenito@gmail.com',
        password: '123456',
        userName: 'Sergio',
        userLastname: 'Benito',
        adress: 'Santo Domingo de Guzmán 12 1E Valladolid',
        fruits: []
    }
    ];

mongoose.connect(process.env.DB_URL)
.then(async () => {
    const allUsers = await User.find();
    if(allUsers.length > 0){
        await User.collection.drop();
        console.log("usuarios borrados");
    }
})
.catch((error) => console.log("Error borrando usuarios"))
.then(async() => {
    const usersMap = arrayUsers.map(user => new User(user));
    await User.insertMany(usersMap);
    console.log("Usuarios insertados");
})
.catch((error) => console.log(`Error insertando usuarios: $:{error}`))
.finally(() => mongoose.disconnect());



