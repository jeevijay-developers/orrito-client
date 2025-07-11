"use client";
import React, { useState } from "react";

const DistributionEnquiry = () => {
	const [formData, setFormData] = useState({
		enquiryType: "",
		businessEntityName: "",
		ownerPromotorName: "",
		gstNo: "",
		contactNo: "",
		emailId: "",
		country: "",
		state: "",
		city: "",
		town: "",
		address: "",
		pincode: "",
		yearsOfExperience: "",
		annualSales: "",
		proposedInvestment: "",
		message: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Form submitted:", formData);
		// Add your form submission logic here
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100 py-12 pt-[170px] px-4 sm:px-6 lg:px-8">
			<div className="max-w-4xl mx-auto">
				<div className="bg-white rounded-2xl shadow-xl overflow-hidden">
					{/* Header */}
					<div className="bg-gradient-to-r from-orange-500 to-red-500 px-8 py-10">
						<h1 className="text-3xl font-bold text-white text-center">
							Distributor Enquiry
						</h1>
						<p className="text-orange-100 text-center mt-2">
							(Please fill the details in capital letters)
						</p>
					</div>

					{/* Form */}
					<form onSubmit={handleSubmit} className="px-8 py-10 space-y-6">
						{/* Enquiry Type */}
						<div>
							<label className="block text-sm font-semibold text-gray-700 mb-2">
								Enquiry Type *
							</label>
							<select
								name="enquiryType"
								value={formData.enquiryType}
								onChange={handleChange}
								required
								className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none transition-all duration-200 bg-white"
							>
								<option value="">Select Enquiry Type</option>
								<option value="DEPOT">Depot</option>
								<option value="DISTRIBUTOR">Distributor</option>
								<option value="DEALER">Dealer</option>
							</select>
						</div>

						{/* Business Entity Name and Owner/Promotor Name */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div>
								<label className="block text-sm font-semibold text-gray-700 mb-2">
									Business Entity Name *
								</label>
								<input
									type="text"
									name="businessEntityName"
									value={formData.businessEntityName}
									onChange={handleChange}
									required
									className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none transition-all duration-200"
									placeholder="Enter business entity name"
								/>
							</div>
							<div>
								<label className="block text-sm font-semibold text-gray-700 mb-2">
									Owner/Promotor Name *
								</label>
								<input
									type="text"
									name="ownerPromotorName"
									value={formData.ownerPromotorName}
									onChange={handleChange}
									required
									className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none transition-all duration-200"
									placeholder="Enter owner/promotor name"
								/>
							</div>
						</div>

						{/* GST No and Contact No */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div>
								<label className="block text-sm font-semibold text-gray-700 mb-2">
									GST No.
								</label>
								<input
									type="text"
									name="gstNo"
									value={formData.gstNo}
									onChange={handleChange}
									className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none transition-all duration-200"
									placeholder="Enter GST number"
								/>
							</div>
							<div>
								<label className="block text-sm font-semibold text-gray-700 mb-2">
									Contact No. *
								</label>
								<input
									type="tel"
									name="contactNo"
									value={formData.contactNo}
									onChange={handleChange}
									required
									className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none transition-all duration-200"
									placeholder="Enter contact number"
								/>
							</div>
						</div>

						{/* Email ID */}
						<div>
							<label className="block text-sm font-semibold text-gray-700 mb-2">
								Email ID *
							</label>
							<input
								type="email"
								name="emailId"
								value={formData.emailId}
								onChange={handleChange}
								required
								className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none transition-all duration-200"
								placeholder="Enter email address"
							/>
						</div>

						{/* Country and State */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div>
								<label className="block text-sm font-semibold text-gray-700 mb-2">
									Country *
								</label>
								<input
									type="text"
									name="country"
									value={formData.country}
									onChange={handleChange}
									required
									className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none transition-all duration-200"
									placeholder="Enter country"
								/>
							</div>
							<div>
								<label className="block text-sm font-semibold text-gray-700 mb-2">
									State *
								</label>
								<input
									type="text"
									name="state"
									value={formData.state}
									onChange={handleChange}
									required
									className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none transition-all duration-200"
									placeholder="Enter state"
								/>
							</div>
						</div>

						{/* City and Town */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div>
								<label className="block text-sm font-semibold text-gray-700 mb-2">
									City *
								</label>
								<input
									type="text"
									name="city"
									value={formData.city}
									onChange={handleChange}
									required
									className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none transition-all duration-200"
									placeholder="Enter city"
								/>
							</div>
							<div>
								<label className="block text-sm font-semibold text-gray-700 mb-2">
									Town
								</label>
								<input
									type="text"
									name="town"
									value={formData.town}
									onChange={handleChange}
									className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none transition-all duration-200"
									placeholder="Enter town"
								/>
							</div>
						</div>

						{/* Address and Pincode */}
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							<div className="md:col-span-2">
								<label className="block text-sm font-semibold text-gray-700 mb-2">
									Address *
								</label>
								<input
									type="text"
									name="address"
									value={formData.address}
									onChange={handleChange}
									required
									className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none transition-all duration-200"
									placeholder="Enter complete address"
								/>
							</div>
							<div>
								<label className="block text-sm font-semibold text-gray-700 mb-2">
									PINCODE *
								</label>
								<input
									type="text"
									name="pincode"
									value={formData.pincode}
									onChange={handleChange}
									required
									className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none transition-all duration-200"
									placeholder="Enter pincode"
								/>
							</div>
						</div>

						{/* Years of Experience and Annual Sales */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div>
								<label className="block text-sm font-semibold text-gray-700 mb-2">
									Years of Experience in Business
								</label>
								<input
									type="number"
									name="yearsOfExperience"
									value={formData.yearsOfExperience}
									onChange={handleChange}
									className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none transition-all duration-200"
									placeholder="Enter years of experience"
								/>
							</div>
							<div>
								<label className="block text-sm font-semibold text-gray-700 mb-2">
									Annual Sales/Turnover of your Business
								</label>
								<input
									type="text"
									name="annualSales"
									value={formData.annualSales}
									onChange={handleChange}
									className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none transition-all duration-200"
									placeholder="Enter annual sales/turnover"
								/>
							</div>
						</div>

						{/* Proposed Investment */}
						<div>
							<label className="block text-sm font-semibold text-gray-700 mb-2">
								Proposed Investment
							</label>
							<input
								type="text"
								name="proposedInvestment"
								value={formData.proposedInvestment}
								onChange={handleChange}
								className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none transition-all duration-200"
								placeholder="Enter proposed investment amount"
							/>
						</div>

						{/* Message */}
						<div>
							<label className="block text-sm font-semibold text-gray-700 mb-2">
								Message
							</label>
							<textarea
								name="message"
								value={formData.message}
								onChange={handleChange}
								rows={4}
								className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none transition-all duration-200 resize-none"
								placeholder="Enter your message..."
							></textarea>
						</div>

						{/* Submit Button */}
						<div className="pt-6">
							<button
								type="submit"
								className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-4 px-6 rounded-lg hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
							>
								Submit Enquiry
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default DistributionEnquiry;
