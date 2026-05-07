import BookCard from "./BookCard";


const FeaturedBooks = async () => {
    const res = await fetch('https://omnibooks-digital-library.vercel.app/data.json');
    const books = await res.json();
    const topBooks = books.slice(0, 4);
    
    console.log(topBooks);

    return (
        <div>
            <h2 className='text-4xl font-bold my-7 text-center text-linear-to-bl bg-gradient-to-r from-purple-700 to-fuchsia-600 bg-clip-text text-transparent'>Featured Books</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                {
                    topBooks.map(book => 
                        <BookCard key={book.id} book={book} />
                    )
                }
            </div>
            
        </div>
    );
};

export default FeaturedBooks;