import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    cars: ["Model 3SE", "Model 2X"]
}

const carSlice = createSlice({
    name: "car",
    initialState,
    reducers: {}
})

export const selectCars = state => state.car.cars

export default carSlice.reducer