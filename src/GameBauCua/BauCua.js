import React from 'react'
import DiemCuoc from './DiemCuoc'
import DanhSachCuoc from './DanhSachCuoc'
import DanhSachXucXac from './DanhSachXucXac'
import QuanCuoc from './QuanCuoc'
import './BauCua.css'

export default function BauCua() {
    return (
        <div id="BauCua" className="container-fluid">
            <div className="mt-5">
                 <DiemCuoc />
            </div>
            <div className="row">
                <div className="col-8">
                    <DanhSachCuoc />
                </div>
                <div className="col-4">
                    <DanhSachXucXac />
                </div>
            </div>
        </div>
    )
}
