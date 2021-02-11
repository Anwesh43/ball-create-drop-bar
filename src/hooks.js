import {useState, useEffect} from 'react'
const parts = 2

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
                            setAnimated(false)
                            clearInterval(interval)
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
    return {
        w, 
        h
    }
}

const sinify = (scale) => Math.sin(scale * Math.PI)

const maxScale = (scale, i, n) => Math.max(0, scale - i / n)

const divideScale = (scale, i, n) => Math.min(1 / n, maxScale(scale, i, n)) * n 

 

export const useStyle = (w, h, scale) => {
    const position = 'absolute'
    const size = Math.min(w, h) / 10 
    const left = `${w / 2 - size / 2}px`
    const background = 'indigo'
    const sf = sinify(scale)
    const sf1 = divideScale(sf, 0, parts)
    const sf2 = divideScale(sf, 1, parts)
    return {
        circleStyle() {
            const top = `${(h / 2 - size) * sf1}px`
            const width = `${size}px`
            const height = `${size}px`
            const borderRadius = `50%`
            return {
                position, 
                left, 
                top, 
                width, 
                height, 
                background,
                borderRadius, 
            }
        },
        barStyle() {
            const top = `${h / 2}px`
            const width = `${size}px`
            const strokeHeight = Math.min(w, h) / 90
            const height = `${strokeHeight + (h / 2 - strokeHeight) * sf2}px`
            return {
                position, 
                left, 
                width, 
                height, 
                top, 
                background 
            }
        }
    }
}