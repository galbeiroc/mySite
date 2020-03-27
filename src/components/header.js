import React from "react"
import Form from "./contact"
import illustration from "../img/code_review.svg"

export default () => (
  <header className="bg-gray-300">
    <div className="container mx-auto p-12 max-w-4xl">

      <div className="flex justify-center items-center">
        <div className="flex-1">
          <h1 className="font-bold text-purple-400 text-6xl">
            ¡Hola! Soy GAlbeiroC
          </h1>
          <p className="text-xl font-light">
            Creo aplicaciones web and learning programación
          </p>
        </div>
        <img src={illustration} alt="code review" style={{ height: "300px" }} />
      </div>
      
      <div>
        <Form />
      </div>
    </div>
  </header>
)
