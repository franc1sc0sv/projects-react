export const List = ({ pacientes, deletePacient, setPacientEdit }) => {
  return (
    <>
      <section className='w-full flex flex-col gap-10'>
        <div className='w-full flex flex-col gap-5 items-center'>
          <p className=' text-3xl font-extrabold text-center'>Listado de Pacientes</p>
          <p>Administra tus <span className='font-bold text-indigo-600'>Pacientes y citas</span></p>
        </div>

        <div className='flex flex-col gap-5 md:overflow-y-auto h-[44rem] '>
          {pacientes.map((x, i) => <Card key={i} paciente={x} deletePacient={deletePacient} setPacientEdit={setPacientEdit} />)}
        </div>

      </section>
    </>
  )
}

const Card = ({ paciente, deletePacient, setPacientEdit }) => {
  const { name, owner, email, date, sint, id } = paciente
  const handleEliminar = () => {
    deletePacient({ id })
  }

  const handleEdit = () => {
    setPacientEdit(paciente)
  }

  return (
    <div className=' w-full bg-white rounded-lg px-4 py-10 shadow-lg flex flex-col gap-10'>
      <div className='flex flex-col gap-3'>
        <p><span className='uppercase font-bold'>Nombre:</span> {name}  </p>
        <p><span className='uppercase font-bold'>Propietario:</span> {owner}  </p>
        <p><span className='uppercase font-bold'>Email:</span> {email}  </p>
        <p><span className='uppercase font-bold'>Fecha alta:</span> {date}  </p>
        <p><span className='uppercase font-bold'>Sintomas:</span> {sint}  </p>
      </div>
      <div className=' w-full justify-center  gap-2 flex'>
        <button className='px-10 py-2 bg-indigo-600 text-white font-bold rounded-lg' onClick={handleEdit}>Editar</button>
        <button className='px-10 py-2 bg-red-600 text-white font-bold rounded-lg' onClick={handleEliminar}>Eliminar</button>
      </div>
    </div>
  )
}
