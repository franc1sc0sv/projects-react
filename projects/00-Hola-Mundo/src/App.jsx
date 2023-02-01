import { React, useState } from "react";

//El useState nos va servir para guardar una varable para decirnos los estilos

//Tenemos quie hacer que el propio componente decida que hacer
export const App = ({ name, userName = "unknow", InitialIsFollowing }) => {
  //Evitar esta mala practica - Cambiar los valores de las props es decir evitar la mutacion de las props
  //userName = `@{userName}`
  //Estas evitando que react tenga la seguridad de lo que esta renderizando
  //Las props deben ser inmutables

  //Prop especial = children es basicamente todo lo que envuelbe
  const [isFollowing, setIsFollowing] = useState(InitialIsFollowing); //Desestructuracion de JS :)
  //useState[0] - Valor del estado
  //useState[1] - Funcion que nos permite actualizar el estado1

  const text = isFollowing ? "Siguiendo " : "Seguir ";

  const buttonClassName = isFollowing
    ? " hover:bg-red-700 hover:bg-opacity-10 hover:border-red-700 hover:text-red-700 bg-transparent text-white"
    : " bg-white hover:bg-opacity-80 text-[#222]";

  const handleClick = () => setIsFollowing(!isFollowing);

  console.log("Render component with: " + userName);
  return (
    <article className="flex gap-2 justify-between text-sm">
      <div className="flex gap-2">
        <img
          className="h-12 rounded-full"
          src={`https://unavatar.io/${userName}`}
          alt=""
        />
        <div className="flex flex-col justify-center">
          <span className="text-white font-medium">{name}</span>
          <span className="text-white opacity-50">@{userName}</span>
        </div>
      </div>
      <aside className=" flex items-center">
        <button
          className={
            "border border-solid boder-white rounded-full font-bold px-5 py-1.5 ease-in transition-colors" +
            buttonClassName
          }
          onClick={handleClick}
        >
          <span className="">{text}</span>
        </button>
      </aside>
    </article>
  );
};
