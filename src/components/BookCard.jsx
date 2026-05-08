import { Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";


const BookCard = ({ book }) => {
    const { id, title, author, image_url, category } = book;
    return (
        <div className="flex flex-col justify-center items-center bg-base-100 shadow relative">
  <figure>
    <Image
      src={image_url}
      height={300}
      width={280}
      alt={title}
      className="object-cover rounded" />
      <Chip className="absolute right-12 top-3">{category}</Chip>
  </figure>
  <div className="my-2 text-center">
    <h3 className="text-xl font-semibold">{title}</h3>
    <p>{author}</p>
    <div>
      <Link href={`/all-books/${book.id}`}>
      <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-2 rounded-full font-semibold hover:scale-105 transition duration-300 shadow-lg">Show Details</button></Link>
    </div>
  </div>
</div>
    );
};

export default BookCard;