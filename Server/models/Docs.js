import  mongoose from "mongoose"
var Schema = mongoose.Schema

const DocsShema = mongoose.Schema({
    title:{     
        type: String,
        required: true
    },
    user:{
        type: Schema.Types.ObjectId,
        ref : 'User'
    }
});
const Docs = mongoose.model('Docs',DocsShema);
export default Docs
