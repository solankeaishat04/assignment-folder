import React from "react";
import { UseGlobal } from "./Context";
import { useNavigate } from "react-router-dom";

function ContextPractice() {
  const { 
    name, setName,
    age, setAge,
    gender, setGender,
    phone, setPhone,
    email, setEmail
  } = UseGlobal();
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/welcome"); 
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Registration Form
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Name:
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Age:
            </label>
            <input
              type="number"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>

         
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Gender:
            </label>
            <select
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

         
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Phone Number:
            </label>
            <input
              type="tel"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Email:
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
          >
            Continue Registration
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContextPractice;