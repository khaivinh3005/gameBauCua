import React from 'react'
import { useSpring, animated } from 'react-spring'

export default function DemoReactSpring(props) {
    const propsAni = useSpring({ to: { color:"green" }, from: { color:"red" } , config: {duration:2000} });
    const propsNum = useSpring({to : { number : 1000} , from: {number :0} , config: {duration: 4000} })
    const propsColorRGB = useSpring({
        to: {color : [131,111,255]},
        from : {color : [238,99,99]},
        config : {duration: 2000, delay : 1}
    })
    return (
        <div>
            <h1>Change color text</h1>
            <animated.div style={propsAni}>I will fade in</animated.div>
            <hr />
            <h2>Change number</h2>
            <animated.h2>{propsNum.number}</animated.h2>
            <animated.p style={{fontSize: propsNum.number}}>1</animated.p>

            <animated.div style={{color: propsColorRGB.color.interpolate((r,g,b) => {return `rgb(${r},${g},${b})`})}} >Khaidaica</animated.div>
        </div>
    )
}
