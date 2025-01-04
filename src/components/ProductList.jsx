import { useSelector } from 'react-redux';

function ProductList() {
    const { products, categoryFilter } = useSelector(state => state.products);

    const filteredProducts = categoryFilter === 'All'
        ? products
        : products.filter(p => p.category === categoryFilter);

    return (
        <div>
            {filteredProducts.map(product => (
                <div key={product.id} className="border p-4 mb-6 rounded">
                    <h2 className="text-lg font-semibold">{product.name}</h2>
                    <p className="text-sm text-gray-500">{product.category}</p>
                    <p className="mt-2">{product.description}</p>
                    <p className="mt-4 font-bold">${product.price}</p>
                </div>
            ))}
        </div>
    );
}

export default ProductList;