import Image from "next/image";

const listItem = [
  {
    name: "Book 1",
    image: "https://res.cloudinary.com/dsy1fdqx2/image/upload/v1683188454/book-publisher/dong-song-ben-chua.jpg",
    price: 20000,
    quantity: 2,
  },
  {
    name: "Book 1",
    image: "https://res.cloudinary.com/dsy1fdqx2/image/upload/v1683188454/book-publisher/dong-song-ben-chua.jpg",
    price: 20000,
    quantity: 2,
  },
  {
    name: "Book 1",
    image: "https://res.cloudinary.com/dsy1fdqx2/image/upload/v1683188454/book-publisher/dong-song-ben-chua.jpg",
    price: 20000,
    quantity: 2,
  },
  {
    name: "Book 1",
    image: "https://res.cloudinary.com/dsy1fdqx2/image/upload/v1683188454/book-publisher/dong-song-ben-chua.jpg",
    price: 20000,
    quantity: 2,
  },
];

export function CheckoutOrderInfo() {
  return (
    <>
      <div className="flex items-center justify-between pb-4">
        <h2 className="w-full text-xl font-bold">Your cart</h2>
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-700 text-white">
          <span className="text-center align-middle font-bold">{listItem.length}</span>
        </div>
      </div>
      <div className="max-h-52 overflow-y-auto rounded-md border border-gray-300 py-2 scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-300">
        {listItem.map((item, index) => (
          <div key={index} className="flex border-b border-gray-300 p-2 first:rounded-t-md last:border-b-0 hover:bg-gray-50">
            <Image
              alt={item.name}
              src={item.image}
              width="0"
              height="0"
              sizes="10vw"
              className="h-20 w-20 min-w-[80px] object-contain align-middle"
            />
            <div className="flex w-full justify-between">
              <div>
                <div className="font-semibold">{item.name}</div>
                <div className="text-xs">
                  <span>{item.price.toLocaleString()}</span>
                  {" × "}
                  <span>{item.quantity}</span>
                </div>
              </div>
              <div className="font-medium">{(item.quantity * item.price).toLocaleString()}$</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
