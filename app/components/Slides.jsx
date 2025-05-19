'use client';
import { useState, useMemo, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Slides = ({
	slide = [],
	showTtlIco = true,
	autoSlide = true,
	fullwidth = true,
}) => {

	const [activeSlide, setActiveSlide] = useState(0);

	const handleSlideChange = useCallback((index) => {
		setActiveSlide(index);
	}, []);

	const memoizedSlides = useMemo(() => slide, [slide]);
	const totalSlides = memoizedSlides.length;

	const variants = {
		enter: { x: 100, opacity: 0, filter: 'blur(15px)' },
		center: { x: 0, opacity: 1, filter: 'blur(0px)' },
		exit: { x: -100, opacity: 0, filter: 'blur(15px)' },
		transition: { duration: 0.3, ease: 'easeInOut' }
	};

	useEffect(() => {
		if (!autoSlide || totalSlides <= 1) return;

		const interval = setInterval(() => {
			setActiveSlide((prevSlide) => (prevSlide + 1) % totalSlides);
		}, 3000);
		return () => clearInterval(interval);

	}, [totalSlides]);
	
	return (
		<div className={`flex flex-col items-center ${fullwidth ? 'col-span-full' : 'col-span-1'}`}>

			{showTtlIco && (memoizedSlides[activeSlide]?.title || memoizedSlides[activeSlide]?.icon) && (
				<div
					className="flex flex-row items-center justify-center gap-3
					bg-[#0f0f0f] p-2 rounded-[10px] mb-2 min-w-[120px] max-w-[150px]"
				>
					{memoizedSlides[activeSlide]?.icon && (
						<span className="material-symbols-outlined text-3xl">
							{memoizedSlides[activeSlide].icon}
						</span>
					)}
					{memoizedSlides[activeSlide]?.title && (
						<h2 className="text-sm text-white">{memoizedSlides[activeSlide].title}</h2>
					)}
				</div>
			)}

			<div className="h-[35vh] w-full overflow-hidden rounded-[10px] bg-[#0f0f0f]">
				<AnimatePresence initial={false} mode="wait">
					<motion.div key={activeSlide} variants={variants} initial="enter" animate="center" exit="exit" transition="transition">
						<div className="flex flex-row">
							{memoizedSlides[activeSlide]?.text?.length > 0 && (
								<div className="h-[35vh] p-6 overflow-y-scroll scroll-overflow-all">
									{memoizedSlides[activeSlide].text.map((paragraph, index) => (
										<p
											key={index}
											className={`${memoizedSlides[activeSlide].text.length > 1 ? 'mb-2' : ''} ${paragraph.style}`}
										>
											{paragraph.content}
										</p>
									))}
								</div>
							)}
							{memoizedSlides[activeSlide]?.url && (
								<a
									href={memoizedSlides[activeSlide].url}
									target="_blank"
									rel="noopener noreferrer"
									className="text-blue-400 hover:text-blue-300 underline text-sm mt-2 inline-block"
								>
									{memoizedSlides[activeSlide].urlLabel || "Visitar enlace"}
								</a>
							)}
							{memoizedSlides[activeSlide]?.image && (
								<div className="">
									<Image
										src={memoizedSlides[activeSlide].image.src}
										alt={memoizedSlides[activeSlide].image.alt}
										width={memoizedSlides[activeSlide].image.width}
										height={memoizedSlides[activeSlide].image.height}
									/>
								</div>
							)}
						</div>
					</motion.div>
				</AnimatePresence>
			</div>

			{totalSlides > 1 && (
				<div className="flex justify-center space-x-2 mt-4">
					{Array.from({ length: totalSlides }).map((_, index) => (
						<button
							key={index}
							onClick={() => handleSlideChange(index)}
							className={`w-3 h-3 rounded-full ${index === activeSlide ? 'bg-white' : 'bg-gray-400'
								}`}
							aria-label={`Ir a la sección ${index + 1}`}
						/>
					))}
				</div>
			)}

		</div>
	);
}

export default Slides;