import React from 'react'
import {
    useAnimatedScale, 
    useDimension
} from './hooks'
import BarDropBall from './BarDropBall'

const Container = (props) => {
    const {scale, start} = useAnimatedScale()
    const {w, h} = useDimension()
    return <div>
        <BarDropBall w = {w} h = {h} scale = {scale} onClick = {start}></BarDropBall>
    </div>
}

export default Container 