import LoginForm from "@/component/form/loginForm/LoginForm";
import toast, { Toaster } from "react-hot-toast";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Toaster position="top-right" />
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-4xl font-bold  pb-2 text-center bg-linear-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
          Login
        </h2>
        <LoginForm />
      </div>
    </div>
  );
}
