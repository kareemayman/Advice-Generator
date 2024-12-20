import dividerDesktop from "../images/pattern-divider-desktop.svg"
import diceIcon from "../images/icon-dice.svg"
import { useRef, useState } from "react"
import { useFetch } from "./useFetch"

export function Advice() {
  const [triggerFetch, changeTriggerFetch] = useState(0)

  const { isLoading, isError, data } = useFetch(
    "https://api.adviceslip.com/advice",
    triggerFetch
  )

  const diceRef = useRef()

  function diceClicked() {
    diceRef.current.style.scale = "0.9 0.9"
    setTimeout(() => {
      diceRef.current.style.scale = "1 1"
    }, 100)

    changeTriggerFetch((current) => current + 1)
  }

  console.log(data)
  return (
    <div className="container rounded-2xl relative p-11 text-center mx-3 max-w-80 sm:max-w-lg shadow-2xl">
      <h1 className="font-medium tracking-[.2em] text-sm">
        {isLoading ? "" : isError ? "" : `ADVICE #${data.slip.id}`}
      </h1>
      <q className="block my-8 font-extrabold text-2xl">
        {isLoading
          ? "Loading Advice..."
          : isError
          ? "Error Fetching Data"
          : data.slip.advice}
      </q>
      <div className="mb-7">
        <img src={dividerDesktop} alt="divider desktop" />
      </div>
      <div
        className="dice absolute left-1/2 bottom-0 translate-y-1/2 -translate-x-1/2 flex 
            justify-center content-center rounded-full p-5 cursor-pointer 
            transition-all duration-300 select-none"
        ref={diceRef}
        onClick={diceClicked}
      >
        <img src={diceIcon} alt="dice" />
      </div>
    </div>
  )
}
