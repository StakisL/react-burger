import { combineReducers } from '@reduxjs/toolkit'
import { burgerConstructorReducer } from './burger-constructor'
import { appReducer } from './app'
import { orderDetailsReducer } from './order-details'

export const rootReducer = combineReducers({
	constructor: burgerConstructorReducer,
	api: appReducer,
	order: orderDetailsReducer,
})
