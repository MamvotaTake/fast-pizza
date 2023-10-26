import React from 'react'

function Select({options, value, onChange,...props}) {
  return (
      <select value={value} {...props} onChange={onchange}  className='text-sm py-2 cursor-pointer outline-none border border-yellow-400 font-sm shadow-sm'>
          {options.map(option => (
              <option value={option.value} key={option.value}>{option.label}</option>
          ))}
      </select>
  )
}

export default Select