import dividerDesktop from "../images/pattern-divider-desktop.svg"
import diceIcon from "../images/icon-dice.svg"
import { useRef } from "react"

export function Advice() {

    const diceRef = useRef()

    function diceClicked() {
        diceRef.current.style.scale = "0.9 0.9"
        setTimeout(() => {
            diceRef.current.style.scale = 1 
        }, 100);
    }

  return (
    <div className="container rounded-2xl relative p-11 text-center mx-3 max-w-80 sm:max-w-lg">
      <h1 className="font-medium tracking-[.2em] text-sm">ADVICE #117</h1>
      <q className="block my-8 font-extrabold text-2xl">
        It is easy to sit up and take notice, what's difficult is getting up and
        taking action.
      </q>
      <div className="mb-7">
        <img src={dividerDesktop} alt="divder desktop" />
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
