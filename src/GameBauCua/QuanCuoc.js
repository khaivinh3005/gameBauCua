import React , {useState} from 'react'
import { useDispatch } from 'react-redux';
import { useSpring, animated } from 'react-spring';
import {set} from 'lodash';

export default function QuanCuoc(props) {
    let dispatch = useDispatch();
    let { quanCuoc } = props;

    let [propsUseSpring, set, top] = useSpring(() => {
        return {
            to: { scale: 1 },
            from: { scale: 0 }
        }
    })


    let handleTangGiam = (quanCuoc, tangGiam) => {
        set({ scale: 1 })
        let action = {
            type: "DAT_CUOC_BAU_CUA",
            quanCuoc,
            tangGiam
        }
        dispatch(action);
    }

    return (
        <div className="m-4 my-5 text-center" style={{ borderRadius: "30px" }}>
            <img src={quanCuoc.hinhAnh} alt="" style={{ width: "80%" }} />
            <div className="mt-2 d-flex bg-success" style={{ justifyContent: "space-between", alignItems: "center", borderRadius: "20px" }}>
                <animated.button style={{ transform: propsUseSpring.scale.interpolate(scale => `scale(${scale})`) }} onClick={() =>{handleTangGiam(quanCuoc, true)}} className='btn btn-danger mr-3'><i className="fa fa-plus"></i></animated.button>
                <span className="" style={{ color: "yellow", fontSize: 25 }}>{quanCuoc.diem}</span>
                <button onClick={() => handleTangGiam(quanCuoc, false)} className='btn btn-danger ml-3'>-</button>
            </div>
        </div>
    )
}
