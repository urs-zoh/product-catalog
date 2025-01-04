import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct, updateProduct } from '../redux/slices/productsSlice';
import { v4 as uuidv4 } from 'uuid';

const categories = ["Electronics", "Clothing", "Groceries"]; // Predefined categories

const ProductForm = ({ product, onClose }) => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState(
        product || { id: '', name: '', category: '', price: '', description: '' }
    );

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.id) {
            dispatch(updateProduct(formData));
        } else {
            dispatch(addProduct({ ...formData, id: uuidv4() }));
        }
        onClose();
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block text-sm font-medium">Name</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border p-2 rounded"
                />
            </div>

            <div>
                <label className="block text-sm font-medium">Category</label>
                <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border p-2 rounded"
                >
                    <option value="">Select a category</option>
                    {categories.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <label className="block text-sm font-medium">Price</label>
                <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border p-2 rounded"
                />
            </div>

            <div>
                <label className="block text-sm font-medium">Description</label>
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border p-2 rounded"
                ></textarea>
            </div>

            <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
                {product ? 'Update Product' : 'Add Product'}
            </button>
        </form>
    );
};

export default ProductForm;