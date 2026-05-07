import BookCard from '@/components/BookCard';
import React from 'react';

const AllBooks = async () => {
    const res = await fetch('https://omnibooks-digital-library.vercel.app/data.json');
    const books = await res.json();

    return (
        <div>
            <h2 className='text-4xl font-bold text-center my-4'>All Books</h2>
            <div className='grid grid-cols-2 gap-5 px-1 md:grid-cols-4 my-5'>
                {
                    books.map(book => <BookCard key={book.id} book={book} />)
                }
            </div>
        </div>
    );
};

export default AllBooks;