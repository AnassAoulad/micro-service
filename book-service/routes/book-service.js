import { bookList,remove } from '../books.js'
import { getLinkedData,getMultipleLinkedData } from '../utils.js';

export let bookService = {
    getBooksById: async (id) => {
        let foundBook =  bookList.find((entry) => {
            return entry.id == id;
        })
        return await getLinkedData(foundBook);
    },
    getAllBooks: async () => {
        return await getMultipleLinkedData(bookList); 
    },
    createBook: async({name, author_id, category_id}) => {
        let id_max = bookList.length+1;
        let newBook = {
            name,
            author_id,
            category_id,
            id: id_max
        }
        bookList.push(newBook);
        return await getLinkedData(newBook);
    },
    updateBooks: async({name, author_id, category_id,id}) => {
        let bookToUpdate = bookList.find((entry) => {
            return entry.id == id;
        });
        if(name){
            bookToUpdate.name = name;
        }
        if(author_id){
            bookToUpdate.author_id = author_id;
        }
        if(category_id){
            bookToUpdate.category_id = category_id;
        }
        return await getLinkedData(bookToUpdate);
    },
    deleteBook: async(id) => {
        remove(id);
        return await bookService.getAllBooks();
    }
}