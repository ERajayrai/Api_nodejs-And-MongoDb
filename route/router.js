import express from "express";
import {getUsers,addUsers,getUserById, editUser,deleteUser} from '../controller/user-controller.js'

const route=express.Router();

route.get('/',getUsers);
route.post('/add',addUsers);
route.get('/userId/:id',getUserById);
route.put('/edit/:id',editUser);
route.delete('/delete/:id',deleteUser)

export default route;