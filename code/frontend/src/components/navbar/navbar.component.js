function navbar() {
  return (
    <div>
      <nav class="bg-dark">
        <div class="max-w-6xl mx-auto px-4">
          <div class="pt-2 flex justify-between">
            <div class="flex space-x-4">
              <div className="">

                <p href="4" class="flex items-center py-3 px-2 text-white hover:text-gray-900">
                  <svg class="h-6 w-6 mr-1 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                  </svg>
                  <span class="font-bold" type="button">Currier Mate</span>
                </p>
              </div>
              <div class="hidden md:flex items-center space-x-1">
              <a href="/home" className="pb-3 m-2 text-white no-underline duration-300 hover:text-blue-800 hover:font-normal hover:animate-pulse">Home</a>
                <a href="/package" className="pb-3 m-2 text-white no-underline duration-300 hover:text-blue-800 hover:font-normal hover:animate-pulse">Packages</a>
                <a href="4" className="pb-3 m-2 text-white no-underline duration-300 hover:text-blue-800 hover:font-normal hover:animate-pulse">Payment</a>
                <a href="4" className="pb-3 m-2 text-white no-underline duration-300 hover:text-blue-800 hover:font-normal hover:animate-pulse">Tracking</a>
                <a href="4" className="pb-3 m-2 text-white no-underline duration-300 hover:text-blue-800 hover:font-normal hover:animate-pulse">Order</a>


              </div>
            </div>
            <div class="hidden md:flex items-center space-x-1">
              <p href="4" type="button" class="text-white py-3 px-3">Login</p>
              <p href="4" type="button" class="text-black py-2 px-3 bg-yellow-400 hover:bg-yellow-300 hover:text-yellow-800 rounded transition duration-300">Signup</p>
            </div>
            <div class="md:hidden flex items-center">
              <button class=" mobile-menu-button">
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default navbar;