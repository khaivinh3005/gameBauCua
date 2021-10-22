import React, { Component } from 'react'
import DSSanPham from './DSSanPham'
import GioHang from './GioHang'
import { connect } from 'react-redux'

 class BTGioHang extends Component {

    arrPhone = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg",soLuong:1 },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg",soLuong:1 },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg",soLuong:1 }
    ]

    render() {
        return (
            <div className="container">
                <div className="row justify-content-end">
                    <div className="col-4" data-toggle="modal" data-target="#exampleModal">
                        <p>Giỏ hàng ({this.props.gioHang.reduce((total,item,index)=> {
                            return total += item.soLuong
                        },0)})</p>
                    </div>
                </div>
                <DSSanPham mangSP = {this.arrPhone}/>
                <GioHang sanPham = {this.arrPhone} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        gioHang : state.GioHangReducer.gioHang
    }
}
export default connect(mapStateToProps)(BTGioHang)
