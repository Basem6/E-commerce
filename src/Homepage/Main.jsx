// GSAP
import { useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";   
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(SplitText,ScrollTrigger,ScrollSmoother);
export default function Main() {
    const heading = useRef();
    const heading2 = useRef();
    const texthero= useRef();
    const texthero2= useRef();
    const bigimage= useRef();
    const smallimage= useRef();
    const smallimage2= useRef();
    const btn = useRef();
    const btn2 = useRef();
    useGSAP(() => {
        let splitText = SplitText.create(texthero.current,{
        type: "chars",
        });
        let splitText2 = SplitText.create(texthero2.current,{
        type: "chars",
        });
        gsap.from(heading.current, {
            scrollTrigger: {
                trigger: heading.current,
                start: "36% 80%",
            },
            y: 20,
            opacity: 0,
            scale: 0.75,    
            duration: 1,
        },);
        gsap.from(splitText.chars,{
            scrollTrigger: {
                trigger: heading.current,
                start: "36% 80%",
            },
            opacity: 0, y: 10, duration: 0.2,rotateX: 80, stagger: 0.04, scale: 0.85
            
        }
        );
        gsap.from(heading2.current, {
            scrollTrigger: {
                trigger: heading2.current,
                start: "36% 80%",
            },
            y: 20,
            opacity: 0,
            scale: 0.75,    
            duration: 1,
        },);
        gsap.from(splitText2.chars,{
            scrollTrigger: {
                trigger: heading2.current,
                start: "36% 80%",
            },
            opacity: 0, y: 10, duration: 0.2,rotateX: 80, stagger: 0.04, scale: 0.85
            
        }
        );
        gsap.from(bigimage.current, {
            scrollTrigger: {
                trigger: bigimage.current, 
                start: "36% 70%",
            },
            x: -70,
            duration: 0.7,
            opacity: 0,

        })
        gsap.from(smallimage.current, {
            scrollTrigger: {
                trigger: bigimage.current,
                start: "36% 70%",
            },
            y: -70,  duration: 1,opacity: 0,delay: 0.7
        })
        gsap.from(smallimage2.current, {
            scrollTrigger: {
                trigger: bigimage.current,
                start: "36% 70%",
            },
            y: 70,  duration: 1 , opacity: 0,delay: 0.7
        })
        gsap.from(btn.current, {
            scrollTrigger: {
                trigger: "#sectionbottom",
                start: "top 80%",
            },
            x: 10, duration: 1
        })
        gsap.from(btn2.current, {
            scrollTrigger: {
                trigger: "#sectionbottom",
                start: "top 80%",
            },
            x: -10, duration: 1
        })
        
    }, { dependencies: [] });
    return (
        <section className="bg-gray-50 py-20 ">
            <div className="max-w-7xl mx-auto px-6 mb-40">
                {/* Heading */}
                <div className="text-center mb-14">
                <h2 className="text-4xl font-bold text-gray-900" ref={heading}>
                    Curated Categories
                </h2>
                <p className="text-gray-500 mt-3" ref={texthero}>
                    Explore premium collections crafted for modern lifestyles
                </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:h-[650px]">

                {/* Large Card */}
                <div className="md:col-span-8 group relative overflow-hidden rounded-3xl cursor-pointer" ref={bigimage}>

                    <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcXzzuOQkoOW4WgcZc_7bN32U7WkTs7wcM93JSzMm244SqwRA5Ir-TJ6D5rhA-MqNR2O6o7p9g9oHOAIXH95_jD2iuozvpq3IF1xOPuy0TdVOrT_hnfz_46H2RZxGXQuuDf2ZtI50Te5DH07k4KRpqg9zJy2lFywQLah6jiN3sbaKk5wTyyQ_BK16owqkaVJf5R-Z8HE8JZREVrHQQCziktBrHRq8VmelLDfupsiI8gSSobBqXXyryNE_-yFE6FWF9pmCZqYQN9yM"
                    alt="Electronics"
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition duration-300"></div>

                    <div className="absolute bottom-10 left-10 text-white z-10">
                    <h3 className="text-5xl font-bold mb-3">
                        Electronics
                    </h3>

                    <p className="text-lg text-gray-200">
                        Future-ready technology for modern life.
                    </p>
                    </div>

                </div>

                {/* Right Side */}
                <div className="md:col-span-4 flex flex-col gap-6">

                    {/* Fashion */}
                    <div className="flex-1 group relative overflow-hidden rounded-3xl cursor-pointer" ref={smallimage}>

                    <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZw3nGOWI3huSIpvLcrjKOTPzayQfCiFgBFkuWlBLQvhILCGZfkvE3wXUldXCGPhnPJ2XZoL8h7vDE06nmfyrY5FWO4wEcDoP9tu2IifE2d6dMY2AcFkooESfYxP-76OEsxGADuDyvexlWDdpFunxEnf_BBdO4q3K_dOCJkSGHan3-6NDLyMjD2iVWU8Kd7Nh8eKyiFQdJqbqB_NuhSFyb4lFuieWNF09eAO6fSEfzYO00svKXgigEC_orJ3ZaVqOhAVYKvyt9XAI"
                        alt="Fashion"
                        className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition"></div>

                    <div className="absolute bottom-6 left-6 text-white z-10">
                        <h3 className="text-3xl font-bold mb-1">
                        Fashion
                        </h3>

                        <p className="text-gray-200">
                        Tailored elegance.
                        </p>
                    </div>

                    </div>

                    {/* Lifestyle */}
                    <div className="flex-1 group relative overflow-hidden rounded-3xl cursor-pointer" ref={smallimage2}>

                    <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDr3HA7O_IBl2SkvmS6a1VaVMuJzL3aQ6aorynvkubVFI_HpzUz0pDDhPvSU37U7HWKtWqk0PXzsADuW8t-oVMzSZ3cDPBacmNlu96L1Q_rTtJP3E5A3cI-53e_7Vk1QN4pMmTCy_aNZO4YVZd45UNyxVjsCXLvsdjtEeIqoA3RUC7pd_HaoahCcQhpVobs44o72vZygn8BLmnpdqzrqYoslgOugJndkUtaVe-3nWdEnGv2rIkLG42mAFijQcG9af0bUWuetwrab38"
                        alt="Lifestyle"
                        className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition"></div>

                    <div className="absolute bottom-6 left-6 text-white z-10">
                        <h3 className="text-3xl font-bold mb-1">
                        Lifestyle
                        </h3>

                        <p className="text-gray-200">
                        Elevated living.
                        </p>
                    </div>

                    </div>

                </div>

                </div>

            </div>
            <section className="bg-gray-50 py-20 px-6" id="sectionbottom">
                <div className="max-w-2xl mx-auto text-center">

                <h2 className="text-3xl font-bold text-gray-900 mb-4" ref={heading2}>Join Newsletter</h2>
                <p className="text-gray-500 mb-8" ref={texthero2}>
                    Get updates about new collections and exclusive offers.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                    <input
                    ref={btn2}
                    type="email"
                    placeholder="Email address"
                    className="flex-1 px-5 py-4 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-black"
                    />
                    <button className="px-8 py-4 bg-black text-white rounded-lg hover:bg-gray-800 " ref={btn}>
                    Subscribe
                    </button>
                </div>

                </div>
            </section>
        </section>
    );
}