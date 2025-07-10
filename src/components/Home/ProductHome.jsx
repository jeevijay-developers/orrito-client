"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

const categories = [
	{
		name: "Bulbs",
		img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
	},
	{
		name: "Tube Lights",
		img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
	},
	{
		name: "Panel Lights",
		img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
	},
	{
		name: "Flood Lights",
		img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
	},
	{
		name: "Street Lights",
		img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
	},
	{
		name: "Downlights",
		img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
	},
];

const ProductHome = () => {
	return (
		<section className="py-12">
			<h2 className="text-4xl font-light text-center mb-10 text-gray-800">
				Shop By Category
			</h2>
			<div >
				<Swiper
					modules={[Autoplay]}
					spaceBetween={6}
					slidesPerView={5}
					autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                      }}
                    loop={true}
					className="category-swiper w-4xl"
				>
					{categories.map((cat) => (
						<SwiperSlide key={cat.name}>
							<div className="flex flex-col items-center">
								<div className="w-28 h-28 rounded-full bg-orange-50 flex items-center justify-center mb-3 shadow-sm overflow-hidden">
									<img
										src={cat.img}
										alt={cat.name}
										className="w-full h-full object-cover rounded-full cursor-pointer transition-transform duration-200 hover:scale-105 "
									/>
								</div>
								<span className="text-gray-700 font-medium text-lg text-center whitespace-nowrap">
									{cat.name}
								</span>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
};

export default ProductHome;
