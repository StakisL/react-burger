import { combineReducers } from '@reduxjs/toolkit'
import { burgerConstructorReducer } from './burger-constructor'
import { appReducer } from './app'
import { orderDetailsReducer } from './order-details'
import { burgerIngredientsReducer } from './burger-ingredients'
import { ingredientDetailsReducer } from './ingredient-details'

export const rootReducer = combineReducers({
	burgerConstructor: burgerConstructorReducer,
	api: appReducer,
	order: orderDetailsReducer,
	ingredients: burgerIngredientsReducer,
	ingredientDetails: ingredientDetailsReducer,
})
