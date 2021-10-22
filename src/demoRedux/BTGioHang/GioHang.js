import React, { Component } from 'react'
import { connect } from 'react-redux';

class GioHang extends Component {

    tangGiamSl = (sp,tangGiam) => {
        let action = {
            type : 'TANG_GIAM',
            sp,
            tangGiam
        }

        this.props.dispatch(action);
    }

    xoaGH = (maSP) => {
        let action = {
            type: 'XOA_GIO_HANG',
            maSP
        }

        this.props.dispatch(action)
    }



    renderGioHang = () => {
        return this.props.gioHang.map((sp, index) => {
            return (
                <tr key={index}>
                    <th scope="row">{sp.maSP}</th>
                    <td><img src={sp.hinhAnh} width={80} height={80} alt="..." /></td>
                    <td>{sp.tenSP}</td>
                    <td>
                        <button onClick={()=>this.tangGiamSl(sp.maSP,true)} className="btn btn-success">+</button>
                        <span>{sp.soLuong}</span>
                        <button onClick={()=>this.tangGiamSl(sp.maSP,false)} className="btn btn-success">-</button>
                    </td>
                    <td>{sp.giaBan.toLocaleString()}</td>
                    <td>{(sp.giaBan * sp.soLuong).toLocaleString()}</td>
                    <td><button onClick={() => this.xoaGH(sp.maSP)} className="btn btn-danger">Xoa</button></td>
                </tr>
            )
        })
    }
    render() {
        console.log(this.props.gioHang)
        return (

            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Mã sản phẩm</th>
                                        <th scope="col">Hình ảnh</th>
                                        <th scope="col">Tên Sản Phẩm</th>
                                        <th scope="col">Số lượng</th>
                                        <th scope="col">Đơn giá</th>
                                        <th scope="col">Thành tiền</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.renderGioHang()}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colSpan="5"></td>
                                        <td>Tổng</td>
                                        <td>{this.props.gioHang.reduce((total,item,index)=>{
                                            return total += item.giaBan * item.soLuong;
                                        },0).toLocaleString()}</td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        gioHang: state.GioHangReducer.gioHang
    }
}


export default connect(mapStateToProps)(GioHang)
