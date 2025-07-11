"use client";
import React, { useState, useEffect, useCallback } from 'react';
import toast from 'react-hot-toast';
import { FiChevronDown, FiSend, FiX } from 'react-icons/fi';

const EnquiryForm = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    enquiryType: '',
    businessEntityName: '',
    ownerPromotorName: '',
    gstNo: '',
    contactNo: '',
    emailId: '',
    country: '',
    state: '',
    city: '',
    town: '',
    address: '',
    pincode: '',
    yearsOfExperience: '',
    annualSalesTurnover: '',
    proposedInvestment: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const enquiryTypes = [
    { value: 'depot', label: 'Depot' },
    { value: 'distributor', label: 'Distributor' },
    { value: 'dealer', label: 'Dealer' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Add your form submission logic here
      console.log('Form Data:', formData);
      await new Promise(resolve => setTimeout(resolve, 2000));
      setFormData({
        enquiryType: '', businessEntityName: '', ownerPromotorName: '', gstNo: '', contactNo: '', emailId: '', country: '', state: '', city: '', town: '', address: '', pincode: '', yearsOfExperience: '', annualSalesTurnover: '', proposedInvestment: '', message: ''
      });
      if (typeof window !== 'undefined') {
        toast.success('Enquiry submitted successfully!');
      }
      if (onClose) onClose();
    } catch (error) {
      console.error('Error submitting form:', error);
      if (typeof window !== 'undefined') {
        toast.error('Error submitting enquiry. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Close on Escape key
  const escHandler = useCallback((e) => {
    if (e.key === 'Escape' && open && onClose) onClose();
  }, [open, onClose]);
  useEffect(() => {
    if (open) {
      document.addEventListener('keydown', escHandler);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.removeEventListener('keydown', escHandler);
      document.body.style.overflow = '';
    };
  }, [open, escHandler]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50">
      <div className="relative w-full max-w-2xl mx-2 sm:mx-4 md:mx-0 bg-white border border-gray-200 rounded-lg shadow-2xl animate-fadeIn max-h-screen overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white hover:text-red-800 focus:outline-none"
          aria-label="Close"
          type="button"
        >
          <FiX className="w-6 h-6" />
        </button>
        {/* Header */}
        <div className="bg-orange-500 px-4 py-3 sm:px-6 sm:py-4 rounded-t-lg">
          <h2 className="text-xl sm:text-2xl font-bold text-white">Distribution Enquiry Form</h2>
          <p className="text-orange-100 mt-1 text-sm sm:text-base">Please fill in all the required details to submit your enquiry</p>
        </div>
        {/* Form */}
        <form onSubmit={handleSubmit} className="p-3 sm:p-6 space-y-4 sm:space-y-6">
          {/* Enquiry Type */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label htmlFor="enquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                Enquiry Type <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  id="enquiryType"
                  name="enquiryType"
                  value={formData.enquiryType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 appearance-none bg-white"
                >
                  <option value="">Select Enquiry Type</option>
                  {enquiryTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
                <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>

            <div>
              <label htmlFor="businessEntityName" className="block text-sm font-medium text-gray-700 mb-2">
                Business Entity Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="businessEntityName"
                name="businessEntityName"
                value={formData.businessEntityName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Enter business entity name"
              />
            </div>
          </div>

          {/* Owner/Promotor Name and GST */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label htmlFor="ownerPromotorName" className="block text-sm font-medium text-gray-700 mb-2">
                Owner/Promotor Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="ownerPromotorName"
                name="ownerPromotorName"
                value={formData.ownerPromotorName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Enter owner/promotor name"
              />
            </div>

            <div>
              <label htmlFor="gstNo" className="block text-sm font-medium text-gray-700 mb-2">
                GST No.
              </label>
              <input
                type="text"
                id="gstNo"
                name="gstNo"
                value={formData.gstNo}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Enter GST number"
              />
            </div>
          </div>

          {/* Contact and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label htmlFor="contactNo" className="block text-sm font-medium text-gray-700 mb-2">
                Contact No. <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="contactNo"
                name="contactNo"
                value={formData.contactNo}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Enter contact number"
              />
            </div>

            <div>
              <label htmlFor="emailId" className="block text-sm font-medium text-gray-700 mb-2">
                Email ID <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="emailId"
                name="emailId"
                value={formData.emailId}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Enter email address"
              />
            </div>
          </div>

          {/* Location Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                Country <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Enter country"
              />
            </div>

            <div>
              <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">
                State <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Enter state"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                City <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Enter city"
              />
            </div>

            <div>
              <label htmlFor="town" className="block text-sm font-medium text-gray-700 mb-2">
                Town
              </label>
              <input
                type="text"
                id="town"
                name="town"
                value={formData.town}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Enter town"
              />
            </div>
          </div>

          {/* Address and Pincode */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="md:col-span-2">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                Address <span className="text-red-500">*</span>
              </label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 resize-vertical"
                placeholder="Enter complete address"
              />
            </div>

            <div>
              <label htmlFor="pincode" className="block text-sm font-medium text-gray-700 mb-2">
                PINCODE <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="pincode"
                name="pincode"
                value={formData.pincode}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Enter pincode"
              />
            </div>
          </div>

          {/* Business Experience and Financial Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label htmlFor="yearsOfExperience" className="block text-sm font-medium text-gray-700 mb-2">
                Years of Experience in Business <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                id="yearsOfExperience"
                name="yearsOfExperience"
                value={formData.yearsOfExperience}
                onChange={handleInputChange}
                required
                min="0"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Enter years of experience"
              />
            </div>

            <div>
              <label htmlFor="annualSalesTurnover" className="block text-sm font-medium text-gray-700 mb-2">
                Annual Sales/Turnover of your Business
              </label>
              <input
                type="text"
                id="annualSalesTurnover"
                name="annualSalesTurnover"
                value={formData.annualSalesTurnover}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Enter annual sales/turnover"
              />
            </div>
          </div>

          {/* Proposed Investment */}
          <div>
            <label htmlFor="proposedInvestment" className="block text-sm font-medium text-gray-700 mb-2">
              Proposed Investment
            </label>
            <input
              type="text"
              id="proposedInvestment"
              name="proposedInvestment"
              value={formData.proposedInvestment}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              placeholder="Enter proposed investment amount"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 resize-vertical"
              placeholder="Enter your message or additional details"
            />
          </div>

          {/* Submit Button */}
          <div className="flex flex-col sm:flex-row justify-end pt-2 sm:pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white px-6 sm:px-8 py-3 rounded-md font-medium transition-colors duration-200 flex items-center space-x-2 min-w-[140px] sm:min-w-[160px] justify-center text-sm sm:text-base"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <FiSend className="w-4 h-4" />
                  <span>Submit Enquiry</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnquiryForm;
