import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ContractState {
  contractDetails: any | null;
}

const initialState: ContractState = {
  contractDetails: null,
};

const contractSlice = createSlice({
  name: "contract",
  initialState,
  reducers: {
    setContractDetails: (state, action: PayloadAction<any>) => {
      state.contractDetails = action.payload;
    },
  },
});

export const { setContractDetails } = contractSlice.actions;
export default contractSlice.reducer;
