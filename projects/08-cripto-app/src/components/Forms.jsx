import { coins } from '../mocks/monedas'
import { useForm } from 'react-hook-form'
import { ComboboxPro } from './ComboboxPro'
import { useCriptos } from '../hooks/useCriptos'
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

// const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"
// const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`

export function Forms ({ getCriptoResults, isLoading }) {
  const { handleSubmit, control } = useForm()
  const { criptos } = useCriptos()

  const succesSubmit = (data) => {
    getCriptoResults({ queryData: data })
  }

  return (
    <>
      <form onSubmit={handleSubmit(succesSubmit)} className='flex flex-col gap-5 w-full md:w-2/4'>
        <div className='flex flex-col gap-2 w-full'>
          <p className='text-xl text-white font-medium'>Elige tu Moneda</p>
          <ComboboxPro name='coins' options={coins} control={control} />
        </div>
        <div className='flex flex-col gap-2'>
          <p className='text-xl text-white font-medium'>Elige tu Criptomoneda</p>
          <ComboboxPro name='cripto' options={criptos} control={control} />
        </div>
        <button disabled={isLoading} type='submit' className='px-5 py-2 bg-indigo-700 rounded text-white font-medium'>Cotizar</button>
      </form>
    </>
  )
}
