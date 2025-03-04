'use client';

import { useState } from 'react';
import { Bell, User } from 'lucide-react';

export default function Dashboard() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-gray-800 shadow-lg">
        <h1 className="text-2xl font-bold">PFT Dashboard</h1>
        <div className="flex gap-4 relative">
          <button
            className="p-2 bg-gray-700 rounded-full hover:bg-gray-600"
            onClick={() => {
              setShowNotifications(!showNotifications);
              setShowProfile(false);
            }}
          >
            <Bell className="w-6 h-6" />
          </button>
          <button
            className="p-2 bg-gray-700 rounded-full hover:bg-gray-600"
            onClick={() => {
              setShowProfile(!showProfile);
              setShowNotifications(false);
            }}
          >
            <User className="w-6 h-6" />
          </button>
          
          {/* Notifications Pane */}
          {showNotifications && (
            <div className="absolute top-12 right-12 w-64 bg-gray-800 p-4 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold">Notifications</h3>
              <ul className="mt-2 text-sm text-gray-300">
                <li className="p-2 border-b border-gray-700">No new notifications</li>
              </ul>
            </div>
          )}
          
          {/* Profile Pane */}
          {showProfile && (
            <div className="absolute top-12 right-2 w-48 bg-gray-800 p-4 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold">Profile</h3>
              <ul className="mt-2 text-sm text-gray-300">
                <li className="p-2 border-b border-gray-700">View Profile</li>
                <li className="p-2">Logout</li>
              </ul>
            </div>
          )}
        </div>
      </header>
      
      {/* Dashboard Content */}
      <main className="p-6">
        <h2 className="text-xl font-semibold">Welcome to your personal finance dashboard</h2>
        <p className="text-gray-400">Track your income, expenses, and savings in one place.</p>
      </main>
    </div>
  );
}
