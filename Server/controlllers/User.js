import User from "../models/User.js"

export const getUsers = async (req,res)=>{
    try{
        const users = await User.find();
        res.status(200).json(users);
    }catch(err){
        res.status(400).json({message : err.message})
    }
}

export const getUserById = async (req,res)=>{
    try{
        const users = await User.findById(req.params.userId)
        res.json(users);
    }catch(err){
        console.log(res.body)
    }
}

export const createUser = async (req,res) => {
    const user=req.body
    const newUser = new User(user)
    try{
        const saved=await newUser.save()
        res.send(saved)
    }catch(err){
        console.log("error")
        res.status(409).json({message : err.message})
    }
}

export const deleteUser = async (req,res) => {
    try{
        const removedUser = await User.deleteOne({ _id : req.params.userId})
        res.json(removedUser);
    } catch (err){
        res.json({message : err})
    }
}

export const updateUser = async (req,res) => {
    try{
        const updatedUser = await User.updateOne(
            { 
                _id : req.params.userId
            },
            { 
                $set : { 
                    name : req.body.name,
                }  
            }
        );
        res.json(updatedUser);
    } catch (err){
        res.json({message : err})
    }
}
