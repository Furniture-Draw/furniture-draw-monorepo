'use client';
import { Register } from '@furniture-draw/register';

export default function Login() {
  return (
    <div className="min-h-screen bg-gray-50">
      <br />
      <br />
      <br />
      <br />
      <br />
      <Register
        onHandleSubmit={({
          username,
          email,
          password,
          isPrivacyPolicyAccepted,
        }) => {
          console.log(
            'form props',
            username,
            email,
            password,
            isPrivacyPolicyAccepted
          );
        }}
        onGoogleClick={() => {
          console.log('google clicked');
        }}
      />

      <div className="text-center mt-4">
        <span className="text-gray-600">Do you have an account? </span>
        <a
          href="http://localhost:3000/login"
          className="text-blue-500 hover:text-blue-700 font-semibold"
        >
          Sign in
        </a>
      </div>
    </div>
  );
}
