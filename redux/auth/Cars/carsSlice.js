import { createSlice } from "@reduxjs/toolkit"
import axios from "axios";


const initialState = {
    carsList: [],
    status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
}
const cars_URL = 'https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/data.json'
export const fetchProducts = createAsyncThunk('cars/fetchCars', async () => {
    try {
        const response = await axios.get(cars_URL);
        return response.data.slice(0, 100);
    } catch (error) {
        throw error;
    }
})

const carsSlice = createSlice({
    name: 'cars',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchCars.pending, (state, action) => {
                state.status = 'loading'
                state.error = null;

            }).addCase(fetchCars.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.carsList = action.payload;
            }).addCase(fetchCars.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
})

export const SelectAllCars = (state) => {
    return state.cars.carsList
}
export default carsSlice.reducer;