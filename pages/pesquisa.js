import React, { useState } from 'react'
import PageTitle from '../components/PageTitle'

const Pesquisa = () => {
  const [form, setForm] = useState({
    Nome: '',
    Email: '',
    WhatsApp: '',
    Nota: 0,
    Avaliacao: ''
  })

  const notas = [0, 1, 2, 3, 4, 5]
  const [sucess, setSucess] = useState(false)
  const [retorno, setRetorno] = useState({})

  const save = async () => {
    try {
      const response = await fetch('/api/save', {
        method: 'POST',
        body: JSON.stringify(form)
      })
      const data = await response.json()
      setSucess(true)
      setRetorno(data)
    } catch (err) {

    }
  }
  const onChange = evt => {
    const value = evt.target.value
    const key = evt.target.name
    setForm(old => ({
      ...old,
      [key]: value
    }))
  }
  return (
    <div className='pt-6'>
      <PageTitle title='Pesquisa' />
      <h1 className='text-center font-bold my-6 text-2xl'>Críticas e sugestões</h1>
      <p className='text-center mb-6'>
        O restaurante X sempre busca por atender melhor seus clientes. <br />
        Por isso, estamos sempre abertos a ouvir a sua opinião.
      </p>
      {
        !sucess && <div className='w-1/3 mx-auto '>
          <label className='font-bold'>Seu Nome:</label>
          <input type='text' className='p-3 px-32 block shadow bg-blue-100 my-2  rounded' placeholder='Digite aqui o seu Nome' onChange={onChange} name='Nome' value={form.Nome} />
          <label className='font-bold'>E-mail:</label>
          <input type='email' className='p-3 px-32 block shadow bg-blue-100 my-2 rounded' placeholder='Digite aqui o seu Email' onChange={onChange} name='Email' value={form.Email} />
          <label className='font-bold'>WhatsApp:</label>
          <input type='tel' className='p-3 px-32 block shadow bg-blue-100 my-2 rounded border-gray-400' placeholder='Digite aqui o seu Whats' onChange={onChange} name='WhatsApp' value={form.WhatsApp} />
          <label className='font-bold'>Crítica ou Sugestão:</label>
          <textarea type='text' className='w-full bg-blue-100 rounded border border-gray-400 focus:outline-none h-48 focus:border-indigo-500 text-base px-4 py-2 resize-none block my-2' placeholder='Digite aqui Sua Crítica ou sugestão' onChange={onChange} name='Avaliacao' value={form.Avaliacao} />
          <div className='text-center mx-auto'>
            <label className='font-bold '>Nota:</label>
          </div>
          <div className='flex py-6'>
            {notas.map(nota => {
              return (<label className='block w-1/6 text-center'>
                {nota}<br />
                <input type='radio' name='Nota' value={nota} onChange={onChange} />
              </label>
              )
            })
            }
          </div>
          <div className='mx-auto text-center'>
            <button className='bg-blue-400 px-12 py-4 my-8 font-bold rounded-lg shadow-lg hover:shadow' onClick={save}>Salvar</button>
          </div>
        </div>
      }
      {
        sucess && <div className='w-1/5 mx-auto'>
          <p className='mb-6 text-center bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3'> Obrigado por contribuir com a sua sugestão crítica </p>
          {
            retorno.showCoupon && <div className='text-center border p-4 mb-4'>
              Seu Cupom: <br />
              <span className='font-bold text-2xl'>{retorno.Cupom}</span>
            </div>
          }
          {
            retorno.showCoupon && <div className='text-center border p-4 mb-4'>
              <span className='font-bold block mb-2'>{retorno.Promo}</span>
              <br />
              <span className='italic'>Tire Print ou foto desta tela e apresente ao garçon.</span>
            </div>
          }
        </div>
      }
    </div >
  )
}

export default Pesquisa