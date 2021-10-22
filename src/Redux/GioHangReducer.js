const stateDefault  = {
    gioHang : [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg",soLuong:1 }
    ]
}

export const GioHangReducer = (state = stateDefault , action) => {
    switch(action.type) {
        case 'THEM_SP' : {
            let updateGioHang = [...state.gioHang];
            let index = updateGioHang.findIndex((sp,index)=> {
                return sp.maSP === action.sp.maSP
            })
            if(index !== -1) {
                updateGioHang[index].soLuong += 1;
            }else {
                updateGioHang.push(action.sp)
            }

            state.gioHang = updateGioHang;
            return {...state}
        };break;

        case 'TANG_GIAM': {
            let updateGioHang = [...state.gioHang];
            let index = updateGioHang.findIndex((sp,index)=> {
                return sp.maSP === action.sp
            })

            if(action.tangGiam) {
                updateGioHang[index].soLuong += 1
            }else {
                if(updateGioHang[index].soLuong > 1) {
                    updateGioHang[index].soLuong -= 1
                }
            }

            state.gioHang = updateGioHang;
            return{...state};
        };break;

        case 'XOA_GIO_HANG': {
            let updateGioHang = [...state.gioHang];
            let index = updateGioHang.findIndex((sp,index)=> {
                return sp.maSP === action.maSP
            })
            if(index !== -1) {
                updateGioHang.splice(index,1)
            }
            state.gioHang = updateGioHang;
            return{...state};
        };break;

        default: return{...state}
    }
}