import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext' 
import { Link } from 'react-router-dom'

function formatCurrency(value: number) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"              
  });
}

export function Cart() {
  const { cart, total, addItemCart, removeItemCart } = useContext(CartContext)

  return(
    <div className="w-full max-w-7xl mx-auto sm:px-6">
      <h1 className="font-medium text-2xl text-center my-4 max-sm:mt-16">Meu carrinho</h1>

      {cart.length === 0 && (
        <div className='flex flex-col items-center justify-center'>
          <p className='font-medium'>Ops seu carrinho está vazio...</p>
          <Link 
            to="/"
            className='bg-slate-600 my-3 p-1 px-3 text-white font-medium rounded'
          >
            Acassar Produtos
          </Link>
        </div>
      )}

      {cart.map((item) => (
        <section key={item.id} className="flex items-center justify-between border-b-2 border-gray-300">
          <img 
            className="w-28 max-sm:w-24"
            src={item.cover}
            alt={item.title}
          />

          <strong>Preço: <span className='max-sm:whitespace-pre'> R$ {formatCurrency(item.price)}</span></strong>

          <div className="sm:flex max-sm:grid-cols-1 items-center justify-center gap-3 max-sm:px-5">
            <button
              onClick={ () => removeItemCart(item)} 
              className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center"
              >
              -
            </button>
            <div className='max-sm:pl-2'>
              {item.amount}
            </div>
            <button 
              onClick={ () => addItemCart(item)}
              className="bg-slate-600 px-2 max-sm:px-1.5 rounded text-white font-medium flex items-center justify-center"
              >
              +
            </button>
          </div>

          <strong className="float-right max-sm:ml-1">
            SubTotal: <span className='max-sm:whitespace-pre'>
              {formatCurrency(item.total)}
              </span>
          </strong>
        </section>
      ))}

      {cart.length !== 0 && <p className="font-bold mt-4 ml-2"> Total: {total}</p> }

    </div>
  )
}