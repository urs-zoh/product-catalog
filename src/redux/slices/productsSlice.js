import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [
        {
            id: '1',
            name: 'Laptop',
            category: 'Electronics',
            price: 1200,
            description: 'A high-performance laptop for gaming and work.'
        },
        {
            id: '2',
            name: 'T-Shirt',
            category: 'Clothing',
            price: 25,
            description: 'Comfortable cotton t-shirt in various sizes.'
        },
        {
            id: '3',
            name: 'Apples',
            category: 'Groceries',
            price: 5,
            description: 'Fresh red apples from local farms.'
        },
        {
            id: '4',
            name: 'Smartphone',
            category: 'Electronics',
            price: 900,
            description: 'Latest smartphone with advanced features.'
        },
        {
            id: '5',
            name: 'Jeans',
            category: 'Clothing',
            price: 50,
            description: 'Stylish blue jeans for casual wear.'
        },
        {
            id: '6',
            name: 'Milk',
            category: 'Groceries',
            price: 2,
            description: 'Organic whole milk, 1 liter.'
        },
        {
            id: '7',
            name: 'Headphones',
            category: 'Electronics',
            price: 150,
            description: 'Noise-canceling over-ear headphones.'
        },
        {
            id: '8',
            name: 'Jacket',
            category: 'Clothing',
            price: 100,
            description: 'Warm winter jacket with hood.'
        },
        {
            id: '9',
            name: 'Bread',
            category: 'Groceries',
            price: 3,
            description: 'Freshly baked whole-grain bread.'
        },
        {
            id: '10',
            name: 'Tablet',
            category: 'Electronics',
            price: 700,
            description: 'Lightweight tablet with high-resolution display.'
        },
        {
            id: '11',
            name: 'Sneakers',
            category: 'Clothing',
            price: 80,
            description: 'Comfortable running sneakers for daily use.'
        },
        {
            id: '12',
            name: 'Bananas',
            category: 'Groceries',
            price: 4,
            description: 'Organic bananas, rich in potassium.'
        }
    ],
    categoryFilter: 'All'
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload);
        },
        updateProduct: (state, action) => {
            const index = state.products.findIndex((p) => p.id === action.payload.id);
            if (index !== -1) {
                state.products[index] = action.payload;
            }
        },
        deleteProduct: (state, action) => {
            state.products = state.products.filter((p) => p.id !== action.payload);
        },
        setCategoryFilter: (state, action) => {
            state.categoryFilter = action.payload;
        }
    }
});

export const { addProduct, updateProduct, deleteProduct, setCategoryFilter } = productsSlice.actions;

export default productsSlice.reducer;