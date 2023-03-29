export const Input = () => {
  return (
    <div className='w-full flex flex-col gap-3'>
      <label htmlFor='' className=' uppercase font-bold text-md text-gray-600'>Nombre de la mascota</label>
      <input type='text' className='border w-full py-3 px-2' placeholder='Nombre de la mascota' />
    </div>
  )
}
