import Image from "next/image";


const BookCard = ({ book }) => {
    const { id, title, author, image_url } = book;
    return (
        <div className="flex flex-col justify-center items-center bg-base-100 border-gray-100">
  <figure className="px-3 pt-2">
    <Image
      src={image_url}
      height={300}
      width={260}
      alt={title}
      className="rounded" />
  </figure>
  <div className="my-5 text-center">
    <h3 className="text-xl font-semibold">{title}</h3>
    <p>{author}</p>
    <div>
      <button className="btn rounded-full mt-2 w-full">Show Details</button>
    </div>
  </div>
</div>
    );
};

export default BookCard;