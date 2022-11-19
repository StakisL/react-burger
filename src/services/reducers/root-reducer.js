import { combineReducers } from '@reduxjs/toolkit'
import { BurgerConstructorReducer } from './burger-constructor'
import { AppReducer } from './app'

export const rootReducer = combineReducers({
	constructor: BurgerConstructorReducer,
	api: AppReducer,
})
