import express from 'express'
import { authorService } from './routes/authors-service.js'


const app = express()
const port = 4500
app.use(express.json());
app.get('/author/get', async (req,res) => {
    res.send(JSON.stringify(authorService.getAllAuthor()));
})

app.post('/author/get/multiple',async (req,res) => {
    res.send(JSON.stringify(authorService.getAuthorsByIds(req.body)));
})

app.get('/author/get/:id', async (req,res) => {
    res.send(JSON.stringify(authorService.getAuthorById(req.params.id)));
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})