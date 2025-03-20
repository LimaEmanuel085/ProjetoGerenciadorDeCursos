const express = require('express');
const route = express.Router();
const loginController = require('./controllers/loginController');
const coursePageController = require('./controllers/coursePageController');



//View users
route.get('/', loginController.viewUsers);


//Create user
route.post('/', loginController.createUser);

//Delete user
route.delete('/:id', loginController.deleteUser);



//View course
route.get('/home', coursePageController.viewCourses);

//Create course
route.post('/home', coursePageController.createCouse);

//Delete couse
route.delete('/home/:id', coursePageController.deleteCourse);
//Atualizar curso
//route.put('/users/home:courseName', mainController.updateUserAdmin);
//route.put('/users/updateClient/:index', mainController.updateUserClient);

//route.delete('/users/deleteUser/:index', mainController.deleteuser) ;


module.exports = route;