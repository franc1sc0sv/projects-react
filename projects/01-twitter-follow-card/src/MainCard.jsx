import React, { useState } from 'react'

import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'

export const MainCard = () => {
  // const [name, SetName] = useState("elrubius");
  // const setNamePropm = () => SetName(prompt("yes?"));
  const users = [
    { userName: 'elrubius', name: 'elrubius', isFollowing: true },
    { userName: 'IamCristinini', name: 'Cristinini', isFollowing: false },
    { userName: 'sfdxpro', name: 'SfdxShow', isFollowing: false },
    { userName: 'elonmusk', name: 'Elon Musk', isFollowing: true }
  ]
  return (
    <section className=' flex flex-col gap-2'>
      {/* Cuando renderizamos una lista de elementos en react le tenemos que dar una key
      Tenemos que identificar el elemnto del array
      */}
      {users.map(({ userName, name, isFollowing }) => {
        return (
          <App
            key={userName}
            userName={userName}
            name={name}
            InitialIsFollowing={isFollowing}
          />
        )
      })}

      {/* <App userName={"elrubius"} name={"elrubius"} />

      <App userName={"IamCristinini"} name={"Cristinini"} />

      <App userName={"sfdxpro"} name={"SfdxShow"} />

      <App userName={"elonmusk"} name={"Elon Musk"} /> */}
      {/* <button
        className="bg-white rounded-full"
        onClick={setNamePropm}
      >
        Push Me
      </button> */}
    </section>
  )
}
