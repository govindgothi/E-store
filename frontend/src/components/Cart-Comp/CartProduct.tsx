// import React from 'react'

const item = {
    _id:'1',
   imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOYJcMlhip-5aWHmL-UbwboZrfxDM2YTDhXA&s',
   productName:'good bye',
   price:400,
   quantity:2,
}


const CartProduct = () => {
  return (
    <div>
    <div className="w-full max-w-3xl bg-white rounded-2xl shadow-md px-6 py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">

{/* 🖼️ Image + Product Info */}
<div className="flex flex-col sm:flex-row items-center sm:items-start md:items-center gap-4 w-full md:w-1/2">
  <div className="w-full sm:w-[100px] aspect-square overflow-hidden rounded-md border flex-shrink-0">
    <img
      src={item.imageUrl}
      alt={item.productName}
      className="w-full h-full object-cover rounded-md"
    />
  </div>

  <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
    <h3 className="text-lg font-semibold">{item.productName}</h3>
    <p className="text-gray-600">Rs. {item.price}</p>
    <p className="text-sm text-gray-400">250g</p>
  </div>
</div>

{/* ➕➖ Quantity Controls */}
<div className="flex items-center justify-center gap-3 w-full md:w-auto">
  <button className="px-3 py-1 border border-gray-400 rounded hover:bg-gray-100 transition">
    -
  </button>
  <span className="px-4 py-1 border border-gray-300 rounded">
    {item.quantity}
  </span>
  <button className="px-3 py-1 border border-gray-400 rounded hover:bg-gray-100 transition">
    +
  </button>
</div>

{/* 💰 Total Price */}
<div className="text-lg font-medium text-center md:text-right w-full md:w-[120px]">
  Rs. {item.price * item.quantity}
</div>
</div>


    </div>
  )
}

export default CartProduct
