import Link from "next/link";


const BooksByCategory = async () => {

    const res = await fetch('https://omnibooks-digital-library.vercel.app/category.json');
    const categories = await res.json();
    console.log(categories, "categories");

    return (
        <div className="grid grid-cols-1 gap-4 px-4 mt-7">
            {
                categories.map(category => <Link key={category.id}
                href={`?category=${category.name.toLowerCase()}`}>
                <button className="bg-gray-100 rounded text-xl font-bold p-2 cursor-pointer w-[80%]">
                    {category.name}
                </button>
                </Link>)
            }
        </div>
    );
};

export default BooksByCategory;