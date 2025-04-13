import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../features/auth/authSlice';

const LogoutButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <button
      onClick={handleLogout}
      className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
