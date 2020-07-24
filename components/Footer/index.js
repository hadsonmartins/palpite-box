import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-700'>
      <div className='  container mx-auto text-center font-bold text-white'>
        Projeto desenvolvido por: {}
          Hadson Martins / {}
        <a className='hover:underline' href='https://www.linkedin.com/in/hadsonmartins/'>Linkedin</a>  / {}
        <a className='hover:underline' href='https://github.com/Hadsondev'>Github</a>
        <div className='mt-4'>
          <a href='https://lp.devpleno.com/fullstack-master-listadeespera/' target="_blank">
            <img className='inline p-4' src='logo_semana_fsm.png' />
          </a>
          <a href='https://devpleno.com/' target="_blank">
            <a><img className='inline p-4' src='logo_devpleno.png' /></a>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer