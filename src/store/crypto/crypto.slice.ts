import { ICoin, ICrypto } from "./../../models/models";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { CryptoState } from "../../models/models";
import {
  BASE_URL_CRYPTO,
  BASE_URL_DESCRIPTION,
  URL_GET_COIN_BY_ID,
} from "../../utils/constants";
import { ICryptoById, ICryptoDescription } from "../../models/CryptoById";

const initialState: CryptoState = {
  crypto: [],
  topCrypto: [],
  description: null,
  cryptoById: null,
  isLoading: false,
  error: null,
};

type IParams = {
  limit: string;
  page: string;
};

export const getCrypto = createAsyncThunk<ICrypto[], IParams>(
  "crypto/getCrypto",
  async ({ limit, page }, thunkApi) => {
    try {
      const response = await axios.get(BASE_URL_CRYPTO, {
        params: {
          limit: limit,
          page: `${Number(page) - 1}`,
          api_key:
            "88e073e533f5b772f48be46be4479fcc104b5715d01afd8834e09007080d8ecf",
        },
      });
      return response.data.Data;
    } catch (e) {
      console.log(e);
      return thunkApi.rejectWithValue(e);
    }
  }
);

export const getTopCrypto = createAsyncThunk<ICrypto[], undefined>(
  "crypto/getTopCrypto",
  async (_, thunkApi) => {
    try {
      const response = await axios.get(BASE_URL_CRYPTO, {
        params: {
          limit: "4",
          page: `0`,
          api_key:
            "88e073e533f5b772f48be46be4479fcc104b5715d01afd8834e09007080d8ecf",
        },
      });
      return response.data.Data;
    } catch (e) {
      console.log(e);
      return thunkApi.rejectWithValue(e);
    }
  }
);
export const getCryptoDescription = createAsyncThunk<
  ICryptoDescription,
  string
>("crypto/getCryptoDescription", async (symbol, thunkApi) => {
  try {
    const response = await axios.get(BASE_URL_DESCRIPTION, {
      params: {
        fsym: symbol,
        api_key:
          "88e073e533f5b772f48be46be4479fcc104b5715d01afd8834e09007080d8ecf",
      },
    });

    return response.data.Data;
  } catch (e) {
    console.log(e);
    return thunkApi.rejectWithValue(e);
  }
});
export const getCryptoById = createAsyncThunk<ICryptoById, string>(
  "crypto/getCryptoById",
  async (symbol, thunkApi) => {
    try {
      const response = await axios.get(URL_GET_COIN_BY_ID, {
        params: {
          fsyms: symbol,
          api_key:
            "88e073e533f5b772f48be46be4479fcc104b5715d01afd8834e09007080d8ecf",
        },
      });

      return response.data;
    } catch (e) {
      console.log(e);
      return thunkApi.rejectWithValue(e);
    }
  }
);
const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCrypto.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCrypto.fulfilled, (state, action) => {
        state.crypto = action.payload;
        state.isLoading = false;
      })
      .addCase(getCrypto.rejected, (state) => {
        state.isLoading = false;
        state.error = "error";
      })
      .addCase(getTopCrypto.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getTopCrypto.fulfilled, (state, action) => {
        state.topCrypto = action.payload;
        state.isLoading = false;
      })
      .addCase(getTopCrypto.rejected, (state) => {
        state.isLoading = false;
        state.error = "error";
      })
      .addCase(getCryptoDescription.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCryptoDescription.fulfilled, (state, action) => {
        state.description = action.payload;
        state.isLoading = false;
      })
      .addCase(getCryptoDescription.rejected, (state) => {
        state.isLoading = false;
        state.error = "error";
      })
      .addCase(getCryptoById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCryptoById.fulfilled, (state, action) => {
        state.cryptoById = action.payload;
        state.isLoading = false;
      })
      .addCase(getCryptoById.rejected, (state) => {
        state.isLoading = false;
        state.error = "error";
      });
  },
});

export default cryptoSlice.reducer;
