import { combineReducers } from '@reduxjs/toolkit'
import { burgerConstructorReducer } from './burger-constructor'
import { appReducer } from './app'
import { orderDetailsReducer } from './order-details'
import { burgerIngredientsReducer } from './burger-ingredients'

export const rootReducer = combineReducers({
	constructor: burgerConstructorReducer,
	api: appReducer,
	order: orderDetailsReducer,
	ingredients: burgerIngredientsReducer,
})
