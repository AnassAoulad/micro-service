import express from 'express'
import { bookService } from './routes/book-service.js'
import { eventBus } from "../eventbus-service/index.js"
console.log(authorService)
const app = express()
app.use(express.json())
const port = 4400
const handleCreatedBook = (book) => {
    console.log(book, 'book')
}

// eventBus.subscribe("createdBookEvent", handleCreatedBook)
app.get('/book/get', async (req,res) => {
    res.send(JSON.stringify(await bookService.getAllBooks()));
})

app.get('/book/get/:id', async (req,res) => {
    res.send(JSON.stringify(await bookService.getBooksById(req.params.id)));
})

app.put('/book/update/:id', async(req,res) => {
    req.body.id = req.params.id;
    res.send(JSON.stringify(await bookService.updateBooks(req.body)));

})

app.delete('/book/delete/:id', async(req,res) => {
    res.send(JSON.stringify(await bookService.deleteBook(req.params.id)));
})

app.post('/book/create', async(req,res) => {
    let createdBook = await bookService.createBook(req.body);
    eventBus.publish("createdBookEvent", createdBook)
    res.send(JSON.stringify(createdBook));
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})