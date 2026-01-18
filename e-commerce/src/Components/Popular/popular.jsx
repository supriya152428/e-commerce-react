import React from 'react'
import data_product from '../../assets/Assets/data'
import Item from '../../assets/Items/items'

const Popular = () => {
  return (
    <div className='flex flex-col items-center gap-3 h-[90vh]'>
      <h1 className='text-gray-600 text-2xl font-semibold'>POPULAR IN WOMEN</h1>
      <hr className="w-48 h-1.5 rounded-lg bg-gray-700 border-0" />
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data_product.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  )
}

export default Popular

