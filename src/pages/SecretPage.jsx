// src/pages/SecretPage.jsx

import LogoutButton from '../components/LogoutButton';

const SecretPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-purple-50">
      <h1 className="text-4xl font-bold text-purple-700 mb-4">🤫 Secret Page</h1>
      <p className="text-lg text-gray-600 mb-6">Only authenticated users can see this page.</p>
      <LogoutButton />
    </div>
  );
};

export default SecretPage;
