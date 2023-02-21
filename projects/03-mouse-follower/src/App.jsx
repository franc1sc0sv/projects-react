import React, { useEffect, useState } from 'react'

const FollowMouse = () => {
  const [enable, SetEnable] = useState(false)
  const [position, SetPosition] = useState({ x: 0, y: 0 })
  // NUNCA SE PUEDE PONER UN HOOK DENTRO DE UN CONDICIONAL
  useEffect(() => {
    const handleClick = (e) => {
      const { clientX, clientY } = e
      SetPosition({ x: clientX, y: clientY })
    }

    // Esta subscripcion sigue vijiente
    if (enable) {
      window.addEventListener('pointermove', handleClick)
    }
    // cleanup:
    // -> cuando el componente se desmonta
    // -> cuando cambian las dependencias, antes de ejecutar
    //    el efecto de nuevo
    // clean useffect - puedes devolver una funcion en el useefect
    return () => {
      SetPosition({ x: 0, y: 0 })
      window.removeEventListener('pointermove', handleClick)
    }
  }, [enable])

  // [] -> solo se ejecuta una vez cuando se monta el componente
  // [enabled] -> se ejecuta cuando cambia enabled y cuando se monta el componente
  // undefined -> se ejecuta cada vez que se renderiza el componente
  return (
    <>
      <div className='absolute bg-[#09f] rounded-[50%] opacity-80 pointer-events-none left-[-25px] top-[-25px] w-10 h-10' style={{ transform: `translate(${position.x}px, ${position.y}px)` }} />
      <button onClick={() => SetEnable(!enable)} className='bg-[#191918] p-2 rounded-xl'>{enable ? 'Desactivar' : 'Activar'} seguir puntero</button>
    </>
  )
}

function App () {
  return (
    <main>
      <FollowMouse />
    </main>
  )
}

export default App
