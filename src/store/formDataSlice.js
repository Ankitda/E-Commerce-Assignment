import { createSlice } from "@reduxjs/toolkit";

const formDataSlice = createSlice({
    name : "form",
    initialState : {
        personalData : {},
        creditCardData : {}
    },
    reducers : {
        savePersonalData : (state, action) => {
            state.personalData = action.payload
        },
        saveCreditCardData : (state, action) => {
            state.creditCardData = action.payload
        }
    }
})

export const {savePersonalData, saveCreditCardData} = formDataSlice.actions;
export const selectPersonalData = (state) => state.form.personalData;
export const selectCreditCardData = (state) => state.form.creditCardData;
export default formDataSlice.reducer;