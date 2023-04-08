// import { useState } from 'react'
import { coins, coins2 } from '../mocks/monedas'
// import { Combobox } from '@headlessui/react'
// import { AiOutlineCheck } from 'react-icons/ai'
// import { BsChevronExpand } from 'react-icons/bs'
import { useForm } from 'react-hook-form'
import { ComboboxPro } from './Combobox'
/**
 * Combobox
 * Crear un estado para guardar el valor seleccionado
 * Crear un estado para la query que es la que va filtar en el combobox
 * Data con un ternario que retorna los falores por defecto si el query es vacio o hace el filter pa ver si lo contiene
 * El combo box tiene estos elementos obligatorios
 *  Combobox.Input - Es para filtrar
 *  Combobox.Botton - Mostrar opciones
 *  Combobox.Options < Combobox.Option
 */
export function Forms () {
  const { handleSubmit, control } = useForm()

  const succesSubmit = (data) => {
    // e.preventDefault()
    // const data = Object.fromEntries(new FormData(e.target))
    console.log(data)
  }

  // const filteredCoins =
  //   query === ''
  //     ? coins
  //     : coins.filter((coin) => {
  //       return coin.name.toLowerCase().includes(query.toLowerCase())
  //     })
  return (
    <>
      <form onSubmit={handleSubmit(succesSubmit)} className='flex flex-col gap-2'>
        {/* <Controller
          control={control}
          defaultValue={selectedCoin}
          name='coins'
          render={({ field: { onChange } }) => (
            <Combobox
              value={selectedCoin} onChange={(e => {
                onChange(e)
                setSelectedCoin(e)
              })}
            >
              <div className='relative mt-1'>
                <div className='relative flex px-5 overflow-hidden text-left bg-white rounded-lg shadow-md cursor-default w-max h-max focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300'>
                  <Combobox.Input
                    onChange={(e) => setQuery(e.target.value)} displayValue={(coin) => coin.name}
                    className='w-full py-4 pr-10 text-gray-900 border-none focus-visible:outline-none'
                  />
                  <Combobox.Button>
                    <BsChevronExpand />
                  </Combobox.Button>
                </div>
                <Combobox.Options className='absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none'>
                  {filteredCoins.length === 0 && query !== ''
                    ? <NothingFound />
                    : <RenderResultsCoins coins={filteredCoins} />}
                </Combobox.Options>
              </div>
            </Combobox>
          )}
        /> */}
        <ComboboxPro name='coins' options={coins} control={control} />
        <ComboboxPro name='coins2' options={coins2} control={control} />
        <button type='submit' className='px-5 py-2 bg-red-300 rounded w-max'>Enviar</button>
      </form>
    </>
  )
}

// function NothingFound () {
//   return (
//     <div className='relative px-4 py-2 text-gray-700 cursor-default select-none'>
//       Nothing found.
//     </div>
//   )
// }
// function RenderResultsCoins ({ coins }) {
//   return coins.map((coin, i) => (
//     <Combobox.Option
//       key={i} value={coin}
//       className='relative flex items-center gap-2 px-5 py-3 cursor-default select-none ui-active:bg-blue-500 ui-active:text-white ui-not-active:bg-white ui-not-active:text-black'
//     >
//       <AiOutlineCheck className='hidden ui-selected:block' />
//       <p className='pl-5 font-normal ui-selected:font-medium ui-selected:pl-0'>{coin.name}</p>
//     </Combobox.Option>
//   ))
// }
