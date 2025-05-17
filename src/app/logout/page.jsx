'use client';

import { useRouter } from "next/navigation";

const LOGOUT_URL = '/api/logout/';

export default function Page() {

  const router = useRouter()
  async function handleClick(event) {
    event.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: "",
    };
    const response = await fetch(LOGOUT_URL, requestOptions);
    if (response.ok) {
        console.log("Logged out");
        router.replace('/login')
    } 
  }

  return (
<div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md text-center space-y-4">
        <h1 className="text-2xl font-bold text-gray-800">Are you sure you want to log out?</h1>
        <p className="text-gray-600">
          Click the button below to securely log out of your account.
        </p>
        <button
          onClick={handleClick}
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition duration-200 disabled:opacity-50"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
