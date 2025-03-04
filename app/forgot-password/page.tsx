'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleResetRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement password reset logic
    console.log('Requesting password reset for:', email);
    router.push('/login');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 to-blue-900 text-white p-6">
      <div className="w-full max-w-md bg-black bg-opacity-30 p-8 rounded-2xl shadow-lg backdrop-blur-lg">
        <h2 className="text-3xl font-bold text-center">Reset Password</h2>
        <p className="text-center text-gray-300">Enter your email to receive reset instructions</p>
        <form onSubmit={handleResetRequest} className="mt-6 space-y-4">
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
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition p-3 rounded-xl font-semibold"
          >
            Send Reset Link
          </button>
        </form>
        <div className="text-center mt-4">
          <Link href="/login" className="text-blue-400 hover:underline">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}
