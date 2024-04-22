import Navbar from "./components/Navbar"
import Image from "./components/Images"
import Prev from "/images/icon-previous.svg"
import Next from "/images/icon-next.svg"
import { useState } from "react"
import Minus from "/images/icon-minus.svg"
import Plus from "/images/icon-plus.svg"
import Cart from "/images/icon-cart.svg"
import close from "/images/icon-close.svg"


export default function App() {
  // light box
  const [lightBox, setLightbox] = useState(false)
  const [value, setValue] = useState(0)
  const [number, setNumber] = useState(0)
  // minus when click
  const handleMinus = () => {
    setValue(value - 1);
    if (value <= 0) {
      setValue(0);
    }
  };

  // set number product when click button add
  const handleClick = () => {
    setNumber(value)
  }

  return (
    <main className="min-h-screen">
      <section className={`${lightBox ? "bg-black z-50 bg-opacity-70" : ""} `}>
        {/* navbar */}
        <Navbar number={number} setNumber={setNumber} />
        {/* body */}
        <article className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-8 mt-10">
          {/* image part */}
          <div className={`${lightBox ? " opacity-10" : ""}`}>
            <Image setLightbox={setLightbox} />
          </div>

          {lightBox ? <div className="absolute left-1/2 ">
            <div className="relative max-w-2xl -left-1/2">
              <img onClick={() => setLightbox(false)} src={close} alt="" className="float-right cursor-pointer" />
              <Image setLightbox={setLightbox} />

            </div>

          </div> : ""}

          {/* content */}
          <div className={`flex flex-col gap-4 sm:w-2/3 w-full p-8 ${lightBox ? "-z-50" : ""}`}>
            <h1 className="text-Orange font-semibold uppercase">Sneaker Company</h1>
            <h2 className="font-semibold text-2xl">Fall Limited Edition Sneakers</h2>
            <p className="text-Grayishblue font-medium">These low-profile sneakers are your perfect casual wear companion. Featuring a
              durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
            <div className="flex sm:flex-col flex-row justify-between">
              <span className="flex flex-row gap-4 items-center">
                <h1 className="text-Verydarkblue text-2xl font-semibold">$125.00</h1>
                <p className="bg-Lightgrayishblue text-red-400">50%</p>
              </span>
              <s className="text-Grayishblue">$250.00</s>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex flex-row justify-between items-center py-2 bg-Grayishblue sm:w-32 rounded-md">
                <img src={Minus} alt="" onClick={handleMinus} className="mx-4" />
                <p>{value}</p>
                <img src={Plus} alt="" onClick={() => setValue(value + 1)} className="mx-4" />
              </button>
              <button onClick={handleClick} className="flex justify-center items-center bg-Orange py-2 text-white rounded-md sm:w-48">
                <img src={Cart} alt="" className="mx-2" />
                <p>Add to cart</p>
              </button>
            </div>
          </div>
        </article>
      </section>
    </main>
  )
}