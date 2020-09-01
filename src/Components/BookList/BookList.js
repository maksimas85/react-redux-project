import React, { Component } from 'react'
import { connect } from 'react-redux'
//import { bindActionCreators } from 'redux'
import BookListItem from '../BoolListItem/BookListItem'
import WithBookStoreService from '../HOC/WithBookStoreService'
import { BooksLoaded, BooksRequested, BooksError } from '../../Actions'
import compose from '../../Utils/Compose'
import Spinner from '../Spinner/Spinner'
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator'
import './BookList.css'

class BookList extends Component {

    componentDidMount() {
        //const { bookStoreService, BooksLoaded, BooksRequested, BooksError } = this.props
        this.props.BooksRequested()
        this.props.bookStoreService.getBooks()
            .then((data) => {
                this.props.BooksLoaded(data)
            })
            .catch((err) => this.props.BooksError(err))
    }

    render() {
        const { books, loading, error} = this.props

        if (loading) {
            return <Spinner/>
        }

        if (error) {
            return <ErrorIndicator/>
        }

        return (
            <ul className='book-list'>
                {
                    books.map((book) => {
                        return (
                            <li key={book.id}><BookListItem book={book}/></li>
                        )
                    })
                }
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        books: state.books,
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = { BooksLoaded, BooksRequested, BooksError }

//const mapDispatchToProps = (dispatch) => {
    // return bindActionCreators({
    //     BooksLoaded
    // }, dispatch)

    // return {
    //     BooksLoaded: (newBooks) => {
    //         dispatch(BooksLoaded(newBooks))
    //     }
    // }
//}

export default compose(
    WithBookStoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList)

// export default WithBookStoreService()(
//     connect(mapStateToProps, mapDispatchToProps)(BookList)
// )