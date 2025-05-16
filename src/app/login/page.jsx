'use client';

export default function Page() {

    function handleSubmit (event) {
        event.preventDefault()
        console.log(event, event.target)
    }
    return ( 
    
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <form className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md space-y-6"
        onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
  
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
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