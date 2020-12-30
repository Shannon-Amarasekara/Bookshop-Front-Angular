import { Genre } from './genre';
import { Author } from './author';
import { BookId } from './bookId';

export class Book {
    BookId: BookId;
    name: string;
    author: Author;
    genre: Genre;
    image: string;
    copiesSold: number;
}