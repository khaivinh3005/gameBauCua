import React, { Fragment } from 'react'
import { useSpring, animated } from 'react-spring'

export default function XucXac(props) {
    let { xucXacItem } = props;
    const [propsDice, set] = useSpring(() => ({
        to: {
            xyz: [360, 360, 360]
        },
        from: {
            xyz: [0, 0, 0]
        },
        config: {
            duration: 1000
        },
        reset: true
    }))

    set({xyz:[0, 0, 0]});


    

    return (
        <Fragment>
            <div className="scene ml-2">
                <animated.div style={{
                    transform: propsDice.xyz.interpolate((x, y, z) => `translateZ(-25px) rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`)
                }} className="cube ml-5 mt-5">
                    <div className="cube__face front">
                        <img src={xucXacItem.hinhAnh} style={{ width: '100%' }} alt="" />
                    </div>
                    <div className="cube__face back">
                        <img src='./img_bauCua/nai.png' style={{ width: '100%' }} alt="" />
                    </div>
                    <div className="cube__face right">
                        <img src='./img_bauCua/ca.png' style={{ width: '100%' }} alt="" />
                    </div>
                    <div className="cube__face left">
                        <img src='./img_bauCua/ga.png' style={{ width: '100%' }} alt="" />
                    </div>
                    <div className="cube__face top">
                        <img src='./img_bauCua/tom.png' style={{ width: '100%' }} alt="" />
                    </div>
                    <div className="cube__face bottom">
                        <img src='./img_bauCua/cua.png' style={{ width: '100%' }} alt="" />
                    </div>
                </animated.div>
            </div>
        </Fragment>

    )
}
