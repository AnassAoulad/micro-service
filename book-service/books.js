export let bookList = [
    {
        "name": "Super livre",
        "author_id": 1,
        "category_id": 1,
        "id": 1
    },
    {
        "name": "Super livre 2",
        "author_id": 2,
        "category_id": 2,
        "id": 2
    }
]

export let remove = (id) => {
    bookList = bookList.filter((entry) => {
        return entry.id != id;
    })
}