import { authors } from '../authors.js'

export const authorService = {
    getAuthorById: (id) => {
        return authors.find((entry) => {
            return entry.id == id;
        })
    },
    getAllAuthor: () => {
        return authors;
    },
    getAuthorsByIds: (ids) => {
        return ids.reduce((prev,cur) => {
            let auth = authorService.getAuthorById(cur)
            prev.push(auth);
            return prev;
        },[])
    }
}