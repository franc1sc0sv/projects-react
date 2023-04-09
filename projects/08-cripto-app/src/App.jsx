import { Forms } from './components/Forms'
import { ShowSkeleton } from './components/Results'
import { useResults } from './hooks/useResults'
function App () {
  const { criptoResults, getCriptoResults, isLoading } = useResults()
  return (
    <div className='flex flex-col pt-5 items-center justify-center h-max md:h-screen gap-10 my-0 mx-auto w-[90%] pb-4 md:w-[700px] '>
      <p className='text-4xl text-white font-extrabold text-center rounded-lg'>Cotiza tu cripto favorita</p>
      <div className='flex flex-col gap-10 w-full h-full md:flex-row md:h-max'>
        <Forms getCriptoResults={getCriptoResults} isLoading={isLoading} />
        <ShowSkeleton isLoading={isLoading} criptoResults={criptoResults} />
      </div>
    </div>
  )
}
export default App
