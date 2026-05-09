import BookCard from '@/components/BookCard';
import BooksByCategory from '@/components/Category';
import React from 'react';

const AllBooks = async ({ searchParams }) => {
    const { category } = await searchParams || {};

    const res = await fetch('https://omnibooks-digital-library.vercel.app/data.json');
    const books = await res.json();

    if (!books) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <span className="loading loading-bars loading-lg text-[#6D28D9]"></span>
            </div>
        );
    }

    const filteredBooks = category ? books.filter(book => book.category.toLowerCase() == category.toLowerCase()) : books;


    return (
        <div className='grid grid-cols-12 items-start mt-8'>
            <div className='grid col-span-3'>
                <h3 className='text-4xl font-bold text-center my-4 text-[#374151]'>Category</h3>
                <BooksByCategory activeId={category}/>
            </div>
            <div className='grid col-span-9'>
                <h2 className='text-4xl font-bold text-center my-4 text-[#1E3A8A]'>All Books</h2>

                <div className='grid grid-cols-2 gap-2 px-1 md:grid-cols-3 my-5'>
                    {
                        filteredBooks.map(book => <BookCard key={book.id} book={book} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllBooks;