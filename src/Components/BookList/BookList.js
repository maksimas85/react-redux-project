import React, { Component } from 'react'
import { connect } from 'react-redux'
//import { bindActionCreators } from 'redux'
import BookListItem from '../BoolListItem/BookListItem'
import WithBookStoreService from '../HOC/WithBookStoreService'
import { BooksLoaded } from '../../Actions'
import compose from '../../Utils/Compose'
import './BookList.css'

class BookList extends Component {

    componentDidMount() {
        //const { bookStoreService } = this.props
        const data = this.props.bookStoreService.getBooks()
        this.props.BooksLoaded(data)
    }

    render() {
        const { books } = this.props
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
        books: state.books
    }
}

const mapDispatchToProps = { BooksLoaded }

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