import React from 'react'
import { Link } from 'react-router-dom'

function Button({ children, disabled, to, type, onClick }) {
  const  base ='bg-yellow-400 text-sm uppercase font-semibold text-stone-800 inline-block px-4 tracking-wide rounded-full hover:bg-yellow-300 transition-colors duration-300 focus: outline-none focus:ring focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed'
 
  const styles = {
    primary: base + ' px-4 py-3 md:px-6 md:py-4',
    small: base + ' px-4 py-2 md:px-5 md:py-2.5 text-xs capitalize',
    round: base + ' px-2.5 py-1 md:px-3.5 md:py-2 text-sm',
    medium: 'bg-white capitalize text-xs py-3 mt-4 md:py-2.5 uppercase font-semibold text-stone-800 inline-block px-4 tracking-wide rounded hover:bg-yellow-300 transition-colors duration-300 focus: outline-none focus:ring focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed',
    outline: 'capitalize text-xs py-2 md:py-1 uppercase font-semibold text-stone-800 inline-block px-2 tracking-wide rounded border text-yellow-500 border-yellow-500 hover:bg-yellow-300 hover:text-white transition-colors duration-300 focus: outline-none focus:ring focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed',
    normal: 'capitalize text-xs py-2 md:py-1 uppercase font-semibold text-stone-800 inline-block px-2 tracking-wide rounded border text-stone-500 border-stone-500 hover:bg-stone-500 hover:text-white transition-colors duration-300 focus: outline-none focus:ring focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed',
    secondary:'px-4 py-2.5 text-sm md:px-6 md:py-3.5 uppercase font-semibold border-2 border-stone-300 text-stone-800 inline-block px-4 tracking-wide rounded-full hover:bg-stone-300 hover:text-stone-800 transition-colors duration-300 focus: outline-none focus:ring focus:ring-stone-300 focus:bg-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed'
  }

  if (to)
    return <Link to={to} className={styles[type]}>{children}</Link>
  
  if (onClick)
    return (
      <button onClick={ onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    )
  
  return (
    <button disabled={disabled} className={styles[type]}>
          {children}
      </button>
  )
}

export default Button