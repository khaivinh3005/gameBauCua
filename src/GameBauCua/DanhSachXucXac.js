import React from 'react'
import XucXac from './XucXac'
import { useSelector, useDispatch } from 'react-redux'


export default function DanhSachXucXac(props) {
    const mangXucXac = useSelector(state => state.GameBauCua.mangXucXac);
    const danhSachCuoc = useSelector(state => state.GameBauCua.danhSachCuoc);
    const dispatch = useDispatch();
    const handleRound = (ds) => {
        let action = {
            type: 'XOC'
        }
        dispatch(action)
    }

    return (
        <div className="bg-white mt-5 ml-5" style={{width:300, height:300 , borderRadius:'50%'}}>
            <div className="row">
                <div className="col-12 text-right" style={{marginTop: '-10px',marginLeft:"70px"}}>
                    <XucXac xucXacItem = {mangXucXac[0]} />
                </div>
                <div className="col-6 text-right" style={{marginTop: '-30px'}}>
                    <XucXac xucXacItem = {mangXucXac[1]} />
                </div>
                <div className="col-6 text-right " style={{marginTop: '-30px'}}>
                    <XucXac xucXacItem = {mangXucXac[2]} />
                </div>
            </div>
            <div className="text-center" style={{marginTop:"100px"}}>
                <button onClick={()=>handleRound(danhSachCuoc)} className="btn btn-danger" style={{fontSize:"50px" , borderRadius:"10px"}}>Xốc</button>
            </div>
        </div>
    )
}
