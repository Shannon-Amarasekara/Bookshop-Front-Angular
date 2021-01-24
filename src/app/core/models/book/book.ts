import { Genre } from './genre/genre';
import { Author } from './author/author';
import { BookId } from './book-id/bookid';

export class Book {
    id: BookId;
    name: string;
    author: Author;
    genre: Genre;
    image: string;
    copiesSold: number;
    price: number;
    synopsis: string;
}