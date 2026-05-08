import Image from 'next/image';
import React from 'react';

const BookDetailsPage = async ({ params }) => {
    const { id } = await params;
    const res = await fetch('https://omnibooks-digital-library.vercel.app/data.json');
    const books = await res.json();
    const book = books.find(b => b.id == id)
    console.log(book);
    return (
        <div>
            <h3 className='text-2xl font-bold text-center'>Book Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5 bg-base-100 shadow-sm container mx-auto my-8">
                <div className='w-full p-3'>
                    <Image
                        src={book.image_url}
                        height={420}
                        width={390}
                        alt={book.title}
                        className="object-cover rounded max-w-3xl mx-auto" />

                </div>
                <div className='flex flex-col justify-center items-start space-y-5 p-6 sm:p-10'>
                    <h3 className='text-xl font-bold'>Author: {book.title}</h3>
                    <p className='text-lg'>Title: {book.author}</p>
                    <p>Review: {book.description}</p>
                    <p className='text-lg font-bold'>Available quantity: {book.available_quantity}</p>
                    <button className="w-3/4 bg-orange-400 hover:bg-orange-500 text-black py-3 rounded-full text-lg font-semibold">Borrow this Book</button>

                </div>
            </div>
         
        </div>

    );
};

export default BookDetailsPage
    ;