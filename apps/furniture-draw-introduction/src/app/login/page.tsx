'use client';
import { LoginPage } from '@furniture-draw/login-register-page';

export default function Login() {
  return (
    <div className="min-h-screen bg-gray-50">
      <LoginPage
        logo="https://www.mobilyaplan.app/_astro/mp-draw-logo.DDe8SrXP_1IE5RT.webp"
        onHandleSubmit={({ email, password }) => {
          console.log('form props', email, password);
        }}
        onGoogleClick={() => {
          console.log('google clicked');
        }}
      />
    </div>
  );
}
