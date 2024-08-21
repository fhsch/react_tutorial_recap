import React from "react"
import memesData from "../memesData"


export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "",
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getMeme() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImage: memesArray[randomNumber].url,
            }
        })
    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input" 
                />
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input" 
                />
                <button 
                    onClick={getMeme} 
                    className="form--button"
                >
                    Get a new meme
                </button>
                <img className="meme--image" src={meme.randomImage} />
            </div>
        </main>
    )
}