import React, { Component } from 'react'
import SanPham from './SanPham';

export default class DSSanPham extends Component {
    render() {
        let {mangSP} = this.props;

        return (
            <div className="row">
                {mangSP.map((item, index) => {
                    return (
                        <div className="col-4" key={item.maSP}>
                           <SanPham sp={item}/>
                        </div>
                    )
                })}
            </div>
        )
    }
}
