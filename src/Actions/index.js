
const BooksLoaded = (newBooks) => {
    return {
        type: 'BOOKS_LOADED',
        payload: newBooks
    }
}

const BooksRequested = () => {
    return {
        type: 'BOOKS_REQUESTED'
    }
}

const BooksError = (error) => {
    return {
        type: 'BOOKS_ERROR',
        payload: error
    }
}

export {
    BooksLoaded,
    BooksRequested,
    BooksError
}