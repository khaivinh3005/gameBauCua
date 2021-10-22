import Swal from "sweetalert2";
const stateDefault = {
    danhSachCuoc: [
        { ma: 'bau', hinhAnh: './img_bauCua/bau.png', diem: 0 },
        { ma: 'ga', hinhAnh: './img_bauCua/ga.png', diem: 0 },
        { ma: 'ca', hinhAnh: './img_bauCua/ca.png', diem: 0 },
        { ma: 'cua', hinhAnh: './img_bauCua/cua.png', diem: 0 },
        { ma: 'nai', hinhAnh: './img_bauCua/nai.png', diem: 0 },
        { ma: 'tom', hinhAnh: './img_bauCua/tom.png', diem: 0 },
    ],
    tongDiem: 1000,
    mangXucXac: [
        { ma: 'cua', hinhAnh: './img_bauCua/cua.png' },
        { ma: 'nai', hinhAnh: './img_bauCua/nai.png' },
        { ma: 'tom', hinhAnh: './img_bauCua/tom.png' }
    ]
}

const GameBauCua = (state = stateDefault, action) => {
    switch (action.type) {
        case 'DAT_CUOC_BAU_CUA': {
            let updateDanhSach = [...state.danhSachCuoc];
            let index = updateDanhSach.findIndex((item, index) => {
                return item.ma === action.quanCuoc.ma
            })
            if (index !== -1) {
                if (action.tangGiam) {
                    if (state.tongDiem > 0) {
                        updateDanhSach[index].diem += 100;
                        state.tongDiem -= 100;
                    }
                } else {
                    if (updateDanhSach[index].diem > 0) {
                        updateDanhSach[index].diem -= 100;
                        state.tongDiem += 100;
                    }
                }
            }
            state.danhSachCuoc = updateDanhSach;
            return { ...state }
        }; break;

        case 'XOC': {
            let isDiem = false;
            state.danhSachCuoc.find((item, index) => {
                if (item.diem > 0) {
                    isDiem = true
                }
            })

            if (!isDiem) {
                Swal.fire({
                    icon: 'warning',
                    title: 'Vui lòng đặt cược',
                })
            } else {
                let newArray = [];
                for (let i = 0; i < 3; i++) {
                    let soNgauNhien = Math.floor(Math.random() * 6);
                    const xucXacNgauNhien = state.danhSachCuoc[soNgauNhien];
                    newArray.push(xucXacNgauNhien)
                }
                state.mangXucXac = newArray;


                //xu ly tang diem thuong
                let updateTongDiem = state.tongDiem;
                newArray.forEach((xucNN, index) => {
                    const indexDS = state.danhSachCuoc.findIndex(quanCuoc => quanCuoc.ma === xucNN.ma);
                    if (indexDS !== -1) {
                        // state.tongDiem += state.danhSachCuoc[indexDS].diem;
                        updateTongDiem += state.danhSachCuoc[indexDS].diem;
                        if (updateTongDiem > state.tongDiem) {
                            Swal.fire({
                                icon: 'success',
                                title: 'You Win',
                            })
                        }
                    }
                })
                state.tongDiem = updateTongDiem

                // xu ly hoan tien
                state.danhSachCuoc.forEach((qc, index) => {
                    const newIndex = newArray.findIndex(item => item.ma === qc.ma);
                    if (newIndex !== -1) {
                        state.tongDiem += qc.diem;
                    }
                })

            }

            //xu ly lam moi game
            state.danhSachCuoc = state.danhSachCuoc.map((xx, index) => {
                return { ...xx, diem: 0 }
            });
            return { ...state }
        }; break;

        case 'CHOI_LAI': {
            state.danhSachCuoc = state.danhSachCuoc.map((xx, index) => {
                return { ...xx, diem: 0 }
            })
            return { ...state }
        }; break;

        default: return { ...state }
    }
}

export default GameBauCua;