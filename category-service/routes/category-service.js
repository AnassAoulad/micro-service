import { category } from '../category.js'

export const categoryService = {
    getCategoryById: (id) => {
        return category.find((entry) => {
            return entry.id == id;
        })
    },
    getAllCategory: () => {
        return category;
    },
    getCategoryByIds: (ids) => {
        return ids.reduce((prev,cur) => {
            let auth = categoryService.getCategoryById(cur)
            prev.push(auth);
            return prev;
        },[])
    }
}