import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ContractState {
  contractDetailsDB: any | null;
}

const initialState: ContractState = {
  contractDetailsDB: null,
};

const contractSlice = createSlice({
  name: "contract",
  initialState,
  reducers: {
    setContractDetailsDB: (state, action: PayloadAction<any>) => {
      state.contractDetailsDB = action.payload;
    },
  },
});

export const { setContractDetailsDB } = contractSlice.actions;
export default contractSlice.reducer;
