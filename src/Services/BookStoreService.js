import { v4 as uuidv4 } from 'uuid'

export default class BookStoreService {

     data = [
                {
                    id: uuidv4(),
                    title: 'Production-Ready Microservices',
                    author: 'Susan J. Fowler',
                    price: 32,
                    coverImage: 'https://img.artlebedev.ru/everything/ast/narzi/narzi-front.jpg'
                },
                {
                    id: uuidv4(),
                    title: 'Release It!',
                    author: 'Michael T. Nygard',
                    price: 42,
                    coverImage: 'https://knigaplus.ru/images/cms/thumbs/104f541a33b1b111577512e79269899805eef2ec/iskusstvo_chyurlenisa_zhizn_lichnost_zhivopis_muzyka_poeziya_filosofiya_tvorchestva_auto_420_jpeg_5_100.jpeg'
                }
            ]

    getBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.data)
                reject(new Error('Bad Error'))
            }, 700)
        })
    }
}