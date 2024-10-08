import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getWeatherListQuery } from "../api";
import { Units, WeatherItem } from "../utils/globalTypes";
import { openModal } from "./modalSlice";

type initialState = {
    weatherList: WeatherItem[],
    cityName: string,
    selectedUnitLabel: Units,
}

const initialState: initialState = {
    weatherList: [],
    cityName: 'Yerevan',
    selectedUnitLabel: Units.c,
};

export const getWeatherListThunk = createAsyncThunk(
    'weatherList',
    async (
        { city, unit }: { city: string, unit: Units },
        { dispatch, rejectWithValue }
    ) => {
        try {
            const data = await getWeatherListQuery(city, unit);

            return data;
        } catch (error) {
            dispatch(openModal());
            return rejectWithValue(error);
        }
    }
)

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        changeUnit: (state, actions) => {
            state.selectedUnitLabel = actions.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getWeatherListThunk.fulfilled, (state, action) => {
                const { list, city } = action.payload;

                state.cityName = city.name
                state.weatherList = list;
            })
    }
})

export const { changeUnit } = weatherSlice.actions;

export default weatherSlice.reducer;