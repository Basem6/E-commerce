import React, { useState, useEffect } from 'react';
export function HeroSlider() {
        const FEATURED = [
  {
    id: 1,
    brand: "Apple",
    name: "Apple Watch Series 8",
    price: 149,
    tag: "New Drop",
    image: "https://images.unsplash.com/photo-1487215078519-e21cc028cb29",
    color: "#C8A882",
  },
  {
    id: 2,
    brand: "Adidas",
    name: "Samba OG 911 ",
    price: 110,
    tag: "Best Seller",
    image: "https://media.istockphoto.com/photos/image-of-black-leather-classic-shoes-picture-id1409339182?k=20&m=1409339182&s=612x612&w=0&h=9Ax5AQJR2f3eNuiZbOmXFguI_SJV7qDLWjGznQTO2MM=",
    color: "#8FA8C8",
  },
  {
    id: 3,
    brand: "New Balance",
    name: "Head Phones Classic",
    price: 185,
    tag: "Limited",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDp0R08gCPSKSBaH7q3p5fQLwJ88blfZvqQHdboWJhHRwsSiRlYbNRUFBrKKuGW_BVyScD8SUkaii-ViiiY93qhVR-dG86DU8K3HubekbAzvgM8UUwoNeiaTaT5uq0XU6ZBfgsVDz27JEGTNZn9w7yz8M9lWHGvclag1lTv8B00KWuGvchJ0f4ukqwYTZFUPIGIjub5DOeSqk5mtZ5ZuOJefFAt2NlKH6PU3LrwSELMDcZWaMxtQiwwvUtSdOpWujtrd-RHClCwf6Y",
    color: "#A8C89A",
  },
        ];
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
                <img src={p.image} alt={p.name} style={{ maxWidth: "100%", maxHeight: "100%", minHeight: "100%", minWidth: "100%", borderRadius: 8, objectFit: "cover" }} />
                </div>
            </div>
            <p style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#F0ECE4", marginBottom: "1.5rem" }} className='mt-4'>
            SS 2026 · New Arrivals
            </p>
            <div style={{ display: "flex", gap: 14 }} className='flex-wrap '>
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