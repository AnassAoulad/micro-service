import express from 'express'
import { categoryService } from './routes/category-service.js'


const app = express()
const port = 4600

app.use(express.json());

app.get('/category/get', async (req,res) => {
    res.send(JSON.stringify(categoryService.getAllCategory()));
})

app.get('/category/get/:id', async (req,res) => {
    res.send(JSON.stringify(categoryService.getCategoryById(req.params.id)));
})

app.post('/category/get/multiple',async (req,res) => {
    res.send(JSON.stringify(categoryService.getCategoryByIds(req.body)));
})


app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})