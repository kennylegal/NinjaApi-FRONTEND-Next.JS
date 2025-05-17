'use client';

import { useRouter } from "next/navigation";

const LOGIN_URL = '/api/login/';

export default function Page() {

  const router = useRouter()
  async function handleSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const objectForm = Object.fromEntries(formData);
    const jsonData = JSON.stringify(objectForm);

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: jsonData,
    };

    try {
      const response = await fetch(LOGIN_URL, requestOptions);

      if (response.ok) {
        console.log("Logged In");
        router.replace("/")
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const data = await response.json();
          console.log(data);

        } else {
          console.log("No JSON response body.");
        }
      } else {
        console.error("Login failed", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md space-y-6"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>

        <div>
          <label htmlFor="Username" className="block text-sm font-medium text-gray-700 mb-1">
            Username
          </label>
          <input
            id="username"
            name="username"
            type="text"
            className="w-full px-4 py-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            className="w-full px-4 py-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Login
        </button>
      </form>
    </div>
  );
}
