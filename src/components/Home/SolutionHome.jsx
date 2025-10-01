"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { solutionCategories } from "@/service/Data";
import Link from "next/link";

const SolutionHome = () => {
	// const [categories, setCategories] = useState([]);

    // useEffect(() => {
    //         async function getCategories() {
    //             try {
    //                 const data = await solutionCategories();
    //                 setCategories(Array.isArray(data) ? data : []);
    //             } catch (err) {
    //                 setCategories([]);
    //             }
    //         }
    //         getCategories();
    //     }, []);

	const categories = [
	{
		image: {
			url: '/solutions/offices_solution.jpg',
			public_id: 'solutions/solution1'
		},
		name: 'Smart Office',
		btn: 'Explore Office Solutions'
	},
	{
		image: {
			url: '/solutions/retail_solution.jpg',
			public_id: 'solutions/solution2'
		},
		name: 'Retail Lighting',
		btn: 'Explore Retail Solutions'
	},
	{
		image: {
			url: '/solutions/healthcare_solution.webp',
			public_id: 'solutions/solution3'
		},
		name: 'Healthcare Spaces',
		btn: 'Explore Healthcare Solutions'
	},
	{
		image: {
			url: '/solutions/hospitality_solution.jpg',
			public_id: 'solutions/solution4'
		},
		name: 'Hospitality',
		btn: 'Explore Hospitality Solutions'
	},
	{
		image: {
			url: '/solutions/industrial_solution.png',
			public_id: 'solutions/solution5'
		},
		name: 'Industrial',
		btn: 'Explore Industrial Solutions'
	}
	]

	return (
		<section className="py-12">
			<h2 className="text-4xl font-light text-center mb-10 text-gray-800">
				Categories By Solution
			</h2>
			<div className="relative px-6 md:px-20">
				<button className="solution-swiper-prev absolute left-10 md:left-22  top-3/7 -translate-y-1/2 z-20 bg-gray-800/80 text-white border border-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center hover:cursor-pointer transition-colors duration-200 focus:outline-none ">
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
				<button className="solution-swiper-next absolute right-10 md:right-22 top-3/7 -translate-y-1/2 z-20 bg-gray-800/80 text-white border border-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center hover:cursor-pointer transition-colors duration-200 focus:outline-none ">
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
					{categories.map((sol) => (
						<SwiperSlide key={sol._id || sol.id || sol.name}>
							<Link href={`/solutions/${encodeURIComponent(sol.name)}`} className="block w-full h-full">
								<div className="flex flex-col items-center rounded-2xl overflow-hidden mx-auto pb-4 px-1 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-sm">
									<img
										src={sol.image?.url || sol.img || sol.src || '/img/corporate/placeholder.png'}
										alt={sol.name}
										className="w-full h-80 sm:h-96 md:h-[450px] lg:h-[520px] object-cover rounded-2xl"
									/>
									<button className="mt-4 py-2 px-5 bg-gray-900 text-white rounded-full font-semibold text-xs sm:text-sm hover:bg-orange-700 transition-colors duration-200 focus:outline-none ">
										{sol.btn}
									</button>
								</div>
							</Link>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
};

export default SolutionHome;