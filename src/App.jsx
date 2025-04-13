import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register'
import Dashboard from './pages/Dashboard';
import SecretPage from './pages/SecretPage';
import ProtectedRoute from './components/ProtectedRoute';
import './index.css';

const App = () => {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Register />} />
        <Route path="/Login" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/secret"
          element={
            <ProtectedRoute>
              <SecretPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
