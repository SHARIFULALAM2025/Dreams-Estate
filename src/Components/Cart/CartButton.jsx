import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'

const CartButton = ({ itemCount = 3 }) => {
  return (
    <button className="relative group px-2.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 flex items-center justify-center">
      {/* Cart Icon */}
      <FiShoppingCart className="text-[22px] text-slate-700 dark:text-slate-200 transition-transform duration-300 group-hover:scale-110" />

      {/* Cart Count Badge */}
      {itemCount > 0 && (
        <span className="absolute -top-1.5 -right-1.5 min-w-[20px] h-5 px-1 flex items-center justify-center rounded-full bg-red-500 text-white text-[11px] font-bold shadow-md border-2 border-white dark:border-slate-900">
          {itemCount > 99 ? '99+' : itemCount}
        </span>
      )}
    </button>
  )
}

export default CartButton
