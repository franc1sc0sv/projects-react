import { useState } from 'react'
import { useAdvice } from './useAdvice'

const PatternDesktop = () => {
  return (
    <svg
      width='444' height='16'
      xmlns='http://www.w3.org/2000/svg'
      className='lg:block hidden'

    >
      <g fill='none' fillRule='evenodd'>
        <path fill='#4F5D74' d='M0 8h196v1H0zM248 8h196v1H248z' />
        <g transform='translate(212)' fill='#CEE3E9'>
          <rect width='6' height='16' rx='3' />
          <rect x='14' width='6' height='16' rx='3' />
        </g>
      </g>
    </svg>
  )
}

const PatterMobile = () => {
  return (
    <svg
      width='295' height='16'
      xmlns='http://www.w3.org/2000/svg'
      className='lg:hidden'
    >
      <g fill='none' fillRule='evenodd'>
        <path fill='#4F5D74' d='M0 8h122v1H0zM173 8h122v1H173z' />
        <g transform='translate(138)' fill='#CEE3E9'>
          <rect width='6' height='16' rx='3' />
          <rect x='14' width='6' height='16' rx='3' />
        </g>
      </g>
    </svg>
  )
}

export const App = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { advice, setRandomAdvice } = useAdvice(setIsLoading)

  const handleClick = () => {
    setRandomAdvice()
  }
  return (
    <main className='w-full h-screen bg-DarkBlue grid place-items-center'>
      <div className='bg-DarkGrayishBlue lg:w-[500px] w-[350px] rounded-lg flex items-center flex-col px-5 pt-10 pb-16 gap-5 relative'>

        {advice && !isLoading
          ? (
            <>
              <p className='text-sm text-NeonGreen font-light font-Manrope uppercase tracking-[2px]'>Advice {advice.id}</p>
              <p className='text-2xl text-center text-LightCyan font-Manrope font-extrabold'>"{advice.advice}"</p>
            </>
            )
          : (
            <div role='status' className='w-full animate-pulse flex flex-col gap-3'>
              <div className='h-2.5 bg-gray-700 w-48 self-center' />
              <div className='h-2 bg-gray-700 max-w-full' />
              <div className='h-2 bg-gray-700 max-w-full' />
              <div className='h-2 bg-gray-700 max-w-full' />
              <div className='h-2 bg-gray-700 max-w-full' />
            </div>
            )}

        <PatternDesktop />
        <PatterMobile />

        <div
          onClick={handleClick} className=' absolute bg-NeonGreen flex items-center justify-center rounded-full p-4 -bottom-7 cursor-pointer'
        >
          <svg
            width='24' height='24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z' fill='#202733' />
          </svg>
        </div>
      </div>
    </main>
  )
}
