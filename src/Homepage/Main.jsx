// GSAP
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";   
import { useGSAP } from "@gsap/react";
import Card from "../Components/Card";
import { HeroSlider } from "../Components/Fetured";
import { Marquee } from "../Components/Aboutpage";
gsap.registerPlugin(SplitText,ScrollTrigger,ScrollSmoother);
export default function Main() {
    useGSAP(() => {

    const mm = gsap.matchMedia();

    // Desktop only
    mm.add("(min-width: 768px)", () => {

        const slides = gsap.utils.toArray(".slide");

        gsap.from(".anmation", {
            scrollTrigger: {
                trigger: "#horizontall",
                start: "2% 40%",
            },
            backgroundColor: "black",
            y: -40,
            duration: 0.5,
            scale: 0.4,
        });

        gsap.to(slides, {
            xPercent: -100 * (slides.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: "#horizontall",
                pin: true,
                start: "top top",
                scrub: 1,
                end: "+=5000",
                invalidateOnRefresh: true,
            },
        });

    });

    // Mobile
    mm.add("(max-width: 767px)", () => {

        // reset any transforms
        gsap.set(".slide", {
            clearProps: "all",
        });

    });

    return () => {
        mm.revert();
    };

}, []);
    return (
            <section className="relative min-h-screen bg-black">
                <div className="min-h-screen"><HeroSlider></HeroSlider></div>
                <div id="horizontall" className="">
                        <div className="anmation relative overflow-hidden bg-transparent min-w-full min-h-screen rounded-t-lg shadow-lg shadow-gray-900/25 flex flex-col md:flex-row">
                        <div className="part1 min-w-full slide ">
                            <section className="min-h-full bg-black flex items-center justify-center  flex-wrap flex-col lg:flex-row">
                                <div style={{ position: "relative", padding: "3rem 4rem" }}>
                                    <p style={{ fontSize: 17, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C8A882", marginBottom: "1rem" }}>Limited time offer</p>
                                    <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 52, fontWeight: 700, color: "#F0ECE4", lineHeight: 1.1, marginBottom: "1.5rem" }}>
                                    Up to 40% off<br /><em style={{ fontStyle: "italic", color: "rgba(240,236,228,0.6)" }}>selected styles.</em>
                                    </h2>
                                    <button style={{
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontSize: 15, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase",
                                    padding: "13px 34px", borderRadius: 4,
                                    background: "#C8A882", color: "#0D0D0D",
                                    border: "none", cursor: "pointer",
                                    }}>
                                    Shop the sale
                                    </button>
                                </div>
                            </section>
                        </div>
                        <div className="part2 min-w-full slide ">
                            <div style={{ minHeight: "100%", borderBottom: "0.5px solid #e5e5e5" }} className="lg:grid grid-cols-2 ">
                                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", background: "#f3f0ea"}} className="p-9 min-w-full">
                                <p style={{ fontSize: 18, letterSpacing: "0.18em", textTransform: "uppercase", color: "#999", marginBottom: "1rem" }}>
                                    New Collection · SS 2026
                                </p>
                                <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 55, fontWeight: 700, lineHeight: 1.1, marginBottom: "1rem" }}>
                                    Every step,<br />
                                    <em style={{ fontStyle: "italic", color: "#888" }}>a statement.</em>
                                </h1>
                                <p style={{ fontSize: 19, color: "#666", lineHeight: 1.7, maxWidth: 300 }}>
                                    Curated footwear for every occasion — from the streets to the summit.
                                </p>
                                </div>
                                <div  className="hidden lg:flex lg:justify-center overflow-hidden relative items-center bg-[#e8e4dc]">
                                <span className="fa-solid fa-shop text-7xl text-gray-black/70"></span>
                                <span style={{
                                    position: "absolute", bottom: "1.5rem", right: "1.5rem",
                                    fontSize: 12, color: "#fff", background: "rgba(0,0,0,0.45)",
                                    padding: "6px 14px", borderRadius: 20, backdropFilter: "blur(4px)",
                                    uppercase: "uppercase", letterSpacing: "0.1em",margin: 3,
                                
                                }}>
                                    124 styles available
                                </span>
                                </div>
                            </div>
                        </div> 
                        <div className="part3 min-w-full slide">
                            <section 
                                className="min-h-full bg-black flex items-center justify-center  flex-wrap flex-col-reverse lg:flex-row lg:justify-between lg:p-7 py-5">
                                <div style={{ position: "relative", padding: "3rem 4rem" }}>
                                    <p style={{ fontSize: 17, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C8A882", marginBottom: "1rem" }}>Limited time offer</p>
                                    <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 52, fontWeight: 700, color: "#F0ECE4", lineHeight: 1.1, marginBottom: "1.5rem" }}>
                                    Up to 40% off<br /><em style={{ fontStyle: "italic", color: "rgba(240,236,228,0.6)" }}>selected styles.</em>
                                    </h2>
                                    <button style={{
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontSize: 15, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase",
                                    padding: "13px 34px", borderRadius: 4,
                                    background: "#C8A882", color: "#0D0D0D",
                                    border: "none", cursor: "pointer",
                                    }}>
                                    Shop the sale
                                    </button>
                                </div>
                                <div>
                                    <Card></Card>
                                </div>
                            </section>
                        </div>  
                    </div>
                </div>
                <div className="bg-black border-t-orange-50">
                <Marquee text="Handcrafted Footwear · Cairo · Est. 2012 · Walk Further" speed={35} />
                </div>
                <section style={{ padding: "6rem 3.5rem", borderBottom: "0.5px solid rgba(255,255,255,0.08)", position: "relative" }} className="bg-black">
                        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
                            <p style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "#C8A882", marginBottom: "2rem" }}>
                            Manifesto
                            </p>
                            <p style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: 36, fontWeight: 400,
                            color: "#F0ECE4", lineHeight: 1.5,
                            marginBottom: "2.5rem",
                            }}>
                            "We make shoes for <em style={{ color: "#C8A882" }}>people who notice</em> — the weight of a sole, the grain of the leather, the way a heel sits."
                            </p>
                            <p style={{ fontSize: 14, color: "rgba(240,236,228,0.4)", letterSpacing: "0.08em" }}>
                            — Layla Hassan, Founder
                            </p>
                        </div>
                </section>
            </section>
    );
}