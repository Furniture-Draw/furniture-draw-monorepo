'use client';
import React, { useState } from 'react';
import styles from './resetpassword.module.css';
import { useSearchParams } from 'next/navigation';

export function Resetpassword() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const searchParams = useSearchParams();
  const email = searchParams.get('email');
  const token = searchParams.get('token');

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!newPassword || !confirmPassword) {
      setError('Şifre alanları boş bırakılamaz.');
      return;
    }
  
    if (newPassword !== confirmPassword) {
      setError('Şifreler eşleşmiyor.');
      return;
    }
  
    if (!email || !token) {
      setError('Geçersiz şifre sıfırlama linki.');
      return;
    }
  
    setIsLoading(true);
    setError('');
  
    try {
      const response = await fetch('http://localhost:8080/auth/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          token,
          newPassword
        })
      });
  
      const result = await response.text();
  
      if (response.ok) {
        if (result === 'Password reset successful') {
          setSuccess('Şifre başarıyla sıfırlandı! Giriş sayfasına yönlendiriliyorsunuz...');
          setTimeout(() => {
            window.location.href = '/login';
          }, 3000);
        } else {
          setError('Şifre sıfırlama işlemi başarısız. Bu link daha önce kullanılmış. Lütfen yeni bir şifre sıfırlama linki talep edin.');
          setIsLoading(false);
        }
      } else {
        if (result.includes('used') || result.includes('Invalid or used')) {
          setError('Bu link daha önce kullanılmış. Lütfen yeni bir şifre sıfırlama linki talep edin.');
          setIsLoading(false);
        } else if (result.includes('expired')) {
          setError('Şifre sıfırlama linki süresi dolmuş. Lütfen yeni bir link talep edin.');
          setIsLoading(false);
        } else {
          setError(result);
          setIsLoading(false);
        }
      }
    } catch (error) {
      setError('Şifre sıfırlama sırasında bir hata oluştu. Lütfen tekrar deneyin.');
      setIsLoading(false);
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
            disabled={isLoading}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={`${styles.inputField} w-full border border-gray-300 rounded-lg px-3 py-2 mb-4 focus:outline-none focus:border-blue-500`}
            disabled={isLoading}
          />
          {error && <p className="text-red-500 mb-4">{error}</p>}
          {success && <p className="text-green-500 mb-4">{success}</p>}
          <button
            type="submit"
            className={`${styles.button} w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200`}
            disabled={isLoading}
          >
            {isLoading ? 'Şifre Sıfırlanıyor...' : 'Şifreyi Sıfırla'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Resetpassword;
