import React from 'react'
import QuanCuoc from './QuanCuoc'
import { useSelector, useDispatch } from 'react-redux'

export default function DanhSachCuoc(props) {

    const danhSachCuoc = useSelector(state => state.GameBauCua.danhSachCuoc);

    const renderDanhSachCuoc = () => {
       return danhSachCuoc.map((item, index) => {
            return (
                <div className="col-4">
                    <QuanCuoc quanCuoc={item} />
                </div>
            )
        })
    }

    return (
        <div className="row">
            {renderDanhSachCuoc()}
        </div>
    )
}


