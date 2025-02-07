'use client';
import React, { useState } from 'react';
import styles from './resetpassword.module.css';

export function Resetpassword() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPassword || !confirmPassword) {
      setError('Şifre alanları boş bırakılamaz.');
    } else if (newPassword !== confirmPassword) {
      setError('Şifreler eşleşmiyor.');
    } else {
      setError('');
      console.log('Şifre sıfırlama başarılı!');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleReset}
        className={`${styles.card} bg-white shadow-md rounded-lg overflow-hidden max-w-md w-full`}
      >
        <img
          src="./images/mp-draw-logo.jpeg"
          alt="Reset Password"
          className="w-full h-82 object-cover"
        />
        <div className="p-6">
          <h1 className="text-2xl font-semibold mb-4">Reset Password</h1>
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className={`${styles.inputField} w-full border border-gray-300 rounded-lg px-3 py-2 mb-3 focus:outline-none focus:border-blue-500`}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={`${styles.inputField} w-full border border-gray-300 rounded-lg px-3 py-2 mb-4 focus:outline-none focus:border-blue-500`}
          />
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            type="submit"
            className={`${styles.button} w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200`}
          >
            Reset Password
          </button>
        </div>
      </form>
    </div>
  );
}

export default Resetpassword;
