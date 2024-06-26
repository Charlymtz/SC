import React, { useState, useEffect } from 'react';
import productsData from '../products.json';

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  
  useEffect(() => {
    setCartItems(productsData.slice(0, 3).map(product => ({
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      quantity: 1,
    })));
  }, []);

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  const updateQuantity = (itemId, newQuantity) => {
    setCartItems(cartItems.map(item => {
      if (item.id === itemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  // Función para calcular el total de ítems en el carrito
  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  // Función para calcular el total del precio en el carrito
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <header className="text-center">
            <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">Your Cart</h1>
          </header>

          <div className="mt-8">
            <ul className="space-y-4">
              {cartItems.map(item => (
                <li key={item.id} className="flex items-center gap-4">
                  <img
                    src={`${process.env.PUBLIC_URL}/${item.image}`}
                    alt=""
                    className="size-16 rounded object-cover"
                  />

                  <div>
                    <h3 className="text-sm text-gray-900">{item.name}</h3>

                    <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                      <div>
                        <dt className="inline">Price:</dt>
                        <dd className="inline">${item.price}</dd>
                      </div>
                    </dl>
                  </div>

                  <div className="flex flex-1 items-center justify-end gap-2">
                    <form>
                      <label htmlFor={`Qty_${item.id}`} className="sr-only"> Quantity </label>

                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        id={`Qty_${item.id}`}
                        className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                        onChange={(e) => updateQuantity(item.id, e.target.value)}
                      />
                    </form>

                    <button className="text-gray-600 transition hover:text-red-600" onClick={() => removeFromCart(item.id)}>
                      <span className="sr-only">Remove item</span>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </button>
                  </div> 
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 mt-8">
        <div className="flex justify-between border-t border-gray-200 pt-8">
          <div>
            <p className="text-sm text-gray-700">Total Items: {getTotalItems()}</p>
            <p className="text-sm text-gray-700">Total Price: ${getTotalPrice()}</p>
          </div>
          <div>
            <button className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
