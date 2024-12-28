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
    <div className="text-center mt-4">
        <span className="text-gray-600">Hesabınız yok mu? </span>
        <a
          href="http://localhost:3000/register"
          className="text-blue-500 hover:text-blue-700 font-semibold"
        >
          Kayıt Ol
        </a>
      </div>
    </div>
  );
}
