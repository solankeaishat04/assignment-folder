import { useNavigate } from "react-router-dom";
import { UseGlobal } from "./Context";
const Login =()=>{
    const { name } = UseGlobal();
    const navigate = useNavigate()
    const handleHome = () => {
        navigate('/context'); 
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full text-center">
               
                <div className="mb-4 text-6xl text-green-500">✓</div>
                
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Hello!, {name}! 🎉
                </h2>
                
                <p className="text-gray-600 mb-6">
                    You have successfully logged in to your account
                </p>

                <div className="space-y-4">
                <button 
                        onClick={handleHome}
                        className="w-full bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors duration-200 font-semibold"
                    >
                        Back to Home
                    </button>
                
                </div>
            </div>
        </div>
    );

}

export default Login
