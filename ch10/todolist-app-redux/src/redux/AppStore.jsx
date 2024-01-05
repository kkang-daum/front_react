import { configureStore } from '@reduxjs/toolkit'
import TodoReducer from './TodoReducer'

//앱의 reducer 는 데이터 종류에 따라 여러개가 나올 수 있지만..
//store 는 하나.. 
const AppStore = configureStore({reducer: TodoReducer})
export default AppStore