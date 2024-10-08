import { createSlice } from "@reduxjs/toolkit";

type initialState = {
    isModalOpen: boolean
}

const initialState: initialState = {
    isModalOpen: false,
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state) => {
            state.isModalOpen = true;
        },
        closeModal: (state) => {
            state.isModalOpen = false;
        }
    }
})

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;