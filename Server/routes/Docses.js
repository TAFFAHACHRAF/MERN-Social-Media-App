import express from "express";
import { createDocs, deleteDocs, getDocsById, getDocses, updateDocs } from "../controlllers/Docs.js";
const router = express.Router() 

router.get('/',getDocses)
router.get('/:docsId',getDocsById)
router.post('/', createDocs)
router.delete('/:docsId', deleteDocs)
router.patch('/:docsId',updateDocs)

export default router   