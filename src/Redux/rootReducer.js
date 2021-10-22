import { combineReducers } from "redux";
import { GioHangReducer } from "./GioHangReducer";
import GameBauCua from "./GameBauCua";

const rootReducer = combineReducers({ //store tổng ứng dụng
    GameBauCua
})

export default rootReducer;



