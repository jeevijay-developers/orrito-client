"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const solutions = [
	{
		name: "Instant Geyser",
		img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
		btn: "Solution1",
	},
	{
		name: "Aeon BLDC Fan",
		img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
		btn: "Solution2",
	},
	{
		name: "Aerosense BLDC Fan",
		img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
		btn: "Solution3",
	},
	{
		name: "Coffee Machines",
		img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
		btn: "Solution4",
	},
];

const SolutionHome = () => {
	return (
		<section className="py-12">
			<h2 className="text-4xl font-light text-center mb-10 text-gray-800">
				Solution By Categories
			</h2>
			<div className="relative px-4 md:px-50">
				<button className="solution-swiper-prev absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-gray-800/80 text-white border border-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center hover:bg-orange-500 transition-colors duration-200 focus:outline-none ">
					<span className="sr-only">Previous</span>
					<svg
						width="20"
						height="20"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M15 19l-7-7 7-7"
						/>
					</svg>
				</button>
				<button className="solution-swiper-next absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-gray-800/80 text-white border border-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center hover:bg-orange-500 transition-colors duration-200 focus:outline-none ">
					<span className="sr-only">Next</span>
					<svg
						width="20"
						height="20"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M9 5l7 7-7 7"
						/>
					</svg>
				</button>
				<Swiper
					modules={[Navigation]}
					spaceBetween={16}
					slidesPerView={1}
					navigation={{
						nextEl: ".solution-swiper-next",
						prevEl: ".solution-swiper-prev",
					}}
					loop={true}
					breakpoints={{
						640: { slidesPerView: 1 },
						768: { slidesPerView: 2 },
						1024: { slidesPerView: 3 },
						1280: { slidesPerView: 4 },
                        
					}}
				>
					{solutions.map((sol) => (
						<SwiperSlide key={sol.name}>
							<div className="flex flex-col items-center rounded-2xl overflow-hidden mx-auto pb-4 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xs">
								<img
									src={sol.img}
									alt={sol.name}
									className="w-full h-56 sm:h-64 md:h-[320px] lg:h-[370px] object-cover rounded-2xl"
								/>
								<button className="mt-4 py-2 px-5 bg-gray-900 text-white rounded-full font-semibold text-xs sm:text-sm hover:bg-orange-500 transition-colors duration-200 focus:outline-none ">
									{sol.btn}
								</button>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
};

export default SolutionHome;