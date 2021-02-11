import React from 'react'
import {useStyle} from './hooks'

const BarDropBall = ({w, h, scale, onClick}) => {
    const {circleStyle, barStyle} = useStyle(w, h, scale)
    return (
        <div>
            <div onClick={onClick} style = {circleStyle()}></div>
            <div style = {barStyle()}></div>
        </div>
    )
}

export default BarDropBall 