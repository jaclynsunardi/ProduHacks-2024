import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/loadingScreen.css';

export default function LoadingScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('login'); 
    }, 5000);

    return () => clearTimeout(timer); 
  }, [navigate]);

  return (
    <div className="Loading_Screen">
      <img src="Logo.png" alt="Logo" />
    </div>
  );
}
