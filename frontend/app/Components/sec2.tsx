import React, { useRef } from 'react';
import FuturisticCards from './cards'; // Assuming FuturisticCards.js is in the same directory

const OurFocusAreas = () => {
    const sectionsRef = useRef<{ technologies: HTMLElement | null }>({ technologies: null });

    return (
        <section ref={(el) => (sectionsRef.current.technologies = el)} className="relative py-24">
            <div className="container mx-auto px-4 mb-12">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <div className="inline-block mb-4">
                        <div className="flex items-center justify-center">
                            <div className="h-[2px] w-8 bg-orange-500 mr-3"></div>
                            <span className="text-orange-500 font-mono uppercase tracking-widest text-xs">Core Technologies</span>
                            <div className="h-[2px] w-8 bg-orange-500 ml-3"></div>
                        </div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Focus Areas</h2>
                    <p className="text-gray-400">Explore the revolutionary technologies powering our cognitive systems.</p>
                </div>
            </div>

            <FuturisticCards />
        </section>
    );
};

export default OurFocusAreas;
