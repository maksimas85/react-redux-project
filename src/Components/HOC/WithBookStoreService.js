import React from 'react'
import { BookStoreServiceConsumer } from '../BookStoreServiceContext/BookStoreServiceContext'

const WithBookStoreService = () => (Wrapped) => {

    return (props) => {
        return (
            <BookStoreServiceConsumer>
                {
                    (bookStoreService) => {
                        return (<Wrapped {...props}
                                         bookStoreService={bookStoreService}/>)
                    }
                }
            </BookStoreServiceConsumer>
        )
    }
}

export default WithBookStoreService