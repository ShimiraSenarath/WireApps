import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'https://fakestoreapi.com';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await fetch(`${API_URL}/products`);
    return await response.json();
});

export const fetchProductById = createAsyncThunk('products/fetchProductById', async (id) => {
    const response = await fetch(`${API_URL}/products/${id}`);
    return await response.json();
});

export const fetchLimitedProductsThunk = createAsyncThunk('products/fetchLimitedProducts', async (limit) => {
    const response = await fetch(`${API_URL}/products?limit=${limit}`);
    return await response.json();
});

export const fetchSortedProductsThunk = createAsyncThunk('products/fetchSortedProducts', async (sortOrder) => {
    const response = await fetch(`${API_URL}/products?sort=${sortOrder}`);
    return await response.json();
});

export const fetchProductsByCategoryThunk = createAsyncThunk('products/fetchProductsByCategory', async (category) => {
    const response = await fetch(`${API_URL}/products/category/${category}`);
    return await response.json();
});

export const fetchCategoriesThunk = createAsyncThunk('products/fetchCategories', async () => {
    const response = await fetch(`${API_URL}/products/categories`);
    return await response.json();
});

const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        categories: [],
        selectedProduct: null,
        loading: false,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(fetchProductById.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchProductById.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedProduct = action.payload;
            })
            .addCase(fetchLimitedProductsThunk.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchLimitedProductsThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(fetchSortedProductsThunk.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchSortedProductsThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(fetchProductsByCategoryThunk.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchProductsByCategoryThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(fetchCategoriesThunk.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchCategoriesThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.categories = action.payload;
            });
    },
});

export const selectProducts = (state) => state.products.products;
export const selectCategories = (state) => state.products.categories;
export const selectLoading = (state) => state.products.loading;

export default productSlice.reducer;
