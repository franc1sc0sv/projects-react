import { Controller } from 'react-hook-form'
import { Combobox } from '@headlessui/react'
import { AiOutlineCheck } from 'react-icons/ai'
import { BsChevronExpand } from 'react-icons/bs'
import { useCombobox } from '../hooks/useCombobox'

export function ComboboxPro ({ name, control, options }) {
  const { selectedData, setSelectedData, setQuery, filteredData, query } = useCombobox({ options })

  return (
    <Controller
      control={control}
      defaultValue={selectedData}
      name={name}
      render={({ field: { onChange } }) => (
        <Combobox
          value={selectedData} onChange={(e => {
            onChange(e)
            setSelectedData(e)
          })}
        >
          <div className='relative mt-1'>
            <div className='relative flex px-5 overflow-hidden text-left bg-white rounded-lg shadow-md cursor-default w-max h-max focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300'>
              <Combobox.Input
                onChange={(e) => setQuery(e.target.value)} displayValue={(coin) => coin.name}
                className='w-full py-4 pr-10 text-gray-900 border-none focus-visible:outline-none'
              />
              <Combobox.Button>
                <BsChevronExpand />
              </Combobox.Button>
            </div>
            <Combobox.Options className='absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none'>
              {filteredData.length === 0 && query !== ''
                ? <NothingFound />
                : <RenderResultsCoins coins={filteredData} />}
            </Combobox.Options>
          </div>
        </Combobox>
      )}
    />
  )
}

function NothingFound () {
  return (
    <div className='relative px-4 py-2 text-gray-700 cursor-default select-none'>
      Nothing found.
    </div>
  )
}
function RenderResultsCoins ({ coins }) {
  return coins.map((coin, i) => (
    <Combobox.Option
      key={i}
      value={coin}
      className='relative flex items-center gap-2 px-5 py-3 cursor-default select-none ui-active:bg-blue-500 ui-active:text-white ui-not-active:bg-white ui-not-active:text-black'
    >
      <AiOutlineCheck className='hidden ui-selected:block' />
      <p className='pl-5 font-normal ui-selected:font-medium ui-selected:pl-0'>{coin.name}</p>
    </Combobox.Option>
  ))
}
