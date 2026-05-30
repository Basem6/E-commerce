import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from "../Context/Productscontext";
import { useContext } from "react";
export function HeroSlider() {
    const {state} = useContext(CartContext)
    const FEATURED=state.filter((item)=>{
        return item.isfetured==true
    })
    const [active, setActive] = useState(0);
    useEffect(() => {
        const t = setInterval(() => setActive(a => (a + 1) % FEATURED.length), 4000);
        return () => clearInterval(t);
    }, []);

    const p = FEATURED[active];
    return (
        <section className='min-h-full bg-black flex items-center flex-wrap gap-3 w-full overflow-x-hidden'>
        <div className="min-w-full w-full"  style={{ padding: "4rem 3rem", display: "flex", flexDirection: "column", justifyContent: "center", position: "relative" }}>
            <div className='flex justify-between   min-w-full flex-wrap gap-3'>
                <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 64, fontWeight: 700, lineHeight: 1.05,
            marginBottom: "1rem", transition: "opacity 0.4s",
            }}>
            {p.name.split(" ").map((w, i) => (
                <span key={i} style={{ display: "block", color: i === 0 ? "#F0ECE4" : p.color }}>{w}</span>
            ))}
                </h1>
                <div className='size-90  rounded-lg overflow-hidden'>
                <img src={p.img} alt={p.name} style={{ maxWidth: "100%", maxHeight: "100%", minHeight: "100%", minWidth: "100%", borderRadius: 8, objectFit: "cover" }} />
                </div>
            </div>
            <p style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#F0ECE4", marginBottom: "1.5rem" }} className='mt-4'>
            SS 2026 · New Arrivals
            </p>
            <div style={{ display: "flex", gap: 14 }} className='flex-wrap '>
            <Link to={`/product/${state.indexOf(p)+1}`}>
            <button style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 13, fontWeight: 500,
                letterSpacing: "0.08em", textTransform: "uppercase",
                padding: "14px 36px", borderRadius: 4,
                background: "#F0ECE4", color: "#0D0D0D",
                border: "none", cursor: "pointer",
            }}>
                Shop now
            </button>
            </Link>
            <Link to={"/shop"}>
            <button style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 13, fontWeight: 400,
                letterSpacing: "0.08em", textTransform: "uppercase",
                padding: "14px 28px", borderRadius: 4,
                background: "transparent", color: "rgba(240,236,228,0.6)",
                border: "0.5px solid rgba(240,236,228,0.2)", cursor: "pointer",
            }}>
                View all
            </button>
            </Link>
            </div>
            <div style={{ display: "flex", gap: 8, position: "absolute", bottom: "3rem", left: "3rem" }} className='flex-wrap '>
            {FEATURED.map((_, i) => (
                <button key={i} onClick={() => setActive(i)} style={{
                width: i === active ? 28 : 8, height: 8, borderRadius: 4,
                background: i === active ? "#C8A882" : "rgba(240,236,228,0.2)",
                border: "none", cursor: "pointer",
                transition: "width 0.3s, background 0.3s",
                padding: 0,
                }} />
            ))}
            </div>
        </div>
        </section>
    );
    }