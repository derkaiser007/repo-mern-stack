import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'

//create action
export const createInfo = createAsyncThunk(
    "createInfo",
    async (data, { rejectWithValue }) => {
      console.log("data", data);
      const response = await fetch(
        "http://localhost:5555/info",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
  
      try {
        const result = await response.json();
        return result;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
);

//read action
export const homeInfo = createAsyncThunk(
    "homeInfo",
    async (info, { rejectWithValue }) => {
      const response = await fetch(
        `http://localhost:5555/info`
      );
  
      try {
        const result = await response.json();
        console.log(result);
        return result;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
);

//read action
export const showInfo = createAsyncThunk(
    "showInfo",
    async (id, { rejectWithValue }) => {
      const response = await fetch(
        `http://localhost:5555/info/${id}`
      );
  
      try {
        const result = await response.json();
        console.log(result);
        return result;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
);

//delete action
export const deleteInfo = createAsyncThunk(
    "deleteInfo",
    async (id, { rejectWithValue }) => {
      const response = await fetch(
        `http://localhost:5555/info/${id}`,
        { method: "DELETE" }
      );
  
      try {
        const result = await response.json();
        console.log(result);
        return result;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );

//update action
export const updateInfo = createAsyncThunk(
  "updateInfo",
  async (data, { rejectWithValue }) => {
    console.log("data", data);
    const response = await fetch(
      `http://localhost:5555/info/${data.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

  export const infoDetail = createSlice({
    name: "info",
    initialState: {
      info: {
        count: 0,
        data: [],
      },
      loading: false,
      error: null,
    },     
    extraReducers: (builder) => {
        builder
        .addCase(createInfo.pending, (state) => {
            state.loading = true;
        })
        .addCase(createInfo.fulfilled, (state, action) => {
            state.loading = false;
            state.info.data.push(action.payload);
        })
        .addCase(createInfo.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        })
        .addCase(deleteInfo.pending, (state) => {
            state.loading = true;
        })
        .addCase(deleteInfo.fulfilled, (state, action) => {
            state.loading = false;
            const { id } = action.payload;
            if (id) {
                state.info = state.info.filter((ele) => ele.id !== id);
            }
        })
        .addCase(deleteInfo.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(homeInfo.pending, (state) => {
            state.loading = true;
        })
        .addCase(homeInfo.fulfilled, (state, action) => {
            state.loading = false;
            state.info = action.payload;
        })
        .addCase(homeInfo.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(showInfo.pending, (state) => {
            state.loading = true;
        })
        .addCase(showInfo.fulfilled, (state, action) => {
            state.loading = false;
            const { id } = action.payload;
            if (id) {
                state.info = action.payload
            }
        })
        .addCase(showInfo.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(updateInfo.pending, (state) => {
          state.loading = true;
        })
        .addCase(updateInfo.fulfilled, (state, action) => {
          state.loading = false;
          state.info = state.info.data.map((ele) =>
          ele.id === action.payload.id ? action.payload : ele
          );
        })
        .addCase(updateInfo.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })
    }
  })

  export default infoDetail.reducer