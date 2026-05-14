import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import {CartDetailsproduct} from './CardDetailsproduct'
import { Link } from 'react-router-dom';
import { useContext ,useState} from "react";
import { CartContext } from "../Context/Productscontext";
export default function Productspage() {
    const {state} = useContext(CartContext)
    const [value, setValue] = useState(2);
    console.log(value)
    return (
        <main className="max-w-7xl mx-auto px-6 py-14">
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-3">
                All Products
            </h1>
            <p className="text-gray-500 max-w-2xl leading-relaxed">
                Discover premium modern essentials crafted with elegance and precision.
            </p>
            </div>
            <button className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-xl hover:border-black transition bg-white">
            <span className="font-medium text-gray-700">
                Newest Arrivals
            </span>
            <span className="text-gray-500">
                ↓
            </span>
            </button>
        </header>
        <div className="flex flex-col lg:flex-row gap-10">
        
            <aside className="w-full lg:w-72 space-y-10">
            <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-5">
                Categories
                </h3>
                <div className="space-y-4 text-gray-600">
                {[
                    "Aesthetics & Decor",
                    "Tech Accessories",
                    "Home Office",
                    "Lifestyle Essentials",
                ].map((item, i) => (
                    <label
                    key={i}
                    className="flex items-center gap-3 cursor-pointer hover:text-black transition"
                    >
                    <input
                        type="checkbox"
                        className="w-4 h-4 accent-black"
                    />
                    {item}
                    </label>
                ))}
                </div>
            </div>
            {/* PRICE */}
            <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-5">
                Price Range
                </h3>
                <div className="space-y-3">
                <Box sx={{ width: 200 }}>
                    <Slider
                        aria-label="Temperature"
                        defaultValue={20}
                        color="black"
                    />
                    <div className="flex justify-between text-sm text-gray-500">
                        <span>$0</span>
                        <span>$2500+</span>
                    </div>
                </Box>
                </div>
            </div>
            <Box sx={{ '& > legend': { mt: 2 } }}>
                <Typography component="legend">Rating</Typography>
                <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                    setValue(newValue);
                    }}
                />
            </Box>
            </aside>
            {/* PRODUCTS */}
            <section className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

                {state.map((product, index) => (
                    <Link key={index+1} to={`/product/${index+1}`} key={index+1}>
                        < CartDetailsproduct index={index} product={product} />
                    </Link>
                ))}
            </div>
            {/* PAGINATION */}
            <div className="mt-16 flex justify-center gap-4">

                <button className="w-12 h-12 rounded-full border border-gray-300 hover:border-black transition">
                ←
                </button>

                <button className="w-12 h-12 rounded-full bg-black text-white font-bold">
                1
                </button>

                <button className="w-12 h-12 rounded-full border border-gray-300 hover:border-black transition">
                2
                </button>

                <button className="w-12 h-12 rounded-full border border-gray-300 hover:border-black transition">
                3
                </button>

                <button className="w-12 h-12 rounded-full border border-gray-300 hover:border-black transition">
                →
                </button>

            </div>

            </section>

        </div>

        </main>
    );
}