import { useForm } from 'react-hook-form'

// Se lo pedi a chatGPT XD
const generarId = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = Math.random() * 16 | 0; const v = c === 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
}

export const Form = ({ setPacientes, pacientes, pacientEdit, setPacientEdit }) => {
  const { register, handleSubmit, reset } = useForm({})

  const successSubmit = (data) => {
    if (!pacientEdit.id) {
      data.id = generarId()
      setPacientes([...pacientes, data])
    } else {
      data.id = pacientEdit.id
      const pacientesActualizados = pacientes.map(paciente => paciente.id === pacientEdit.id ? data : paciente)
      setPacientes(pacientesActualizados)
      setPacientEdit({})
    }
    reset()
  }
  return (
    <>
      <section className='w-full flex flex-col gap-10'>
        <div className='w-full flex flex-col gap-5 items-center'>
          <p className=' text-3xl font-extrabold text-center'>Seguimiento de pacientes</p>
          <p>Añade Pacientes y <span className='font-bold text-indigo-600'> Administralos</span></p>
        </div>
        <div className=' w-full bg-white rounded-lg px-4 py-10 shadow-lg'>
          <form className='flex flex-col gap-6' onSubmit={handleSubmit(successSubmit)}>
            {/* <div className='w-full bg-red-700 text-white text-center font-bold py-2 rounded'>Llena todos campos</div> */}
            <Input labalName='Nombre de las mascotas' register={register} name='name' placeHolder='Nombre de las mascotas' defaultValue={Object.keys(pacientEdit).length > 0 ? pacientEdit.name : ''} />
            <Input labalName='Nombre del propietario' register={register} name='owner' placeHolder='Nombre del propietario' defaultValue={Object.keys(pacientEdit).length > 0 ? pacientEdit.owner : ''} />
            <Input labalName='Email' register={register} name='email' placeHolder='Email Contacto Propietario' defaultValue={Object.keys(pacientEdit).length > 0 ? pacientEdit.email : ''} />
            <Date labalName='Alta' register={register} name='date' defaultValue={Object.keys(pacientEdit).length > 0 ? pacientEdit.date : ''} />
            <TextArea labalName='Sintomas' register={register} name='sint' placeHolder='Describe los sintomas' defaultValue={Object.keys(pacientEdit).length > 0 ? pacientEdit.sint : ''} />

            <button type='submit' className='py-3 w-full bg-indigo-600 text-white uppercase font-bold'>{Object.keys(pacientEdit).length ? 'Actualizar los datos' : 'Agregar al paciente'}</button>
          </form>
        </div>
      </section>
    </>
  )
}

const Input = ({ labalName, name, register, placeHolder, defaultValue }) => {
  return (
    <div className='w-full flex flex-col gap-3'>
      <label htmlFor='' className=' uppercase font-bold text-md text-gray-600'>{labalName}</label>
      <input type='text' className='border w-full py-3 px-2' placeholder={placeHolder} {...register(name, { required: true })} defaultValue={defaultValue} />
    </div>
  )
}

const Date = ({ labalName, name, register, defaultValue }) => {
  return (
    <div className='w-full flex flex-col gap-3'>
      <label htmlFor='' className=' uppercase font-bold text-md text-gray-600'>{labalName}</label>
      <input type='date' className='border w-full py-3 px-2' {...register(name, { required: true })} defaultValue={defaultValue} />
    </div>
  )
}

const TextArea = ({ labalName, name, register, placeHolder, defaultValue }) => {
  return (
    <div className='w-full flex flex-col gap-3'>
      <label htmlFor='' className=' uppercase font-bold text-md text-gray-600'>{labalName}</label>
      <textarea className='border w-full py-3 px-2' rows='2' cols='50' placeholder={placeHolder} {...register(name, { required: true })} defaultValue={defaultValue} />
    </div>
  )
}
