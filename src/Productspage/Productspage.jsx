import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Slider from '@mui/material/Slider';
import {CartDetailsproduct} from './CardDetailsproduct'
import { Link } from 'react-router-dom';
import { useContext ,useState, useMemo} from "react";
import { CartContext } from "../Context/Productscontext";
import Checkbox from '@mui/material/Checkbox';
export default function Productspage() {
    const {state} = useContext(CartContext)
    const [value, setValue] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOption, setSortOption] = useState('newest');
    const [showSortMenu, setShowSortMenu] = useState(false);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [priceRange, setPriceRange] = useState([0, 2500]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

    // Get unique categories from products
    const categories = [...new Set(state.map(product => product.category))];

    // Handle category checkbox change
    const handleCategoryChange = (category) => {
        setSelectedCategories(prev =>
            prev.includes(category)
                ? prev.filter(c => c !== category)
                : [...prev, category]
        );
        setCurrentPage(1); // Reset to first page on filter change
    };

    // Handle price range change
    const handlePriceChange = (event, newValue) => {
        setPriceRange(newValue);
        setCurrentPage(1); // Reset to first page on filter change
    };

    // Filter and sort products
    const filteredProducts = useMemo(() => {
        let filtered = state.filter(product => {
            // Search filter
            const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
            
            // Category filter
            const matchesCategory = selectedCategories.length === 0 || 
                selectedCategories.includes(product.category);
            
            // Price filter
            const productPrice = parseInt(product.price);
            const matchesPrice = productPrice >= priceRange[0] && productPrice <= priceRange[1];
            
            // Rating filter - if value is null, show all products
            const matchesRating = value === null || product.Rate === value;

            return matchesSearch && matchesCategory && matchesPrice && matchesRating;
        });

        // Sort products
        switch(sortOption) {
            case 'price-low':
                return filtered.sort((a, b) => parseInt(a.price) - parseInt(b.price));
            case 'price-high':
                return filtered.sort((a, b) => parseInt(b.price) - parseInt(a.price));
            case 'name-asc':
                return filtered.sort((a, b) => a.name.localeCompare(b.name));
            case 'name-desc':
                return filtered.sort((a, b) => b.name.localeCompare(a.name));
            case 'newest':
            default:
                return filtered;
        }
    }, [state, searchTerm, sortOption, selectedCategories, priceRange, value]);

    // Calculate pagination
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

    // Handle page navigation
    const handlePreviousPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    return (
        <main className="max-w-7xl mx-auto px-6 py-14" style={{ backgroundColor: '#0D0D0D', minHeight: '100vh' }}>
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="flex-1">
            <h1 className="text-5xl font-bold mb-3" style={{ color: '#F0ECE4', fontFamily: "'Playfair Display', serif" }}>
                All Products
            </h1>
            <p className="max-w-2xl leading-relaxed" style={{ color: 'rgba(240,236,228,0.6)' }}>
                Discover premium modern essentials crafted with elegance and precision.
            </p>
            </div>
            {/* <div className="mb-8 relative">
            <span className='fa-solid fa-search absolute left-2 top-1/2 -translate-y-1/2' style={{ color: 'rgba(200,168,130,0.4)' }}></span>
            <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1); // Reset to first page on search
                }}
                className="w-full px-6 pl-8 py-3 rounded-xl focus:outline-none transition"
                style={{ borderColor: 'rgba(200,168,130,0.2)', border: '1px solid', backgroundColor: 'rgba(13,13,13,0.5)', color: '#F0ECE4' }}
            />
            </div> */}
            <div className="hidden md:flex items-center px-4 py-2 rounded-full border" style={{ borderColor: 'rgba(200,168,130,0.2)', backgroundColor: 'rgba(13,13,13,0.5)' }}>
                                    <span className="fa-solid fa-search" style={{ color: 'rgba(240,236,228,0.4)' }}></span>
                                    <input
                                    type="text"
                                    placeholder="Search products..."
                                    value={searchTerm}
                                    onChange={(e) => {
                                        setSearchTerm(e.target.value);
                                        setCurrentPage(1); // Reset to first page on search
                                    }}
                                    className="bg-transparent border-none outline-none ml-2 w-48 text-sm"
                                    style={{ color: 'rgba(240,236,228,0.7)' }}
                                    />
            </div>
        </header>
        <div className="flex flex-col lg:flex-row gap-10">
        
            <aside className="w-full lg:w-72 space-y-10">
            <div>
                <h3 className="text-sm font-bold uppercase tracking-widest mb-5" style={{ color: '#C8A882' }}>
                Categories
                </h3>
                <div className="space-y-4" style={{ color: 'rgba(240,236,228,0.6)' }}>
                {categories.map((category, i) => (
                    <label
                    key={i}
                    className="flex items-center gap-3 cursor-pointer transition"
                    style={{ color: 'rgba(240,236,228,0.6)' }}
                    >
                    <input
                        type="checkbox"
                        className="w-4 h-4"
                        style={{ accentColor: '#C8A882' }}
                        checked={selectedCategories.includes(category)}
                        onChange={() => handleCategoryChange(category)}
                    />
                    {category}
                    </label>
                ))}
                </div>
            </div>
            {/* PRICE */}
            <div>
                <h3 className="text-sm font-bold uppercase tracking-widest mb-5" style={{ color: '#C8A882' }}>
                Price Range
                </h3>
                <div className="space-y-3">
                <Box sx={{ width: 200 }}>
                    <Slider
                        value={priceRange}
                        onChange={handlePriceChange}
                        valueLabelDisplay="auto"
                        min={0}
                        max={2500}
                            sx={{
                            color: '#C8A882',
                            '& .MuiSlider-thumb': { backgroundColor: '#C8A882' },
                            '& .MuiSlider-track': { backgroundColor: '#C8A882' },
                            }}
                    />
                    <div className="flex justify-between text-sm" style={{ color: 'rgba(240,236,228,0.5)' }}>
                        <span>${priceRange[0]}</span>
                        <span>${priceRange[1]}</span>
                    </div>
                </Box>
                </div>
            </div>
            {/* RATING */}
            <div>
                <h3 className="text-sm font-bold uppercase tracking-widest mb-5" style={{ color: '#C8A882' }}>
                Rating
                </h3>
                <Box sx={{ '& > legend': { mt: 2 } }}>
                <Rating
                    name="simple-controlled "
                    value={value}
                    onChange={(event, newValue) => {
                    setValue(newValue);
                    setCurrentPage(1);
                    }}
                    sx={{
                    color: "#C8A882",
                    "& .MuiRating-iconEmpty": {
                    color: "#ccc", 
                    },
                }}
                />
                </Box>
            </div>
            </aside>
            {/* PRODUCTS */}
            <section className="flex-1">
            {/* SORT DROPDOWN */}
            <div className="mb-8 relative">
                <button 
                    onClick={() => setShowSortMenu(!showSortMenu)}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl transition"
                    style={{ borderColor: 'rgba(200,168,130,0.2)', border: '1px solid', backgroundColor: 'rgba(13,13,13,0.5)', color: '#F0ECE4' }}
                >
                    <span className="font-medium">
                        {sortOption === 'newest' && 'Newest Arrivals'}
                        {sortOption === 'price-low' && 'Price: Low to High'}
                        {sortOption === 'price-high' && 'Price: High to Low'}
                        {sortOption === 'name-asc' && 'Name: A to Z'}
                        {sortOption === 'name-desc' && 'Name: Z to A'}
                    </span>
                    <span className={`transition ${showSortMenu ? 'rotate-180' : ''}`} style={{ color: 'rgba(240,236,228,0.4)' }}>
                        ↓
                    </span>
                </button>
                {showSortMenu && (
                    <div className="absolute top-full left-0 mt-2 w-56 rounded-xl shadow-lg z-10" style={{ backgroundColor: '#1a1a1a', borderColor: 'rgba(200,168,130,0.2)', border: '1px solid' }}>
                        <button
                            onClick={() => { setSortOption('newest'); setShowSortMenu(false); setCurrentPage(1); }}
                            className={`w-full text-left px-6 py-3 transition`}
                            style={{ color: sortOption === 'newest' ? '#C8A882' : 'rgba(240,236,228,0.6)', backgroundColor: sortOption === 'newest' ? 'rgba(200,168,130,0.1)' : 'transparent' }}
                        >
                            Newest Arrivals
                        </button>
                        <button
                            onClick={() => { setSortOption('price-low'); setShowSortMenu(false); setCurrentPage(1); }}
                            className={`w-full text-left px-6 py-3 transition`}
                            style={{ color: sortOption === 'price-low' ? '#C8A882' : 'rgba(240,236,228,0.6)', backgroundColor: sortOption === 'price-low' ? 'rgba(200,168,130,0.1)' : 'transparent' }}
                        >
                            Price: Low to High
                        </button>
                        <button
                            onClick={() => { setSortOption('price-high'); setShowSortMenu(false); setCurrentPage(1); }}
                            className={`w-full text-left px-6 py-3 transition`}
                            style={{ color: sortOption === 'price-high' ? '#C8A882' : 'rgba(240,236,228,0.6)', backgroundColor: sortOption === 'price-high' ? 'rgba(200,168,130,0.1)' : 'transparent' }}
                        >
                            Price: High to Low
                        </button>
                    </div>
                )}
            </div>

            {/* PRODUCTS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {paginatedProducts
                .map((product) => {
                    const actualIndex = state.indexOf(product);
                    return (
                        <Link key={actualIndex} to={`/product/${actualIndex + 1}`}>
                        <CartDetailsproduct index={actualIndex} product={product} />
                        </Link>
                    );
                })
                }
            </div>

            {filteredProducts.length === 0 && (
                <div className="text-center py-16">
                    <p className="text-lg" style={{ color: 'rgba(240,236,228,0.5)' }}>No products found matching your search.</p>
                </div>
            )}
            {filteredProducts.length > 0 && (
            <div className="mt-16 flex justify-center gap-4 flex-wrap">

                <button 
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                    className="w-12 h-12 rounded-full transition disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ borderColor: 'rgba(200,168,130,0.2)', border: '1px solid', color: '#F0ECE4' }}
                >
                ←
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNumber => (
                    <button 
                        key={pageNumber}
                        onClick={() => handlePageClick(pageNumber)}
                        className={`w-12 h-12 rounded-full font-bold transition`}
                        style={{
                            backgroundColor: currentPage === pageNumber ? '#C8A882' : 'transparent',
                            color: currentPage === pageNumber ? '#0D0D0D' : '#F0ECE4',
                            borderColor: 'rgba(200,168,130,0.2)',
                            border: currentPage === pageNumber ? '1px solid #C8A882' : '1px solid'
                        }}
                    >
                        {pageNumber}
                    </button>
                ))}
                <button 
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className="w-12 h-12 rounded-full transition disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ borderColor: 'rgba(200,168,130,0.2)', border: '1px solid', color: '#F0ECE4' }}
                >
                →
                </button>

            </div>
            )}

            </section>

        </div>

        </main>
    );
}