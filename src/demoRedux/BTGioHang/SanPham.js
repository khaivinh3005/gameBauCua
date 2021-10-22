import React, { Component } from 'react'
import {connect} from 'react-redux'

 class SanPham extends Component {

    themSanPham = (sp) => {
        let action = {
            type: 'THEM_SP',
            sp
        }
        this.props.dispatch(action)
    }

    render() {
        let {sp} = this.props;
        return (
            <div className="card">
                <img src={sp.hinhAnh} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{sp.tenSP}</h5>
                    <p className="card-text">{sp.giaBan}</p>
                    <a onClick={()=> this.themSanPham(sp)} href="#" className="btn btn-danger" >Thêm giỏ hàng</a>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {

}

export default connect()(SanPham)