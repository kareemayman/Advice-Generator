import dividerDesktop from "../images/pattern-divider-desktop.svg"
import diceIcon from "../images/icon-dice.svg"

export function Advice() {
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
        className="dice absolute left-1/2 -bottom-7 -translate-x-1/2 flex 
            justify-center content-center rounded-full p-5 cursor-pointer transition-all duration-300"
      >
        <img src={diceIcon} alt="dice" />
      </div>
    </div>
  )
}
