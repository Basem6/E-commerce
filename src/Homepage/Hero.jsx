import { Link } from "react-router-dom";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useState } from "react";
// GSAP
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(SplitText,ScrollTrigger,ScrollSmoother);
export default function Hero() {
    const [showOverlay, setShowOverlay] = useState(() => {
    return !sessionStorage.getItem("hero-animation-done");
});
    const container = useRef();
    const titleheader= useRef();
    const texthero= useRef();
    const btnleft= useRef();
    const btnright= useRef();
    const loading= useRef(null);
    const container2= useRef(null);
    const left= useRef(null);
    const right= useRef(null);
    const main= useRef();
    useGSAP(() => {
    let splitText = SplitText.create(texthero.current, {
        type: "lines",
        mask: "lines"
    });
    const tl = gsap.timeline({
    onComplete: () => {
        setShowOverlay(false);
        sessionStorage.setItem("hero-animation-done", "true");
    }
});
    tl.from(loading.current, { width: "0%", duration: 1.5, ease: "power2.out" });
    tl.to(left.current, { transform: "translateX(-110%)", duration: 1.5, ease: "power2.inOut" });
    tl.to(right.current, { transform: "translateX(110%)", duration: 1.5, ease: "power2.inOut" }, "<");
    tl.to(container2.current, { opacity: 0, scale: 0.93, duration: 0.5, ease: "power2.out" }, "<");
    tl.from(container.current, { opacity: 0, scale: 0.93, y: 20, duration: 0.7, ease: "power2.out" });
    tl.from(texthero.current, { opacity: 0, y: 80, duration: 0.8, ease: "power2.out" });
    tl.from(splitText.lines, { y: 30, duration: 0.8, ease: "power2.out", stagger: 0.1, opacity: 0 }, "<");
    tl.from(btnleft.current, { opacity: 0, x: -100, duration: 1, ease: "power2.out" });
    tl.from(btnright.current, { opacity: 0, x: 100, duration: 1, ease: "power2.out" }, "<");
    tl.fromTo(titleheader.current, { width: "0px" }, { width: "100%", duration: 0.9, ease: "none" });
}, { scope: main, dependencies: [] });
    return (
        <main ref={main} className="w-full overflow-x-hidden">
        <section className="relative min-h-[650px] flex items-center justify-center overflow-hidden px-6 w-full max-w-full" style={{ backgroundColor: 'black' }}>
            <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px]" style={{ background: 'rgba(200,168,130,0.1)', willChange: 'transform' }}></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-[140px]" style={{ background: 'rgba(200,168,130,0.08)', willChange: 'transform' }}></div>
            </div>

            <div className="relative z-10 text-center max-w-4xl">

            <div className="inline-flex items-center gap-2 py-1 px-2 max-w-fit rounded-full mb-8 overflow-hidden whitespace-nowrap" ref={showOverlay ?titleheader:null} style={{ backgroundColor: 'rgba(200,168,130,0.1)', borderColor: 'rgba(200,168,130,0.3)', border: '1px solid' }}>
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#C8A882' }}></span>
                <span className="text-xs uppercase tracking-widest" style={{ color: '#C8A882' }}>
                Autumn Collection 2024
                </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6" ref={showOverlay?container:null} style={{ color: '#F0ECE4', fontFamily: "'Playfair Display', serif" }}>
                Redefining <span style={{ color: '#C8A882' }}>Excellence</span>
            </h1>

            <p className="text-lg max-w-2xl mx-auto mb-10 leading-relaxed" ref={showOverlay?texthero:null} style={{ color: 'rgba(240,236,228,0.6)' }}>
                Experience premium craftsmanship and modern design. Curated products built for everyday luxury.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to={"/Shop"} ref={showOverlay?btnleft:null}>
                <button className="px-10 py-4 cursor-pointer  rounded-lg transition" style={{ backgroundColor: '#C8A882', color: '#0D0D0D', fontWeight: 600 }}>
                Shop Now
                </button>
                </Link>
                <Link to={"/deals"} ref={showOverlay?btnright:null}>
                <button className="px-10 cursor-pointer py-4 rounded-lg transition" style={{ borderColor: '#C8A882', color: '#C8A882', border: '1px solid', backgroundColor: 'transparent' }}>
                Explore Deals
                </button>
                </Link>
            </div>
            </div>
        </section>  
        {showOverlay?
        <div 
        className="overlay fixed inset-0 pointer-events-none bg-transparent left-0 top-0 z-50 flex flex-col items-center justify-center gap-40 overflow-x-hidden overflow-y-hidden"
        style={{ display:"flex"}} 
        >
            <div className="left absolute inset-0 bg-black left-0 top-0 max-w-1/2 min-w-1/2 max-h-full min-h-full -z-50" ref={left} style={{ willChange: 'transform', backfaceVisibility: 'hidden' }}></div>
            <div className="right absolute inset-0 bg-black left-1/2 top-0 max-w-1/2 min-w-1/2 max-h-full min-h-full -z-50" ref={right} style={{ willChange: 'transform', backfaceVisibility: 'hidden' }}></div>
            <div ref={container2} className="flex flex-col items-center justify-center gap-6" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                <h1 className="text-3xl font-bold text-white opacity-60 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Premium Quality, Unmatched Style
                </h1>
                <div className="w-80 h-1 bg-white/10 rounded-lg relative overflow-hidden">
                    <div className="h-full bg-white left-0 top-0 rounded-lg" ref={loading}></div>
                </div>
            </div>
        </div>:""
        }
        </main>
    );
}