import React from 'react'
import { useCatFact } from '../hooks/useCatFact'
import { useCatImage } from '../hooks/useCatImage'

// Es buena practica que el effect sea de una responsabilidad <<- para la refactorizacioon
// Estado minima info nesaraia para renderizar el compoennte
// No podemos hacer un fecth en el cuerpo del componente porque se va a relizar cada que se renderize el componente y por ende va ser un loop infinito que no esta controlado
//   fetch(url)
// No se le puede poner async al efect tiene que ser asincrono

export const App = () => {
  const { fact, setRandomFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = async () => {
    setRandomFact()
  }

  return (
    <>
      <main className='max-w-sm mx-auto my-auto mt-3'>
        <section className='flex flex-col gap-4'>
          <section className='flex justify-between w-full'>
            <h1 className=' text-red-600 text-3xl'>App de gatitos</h1>
            <button className=' font-bold bg-red-600 text-white p-3 rounded-xl' onClick={handleClick}>Get new fact</button>
          </section>
          {fact && <p>{fact}</p>}
          {imageUrl && <img className='' src={imageUrl} alt={`Image cat random from the three first words from ${fact}`} />}
        </section>
      </main>
    </>
  )
}
