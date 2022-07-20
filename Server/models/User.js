import  mongoose from "mongoose"

const UserShema = mongoose.Schema({
    name:{     
        type: String,
        required: true
    }
});
const User = mongoose.model('User',UserShema);
export default User
