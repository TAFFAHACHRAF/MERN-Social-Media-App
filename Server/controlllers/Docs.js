import Docs from "../models/Docs.js"

export const getDocses = async (req,res)=>{
    try{
        const docses = await Docs.find();
        res.status(200).json(docses);
    }catch(err){
        res.status(400).json({message : err.message})
    }
}

export const getDocsById = async (req,res)=>{
    try{
        const docs = await Docs.findById(req.params.docsId)
        res.json(docs);
    }catch(err){
        console.log(res.body)
    }
}

export const createDocs = async (req,res) => {
    const docs=req.body
    const newDocs = new Docs(docs)
    try{
        const saved=await newDocs.save()
        res.send(saved)
    }catch(err){
        console.log("error")
        res.status(409).json({message : err.message})
    }
}

export const deleteDocs = async (req,res) => {
    try{
        const removedDocs = await Docs.deleteOne({ _id : req.params.docsId})
        res.json(removedDocs);
    } catch (err){
        res.json({message : err})
    }
}

export const updateDocs = async (req,res) => {
    try{
        const updatedDocs = await Docs.updateOne(
            { 
                _id : req.params.docsId
            },
            { 
                $set : { 
                    title : req.body.title,
                    user : req.body.user
                }  
            }
        );
        res.json(updatedDocs);
    } catch (err){
        res.json({message : err})
    }
}
