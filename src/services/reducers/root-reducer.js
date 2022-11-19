import { combineReducers } from "@reduxjs/toolkit";
import { BurgerConstructorReducer } from "./burger-constructor";
import { BurgerIngredientsReducer } from "./burger-ingredients";

export const rootReducer = combineReducers({
    constructor: BurgerConstructorReducer,
    ingredients: BurgerIngredientsReducer
})