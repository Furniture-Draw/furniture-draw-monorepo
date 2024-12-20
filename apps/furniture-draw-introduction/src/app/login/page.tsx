'use client';
import { LoginPage } from '@furniture-draw/login-register-page';
import { Navigation } from '@furniture-draw/navigation';


export default function Login() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation/>
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
