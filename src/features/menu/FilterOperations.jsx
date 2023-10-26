import React from 'react'
import Filter from '../../ui/Filter'
import SortBy from '../../ui/SortBy'

function FilterOperations() {
  return (
      <div className='flex items-center gap-1'>
        <Filter
        filterField="menu"
        options={[
            { value: "all", label: "All" },
            
              ]} />
          
          <SortBy
              options={[
                  {
                      value: "totalPrice-desc",
                      label: "Sort by price (high first)",
                  },
                  { value: "totalPrice-asc", label: "Sort by price (low first)" },
                  { value: "name-asc", label: "Sort by name" },
              ]}
          />
              
    </div>
  )
}

export default FilterOperations