
export const ShowSkeleton = ({ isLoading, criptoResults }) => {
  return (
    <div className='md:w-2/4 w-full border border-white h-72 rounded-lg flex justify-center items-center flex-col mb-5 py-5'>
      {isLoading
        ? <Skeleton />
        : <Results criptoResults={criptoResults} />}
    </div>

  )
}

export const Results = ({ criptoResults }) => {
  return (
    Object.keys(criptoResults).length === 0
      ? <WaitingResults />
      : <ResultsQuotation criptoResults={criptoResults} />
  )
}
const WaitingResults = () => {
  return (<p className='text-xl text-white font-medium'>Esperando un resultado</p>)
}

const ResultsQuotation = ({ criptoResults }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = criptoResults

  return (
    <>
      <img className='w-20' src={`https://cryptocompare.com/${IMAGEURL}`} alt='imagen cripto' />
      <div className='flex flex-col gap-2'>
        <p className='text-lg text-white font-semibold'>El precio es de: <span className='font-normal'>{PRICE}</span></p>
        <p className='text-lg text-white font-semibold'>Precio más alto del día: <span className='font-normal'>{HIGHDAY}</span></p>
        <p className='text-lg text-white font-semibold'>Precio más bajo del día: <span className='font-normal'>{LOWDAY}</span></p>
        <p className='text-lg text-white font-semibold'>Variación últimas 24 horas: <span className='font-normal'>{CHANGEPCT24HOUR}</span></p>
        <p className='text-lg text-white font-semibold'>Última Actualización: <span className='font-normal'>{LASTUPDATE}</span></p>
      </div>
    </>

  )
}

const Skeleton = () => {
  return (
    <div className='flex animate-pulse w-[90%]'>
      <div className='w-full flex flex-col gap-4 items-center'>
        <span className='w-20 h-20 rounded-full bg-gray-700' />

        <div className='flex flex-col gap-4 w-full'>
          <div className='h-4 w-full rounded-md bg-gray-700' />
          <div className='h-4 w-full rounded-md bg-gray-700' />
          <div className='h-4 w-full rounded-md bg-gray-700' />
          <div className='h-4 w-full rounded-md bg-gray-700' />
          <div className='h-4 w-full rounded-md bg-gray-700' />
        </div>
      </div>
    </div>
  )
}
