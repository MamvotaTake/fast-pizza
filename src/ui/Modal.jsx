import React, { cloneElement, createContext, useContext, useState } from 'react'
import { useOutSideClick } from '../hooks/useOutSideClick'
import { createPortal } from 'react-dom'
import { HiXMark } from 'react-icons/hi2'

const ModalContext = createContext()

function Modal({ children }) {
    const [openName, setOpenName] = useState("")

    const close = () => setOpenName('')
    const open = setOpenName
  return (
      <ModalContext.Provider value={{openName, close, open}}>
          {children}
    </ModalContext.Provider>
  )
}

function Open({children, opens: opensWindowName}) { 
    const { open } = useContext(ModalContext)
    return cloneElement(children, { onClick: () => open(opensWindowName) })
} 

function Window({ children, name }) {
    const { openName, close } = useContext(ModalContext)
    const ref = useOutSideClick(close)

    if (name !== openName) return null;

    return createPortal(
        <div className='fixed top-0 transition-all duration-500 left-0 w-full h-full backdrop-blur-sm  bg-[rgba(255, 255, 255, 0.1)] z-1000 '>
            <div ref={ref} className='fixed top-2/4 left-1/2 -translate-x-1/2 -translate-y-2/4 tra bg-gray-50 rounded-sm shadow-md px-3 py-4 transition-all duration-300'>
                <button onClick={close} className='absolute top-2 right-2 cursor-pointer bg-yellow-500 rounded-full hover:bg-yellow-300 transition-all duration-200'>
                    <HiXMark className="w-4 h-4 text-stone-100"/>
                </button>
                <div>
                    {cloneElement(children, {onCloseModal: close})}
                </div>
            </div>
        </div>,
        document.body
    )
 }


Modal.Open = Open;
Modal.Window = Window;

export default Modal