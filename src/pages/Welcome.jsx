import { useNavigate } from "react-router-dom";
import { UseGlobal } from "./Context";

const Welcome = () => {
    const { name } = UseGlobal();
    const navigate = useNavigate();
    
    const handle = () => {
        navigate('/Otp');
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Hello {name} 👋
                </h2>
                <p className="text-gray-600 mb-6">
                    Click the button below to continue your signup process
                </p>
                <button 
                    onClick={handle}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
                >
                    Continue to OTP Verification
                </button>
            </div>
        </div>
    );
};

export default Welcome;