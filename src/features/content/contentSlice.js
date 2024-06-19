import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    items: [],
    status: 'idle',
    error: null,
    page: 1,
    hasMore: true,
};

export const fetchContent = createAsyncThunk('content/fetchContent', async (_, { getState }) => {
    const { page, hasMore } = getState().content;
    if (!hasMore) return;

    const response = await axios.get(`https://test.create.diagnal.com/data/page${page}.json`);
    return response.data;
});

const contentSlice = createSlice({
    name: 'content',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchContent?.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchContent?.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = [...state?.items, ...action?.payload?.page['content-items']?.content];
                state.page += 1;
                state.hasMore = action?.payload?.page['content-items']?.content?.length > 0;
            })
            .addCase(fetchContent.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default contentSlice.reducer;