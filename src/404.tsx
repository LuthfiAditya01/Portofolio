import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function NotFound() {
    const navigate = useNavigate();
    const location = useLocation();
    const [hasPreviousPage, setHasPreviousPage] = useState(false);
    
    useEffect(() => {
        // Cek apakah ada halaman sebelumnya dalam history
        setHasPreviousPage(window.history.length > 1);
    }, []);
    
    const handleNavigation = () => {
        if (hasPreviousPage && location.key) {
            // Jika ada halaman sebelumnya di website ini, kembali ke halaman tersebut
            navigate(-1);
        } else {
            // Jika tidak ada halaman sebelumnya, arahkan ke homepage
            navigate('/');
        }
    };
    
    return (
        <div className="min-h-screen flex flex-col justify-center items-center text-center">
            <h1 className="text-4xl font-bold mb-4">There is nothing here</h1>
            <h2 className="text-2xl font-bold mb-8">
                It's only a <span className="font-black">Void of Emptiness...</span>
            </h2>
            <button 
                onClick={handleNavigation}
                className="hero-btn px-6 py-3 bg-sky-500 rounded-lg hover:bg-sky-600 transition duration-300"
            >
                {hasPreviousPage && location.key ? 'Let\'s Go back...' : 'Let\'s Start Over...'}
            </button>
        </div>
    )
}