import React from "react"

export default ({ element }) => {
  return (
    <div className="shadow p-8 bg-white mr-4 rounded flex-shrink-0" style={{width: '300px'}}>
      <header
        className="h-40 bg-cover bg-center"
        style={{ backgroundImage: `url(${element.thumbnail})` }}
      ></header>
      <div className="p-8">
        <h4 className='font-bold h-20 overflow-y-hidden'>{element.title}</h4>
        <div className="text-center mt-6">
          <a className="btn" href={element.link} target='_blank' rel='noopener noreferrer'>
            Leer
          </a>
        </div>
      </div>
    </div>
  )
}
