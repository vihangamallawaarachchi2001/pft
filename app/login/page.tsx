'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement authentication logic
    console.log('Logging in with:', { email, password });
    router.push('/dashboard');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 to-blue-900 text-white p-6">
      <div className="w-full max-w-md bg-black bg-opacity-30 p-8 rounded-2xl shadow-lg backdrop-blur-lg">
        <h2 className="text-3xl font-bold text-center">Welcome to PFT</h2>
        <p className="text-center text-gray-300">Manage your finances effortlessly</p>
        <form onSubmit={handleLogin} className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 p-3 bg-gray-800 text-white rounded-xl focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 p-3 bg-gray-800 text-white rounded-xl focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition p-3 rounded-xl font-semibold"
          >
            Log In
          </button>
        </form>
        <div className="text-center mt-4">
          <Link href="/forgot-password" className="text-blue-400 hover:underline">
            Forgot Password?
          </Link>
        </div>
        <div className="text-center mt-2">
          <span className="text-gray-400">Don't have an account?</span>
          <Link href="/signup" className="text-blue-400 hover:underline ml-1">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
