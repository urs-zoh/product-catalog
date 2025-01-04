import { useDispatch } from 'react-redux';
import { setCategoryFilter } from '../redux/slices/productsSlice';

function CategoryFilter() {
    const dispatch = useDispatch();

    const handleChange = (e) => {
        dispatch(setCategoryFilter(e.target.value));
    };

    return (
        <select onChange={handleChange}>
            <option value="All">All</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Groceries">Groceries</option>
        </select>
    );
}

export default CategoryFilter;