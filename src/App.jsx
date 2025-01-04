import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import CategoryFilter from './components/CategoryFilter';

function App() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Product Catalog</h1>
      <ProductForm />
      <h2 className="text-1xl font-bold mb-4">Product List</h2>
      <CategoryFilter />
      <ProductList />
    </div >
  );
}

export default App;