import { NavLink } from "react-router-dom";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { FilledMarquee } from "./Components/Aboutpage";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
export default function Navbar() {
    const nav=useRef()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    useGSAP(()=>{
        gsap.to(nav.current,{
            scrollTrigger:{
                start:"top top",
                scrub:1,
                end:"10px"
                
            },
            top:0,
        })
    })
    return (
        <>
        {
        <div className='max-h-9 min-h-9 flex items-center '>
        <FilledMarquee text="Free shipping on orders over $150 · Handmade in Egypt · 30-day returns · Lifetime resoling" speed={38} />
        </div>}
        <nav className="fixed min-w-full top-9  z-50 border-b shadow-sm " style={{ backgroundColor: '#0D0D0D', borderColor: 'rgba(200,168,130,0.1)' }} ref={nav}>
            <div className="flex justify-between items-center w-full  py-2 px-4 md:px-8">
                    <div className="text-xl font-bold tracking-tight min-w-1/3" style={{ color: '#C8A882', fontFamily: "'Playfair Display', serif" }}>
                            LUXE
                    </div>
                    <div className="hidden md:flex gap-14 items-center min-w-1">
                        <NavLink to={"/"} 
                        style={{ fontFamily: "'Playfair Display', serif", }}
                        className={({ isActive }) =>
                            isActive
                            ? "text-[#C8A882] pointer-events-none  link "
                            : "text-gray-200 hover:text-[#C8A882]   link"
                        }>
                        Home
                        </NavLink>
                        <NavLink to={'/Shop'}
                        className="link"
                        style={{ fontFamily: "'Playfair Display', serif", }}
                        className={({ isActive }) =>
                            isActive
                            ? "text-[#C8A882] pointer-events-none  link "
                            : "text-gray-200 hover:text-[#C8A882]  link"
                        }> 
                        Shop
                        </NavLink>
                        <NavLink to={"/About"}
                        className="link"
                        style={{ fontFamily: "'Playfair Display', serif", }}
                        className={({ isActive }) =>
                            isActive
                            ? "text-[#C8A882] pointer-events-none  link "
                            : "text-gray-200 hover:text-[#C8A882]   link"
                        }>
                        About
                        </NavLink>
                    </div>
                    <div className="hidden md:flex gap-2 items-center min-w-1/3 justify-end">
                        <NavLink to={"/Wishlist"}>
                            {({ isActive }) => (
                                <button className="p-2 rounded-full transition mx-1" style={{ color: isActive ? '#C8A882' : 'rgba(240,236,228,0.6)', }}>
                                    <FavoriteBorderIcon></FavoriteBorderIcon>
                                </button>
                            )}
                        </NavLink>
                        <NavLink to={"/cart"} >
                            {({ isActive }) => (
                                <button className="p-2 rounded-full transition mx-1" style={{ color: isActive ? '#C8A882' : 'rgba(240,236,228,0.6)', }}>
                                    <LocalMallOutlinedIcon></LocalMallOutlinedIcon>
                                </button>
                            )}
                        </NavLink>
                        <NavLink to={"/login"} >
                        {({ isActive }) => (
                                <button className="p-2 rounded-full transition mx-1" style={{ color: isActive ? '#C8A882' : 'rgba(240,236,228,0.6)',}}>
                                    <Person2OutlinedIcon></Person2OutlinedIcon>
                                </button>
                            )}
                        </NavLink>
                    </div>
                    <div className="block md:hidden text-gray-300"><span className="fa-solid fa-bars"></span></div>
            </div>
        </nav>
        </>
    );
}