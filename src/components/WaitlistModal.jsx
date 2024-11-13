import { useState } from "react";
import { useFirestore } from "../hooks/useFirestore";

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
};

const validatePhone = (phone) => {
  return String(phone)
    .match(/^[0-9]{10}$/);
};

const validateAge = (age) => {
  const ageNum = Number(age);
  return ageNum >= 18 && ageNum <= 100;
};

export function WaitlistModal({ isOpen, onClose }) {
  const { addToWaitlist } = useFirestore();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    profession: "",
    age: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const validateForm = () => {
    if (!formData.name.trim()) {
      setError('Name is required');
      return false;
    }
    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email');
      return false;
    }
    if (!validatePhone(formData.phone)) {
      setError('Please enter a valid 10-digit phone number');
      return false;
    }
    if (!formData.city.trim()) {
      setError('City is required');
      return false;
    }
    if (!formData.profession.trim()) {
      setError('Profession is required');
      return false;
    }
    if (!validateAge(formData.age)) {
      setError('Please enter a valid age between 18 and 100');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      const result = await addToWaitlist(formData);
      
      if (result.success) {
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          city: "",
          profession: "",
          age: "",
        });
        
        setTimeout(() => {
          onClose();
          setSuccess(false);
        }, 2000);
      }
    } catch (error) {
      console.error('Error:', error);
      setError(error.message || 'Failed to submit. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError("");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center">
      <div className="bg-[#052127] rounded-lg p-6 w-full max-w-md mx-4 shadow-xl max-h-[90vh] overflow-y-auto custom-scrollbar">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-white">Join our Waitlist</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            ×
          </button>
        </div>

        {success ? (
          <div className="text-center py-8">
            <p className="text-xl font-semibold text-[#00ff99]">Successfully joined the waitlist! 🎉</p>
            <p className="mt-2 text-sm text-gray-400">We'll be in touch soon!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="bg-red-900/20 text-red-400 text-sm p-3 rounded-md border border-red-900">
                {error}
              </div>
            )}

            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                Name *
              </label>
              <input
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00ff99] focus:border-transparent bg-[#081c20] text-white"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isLoading}
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                Email *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00ff99] focus:border-transparent bg-[#081c20] text-white"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isLoading}
              />
            </div>

            {/* Phone Field */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-1">
                Phone Number *
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00ff99] focus:border-transparent bg-[#081c20] text-white"
                value={formData.phone}
                onChange={handleChange}
                required
                disabled={isLoading}
                placeholder="10-digit number"
              />
            </div>

            {/* City Field */}
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-400 mb-1">
                City *
              </label>
              <input
                id="city"
                name="city"
                className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00ff99] focus:border-transparent bg-[#081c20] text-white"
                value={formData.city}
                onChange={handleChange}
                required
                disabled={isLoading}
              />
            </div>

            {/* Profession Field */}
            <div>
              <label htmlFor="profession" className="block text-sm font-medium text-gray-400 mb-1">
                Profession *
              </label>
              <input
                id="profession"
                name="profession"
                className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00ff99] focus:border-transparent bg-[#081c20] text-white"
                value={formData.profession}
                onChange={handleChange}
                required
                disabled={isLoading}
              />
            </div>

            {/* Age Field */}
            <div>
              <label htmlFor="age" className="block text-sm font-medium text-gray-400 mb-1">
                Age *
              </label>
              <input
                id="age"
                name="age"
                type="number"
                min="18"
                max="100"
                className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00ff99] focus:border-transparent bg-[#081c20] text-white"
                value={formData.age}
                onChange={handleChange}
                required
                disabled={isLoading}
              />
            </div>

            <div className="flex justify-end space-x-2 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-gray-700 text-white rounded-md hover:bg-[#081c20] transition-colors duration-200 disabled:opacity-50"
                disabled={isLoading}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-white rounded-md hover:opacity-90 transition-colors duration-200 bg-gradient-to-r from-[#003e4b] to-[#00ff99] disabled:opacity-50 flex items-center"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : 'Join Waitlist'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default WaitlistModal;