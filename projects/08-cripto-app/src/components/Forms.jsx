import { coins, coins2 } from '../mocks/monedas'
import { useForm } from 'react-hook-form'
import { ComboboxPro } from './ComboboxPro'
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
    console.log(data)
  }

  return (
    <>
      <form onSubmit={handleSubmit(succesSubmit)} className='flex flex-col gap-2'>
        <ComboboxPro name='coins' options={coins} control={control} />
        <ComboboxPro name='coins2' options={coins2} control={control} />
        <button type='submit' className='px-5 py-2 bg-red-300 rounded w-max'>Enviar</button>
      </form>
    </>
  )
}
