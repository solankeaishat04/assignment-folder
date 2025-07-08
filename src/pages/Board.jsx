import { useNavigate } from "react-router-dom";
import { UseGlobal } from "./Context";

const Board = () => {
  const { name, age, gender, phone, email } = UseGlobal();
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate("/context");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl w-full">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          👋 Welcome to Your Dashboard, {name || "User"}!
        </h2>

        <div className="space-y-5 mb-8">
          <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg">
            
            <div className="space-y-2">
              <p className="text-sm font-semibold text-gray-600">Full Name</p>
              <p className="text-gray-800 bg-white p-3 rounded-md">
                {name || "Not provided"}
              </p>
            </div>

            
            <div className="space-y-2">
              <p className="text-sm font-semibold text-gray-600">Age</p>
              <p className="text-gray-800 bg-white p-3 rounded-md">
                {age || "Not provided"}
              </p>
            </div>

           
            <div className="space-y-2">
              <p className="text-sm font-semibold text-gray-600">Gender</p>
              <p className="text-gray-800 bg-white p-3 rounded-md">
                {gender || "Not provided"}
              </p>
            </div>

         
            <div className="space-y-2">
              <p className="text-sm font-semibold text-gray-600">Phone Number</p>
              <p className="text-gray-800 bg-white p-3 rounded-md">
                {phone || "Not provided"}
              </p>
            </div>

         
            <div className="col-span-2 space-y-2">
              <p className="text-sm font-semibold text-gray-600">Email Address</p>
              <p className="text-gray-800 bg-white p-3 rounded-md break-all">
                {email || "Not provided"}
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={handleEdit}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-200 font-semibold"
          >
            Edit Profile
          </button>
          <button
            onClick={() => navigate("/login")}
            className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg transition-colors duration-200 font-semibold"
          >
            Check Status
          </button>
        </div>
      </div>
    </div>
  );
};

export default Board;