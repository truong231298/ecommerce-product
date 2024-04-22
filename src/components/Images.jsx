import React from 'react'
import Images from "./Imges.json"
import { useState } from 'react';
import Prev from "/images/icon-previous.svg"
import Next from "/images/icon-next.svg"

const Image = ({setLightbox}) => {
    const [selectedImage, setSelectedImage] = useState(0);
    
    // click prev button
    const handleSliderPrev = () => {
        setSelectedImage(selectedImage - 1)
        if (selectedImage <= 0) {
            setSelectedImage(3)
        }
    }
    // click next button
    const handleSliderNext = () => {
        setSelectedImage(selectedImage + 1)
        if (selectedImage >= 3) {
            setSelectedImage(0)
        }
    }
    return (
        <div className="flex flex-col gap-4">
            <div className="w-full">
                <img onClick={() => setLightbox(true)} src={Images[selectedImage].normal} alt="" className="rounded-xl w-full cursor-pointer" />
            </div>
            <ul className="hidden sm:flex flex-row gap-4 max-w-2xl">
                {Images.map((product, index) => (
                    <li key={index} className={index == selectedImage && "opacity-50 border-2 border-Orange rounded-xl"}><img onClick={() => setSelectedImage(index)} src={product.thumbal} alt="" className="rounded-xl cursor-pointer" /></li>
                ))}
            </ul>
            <div className="sm:hidden flex justify-between">
                <img onClick={handleSliderPrev} src={Prev} alt="" className="absolute top-72 ml-4 p-2 bg-white border-2 rounded-full cursor-pointer" />
                <img onClick={handleSliderNext} src={Next} alt="" className="absolute right-0 mr-4 top-72 p-2 bg-white border-2 rounded-full cursor-pointer" />
            </div>
        </div>
    )
}

export default Image