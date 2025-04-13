// src/pages/Dashboard.jsx

import LogoutButton from '../components/LogoutButton';

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50">
      <h1 className="text-4xl font-bold mb-4 text-blue-700">Welcome to Dashboard</h1>
      <p className="mb-6 text-lg text-gray-600">You are successfully logged in 🎉</p>
      <LogoutButton />
    </div>
  );
};

export default Dashboard;
