import {useState, useEffect} from 'react'

const scGap = 0.02 
const delay = 20 

export const useAnimatedScale = () => {
    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useState(false)
    return {
        start() {
            if (!animated) {
                setAnimated(true)
                const interval = setInterval(() => {
                    setScale((prevScale) => {
                        if (prevScale + scGap > 1) {
                            return 0 
                        }
                        return prevScale + scGap 
                    })
                }, delay)
            }
        },
        scale 
    } 
}

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    useEffect(() => {
        window.onresize = () => {
            setW(window.innerWidth)
            setH(window.innerHeight)
        }
        return () => {
            window.onresize = () => {
                
            }
        }
    })
}