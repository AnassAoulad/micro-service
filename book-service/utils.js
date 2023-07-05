let fetchIds = async(url,ids) => {
    let response =  await fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(ids)
    });
    return await response.json();
}

let formatByField = (data,field) => {
    return data.reduce((prev,cur) => {
        prev[cur[field]] = cur;
        return prev;
    },{})
}

export let getLinkedData = async (books) => {
    let responseAuthor = await fetch(`http://author_service:4500/author/get/${books.author_id}`);
    let dataAuthor = await responseAuthor.json();
    let responseCategory = await fetch(`http://category_service:4600/category/get/${books.category_id}`);
    let dataCategory = await responseCategory.json();
    books.category = dataCategory;
    books.author= dataAuthor;
    return books;
}

export let getMultipleLinkedData = async (books) => {
    let idsAuthors = books.map((book) => {
        return book.author_id;
    })
    let idsCategory = books.map((book) => {
        return book.category_id
    })
    let authors = await fetchIds('http://author_service:4500/author/get/multiple',idsAuthors);
    authors = formatByField(authors,"id");
    let categories = await fetchIds('http://category_service:4600/category/get/multiple',idsCategory);
    categories = formatByField(categories,"id");
    return books.map((book) => {
        book.category = categories[book.category_id];
        book.author = authors[book.author_id];
        return book;
    })

}
