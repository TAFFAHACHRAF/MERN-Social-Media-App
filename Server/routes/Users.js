import express from "express";
import {getUsers,getUserById,createUser,deleteUser,updateUser} from "../controlllers/User.js";
const router = express.Router() 

router.get('/',getUsers)
router.get('/:userId',getUserById)
router.post('/', createUser)
router.delete('/:userId', deleteUser)
router.patch('/:userId',updateUser)

export default router   