import { useEffect, useState } from 'react'
import { Form } from './Components/Form'
import { List } from './Components/List'

function App () {
  const [pacientes, setPacientes] = useState(() => {
    const pacientes = window.localStorage.getItem('pacientes')
    return JSON.parse(pacientes) ?? []
  })
  const [pacientEdit, setPacientEdit] = useState({})

  useEffect(() => {
    window.localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes])

  const deletePacient = ({ id }) => {
    const Updatedpacientes = pacientes.filter((x) => x.id !== id)
    setPacientes(Updatedpacientes)
  }
  return (
    <>
      <main className='w-4/5 mx-auto mb-5 flex flex-col gap-10 mt-20'>
        <h1 className='font-black text-5xl text-center md:w-2/3 mx-auto'>Seguimiento Pacientes <span className='text-indigo-700'>Veterinaria</span></h1>

        <div className='flex flex-col gap-10 md:flex-row'>
          <Form
            setPacientes={setPacientes}
            pacientes={pacientes}
            pacientEdit={pacientEdit}
            setPacientEdit={setPacientEdit}
          />
          <List
            pacientes={pacientes}
            deletePacient={deletePacient}
            setPacientEdit={setPacientEdit}
          />
        </div>
      </main>
    </>
  )
}

export default App
