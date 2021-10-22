import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function DiemCuoc(props) {
    const dispatch = useDispatch();

    const diemThuong = useSelector(state => state.GameBauCua.tongDiem);
    const handleReturn = () => {
        let action = {
            type: 'CHOI_LAI'
        }
        dispatch(action);
    }

    return (
        <div>
            <div className="text-center display-4 text-danger">
                <span className="mt-3">GAME BẦU CUA</span>
                </div>
            <div className="text-center mt-3">
                <span className="p-3 text-white bg-danger" style={{fontSize:'20px', borderRadius:"5%"}}>Tiền Thưởng : <span className="text-warning">${diemThuong}</span></span>
            </div>

            <div className="text-center mt-4">
                <button onClick={() => handleReturn()} className="p-3 text-white bg-success" style={{fontSize:'20px', borderRadius:"5%"}}>Chơi lại</button>
            </div>
        </div>
    )
}
