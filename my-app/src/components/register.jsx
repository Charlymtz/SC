import { NavLink } from "react-router-dom"
import registerps from '../img/registerps.png'



function Register() {
  return (
    <div className="dark:bg-gradient-to-r from-white via-blue-900 to-blue-300 dark:text-yellow-50">
      <section className="relative flex flex-wrap lg:h-screen lg:items-center">
        <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
          <img alt="" src={registerps} className="absolute inset-0 h-full w-full object-cover" />
        </div>
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24 bg-lavender-200 from-violet-900 via-fuchsia-700 to-violet-900 text-white">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>
            <div className="flex-1 md:flex md:items-center md:gap-12 justify-center">
            <a className="block text-teal-600">
              <span className="sr-only">
                </span>
              <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="150" height="150" viewBox="0 0 918 968" preserveAspectRatio="xMidYMid meet">
              <g transform="translate(0.000000,968.000000) scale(0.100000,-0.100000)" fill="#132136" stroke="none">
              <path d="M3288 6948 c-9 -7 -34 -37 -56 -66 -74 -100 -157 -159 -477 -345 -276 -160 -384 -236 -505 -357 -118 -118 -167 -193 -206 -314 -127 -401 118 -784 671 -1047 145 -69 278 -119 433 -163 l117 -33 -5 -49 c-3 -27 -5 -98 -5 -159 0 -129 20 -198 90 -306 77 -120 187 -217 452 -398 l101 -70 -15 -52 c-23 -78 -14 -200 20 -266 34 -65 107 -137 170 -166 38 -18 47 -26 43 -42 -36 -152 6 -274 114 -331 62 -33 130 -31 246 6 l94 30 94 -30 c116 -37 184 -39 246 -6 108 57 150 179 114 331 -4 16 5 24 43 42 63 29 136 101 170 166 34 66 43 188 20 266 l-15 52 101 70 c265 181 375 278 452 398 70 108 90 177 90 306 0 61 -2 132 -5 159 l-5 49 117 33 c155 44 288 94 433 163 553 263 798 646 671 1047 -39 121 -88 196 -206 314 -121 121 -229 197 -505 357 -320 186 -403 245 -477 345 -50 67 -64 78 -103 78 -77 0 -97 -95 -50 -235 36 -109 93 -196 242 -372 205 -242 253 -324 255 -434 2 -107 -62 -189 -201 -259 -80 -40 -235 -87 -333 -101 -83 -12 -86 -12 -124 12 -69 43 -116 59 -291 104 -95 24 -210 60 -255 80 -46 21 -121 54 -168 75 -212 94 -408 94 -620 0 -47 -21 -122 -54 -168 -75 -45 -20 -160 -56 -255 -80 -175 -45 -222 -61 -291 -104 -38 -24 -41 -24 -124 -12 -98 14 -253 61 -333 101 -139 70 -203 152 -201 259 2 110 50 192 255 434 73 87 152 189 176 228 86 144 118 310 68 357 -26 24 -74 29 -99 10z m-229 -437 c-8 -11 -60 -73 -115 -139 -172 -202 -219 -302 -219 -462 0 -88 3 -101 33 -162 78 -159 287 -283 577 -343 44 -9 81 -18 84 -20 2 -3 -19 -109 -47 -237 -28 -128 -56 -261 -63 -296 l-12 -63 -31 7 c-213 45 -524 178 -707 301 -257 171 -379 354 -379 566 0 144 58 271 181 397 91 94 173 152 434 306 127 75 239 143 250 150 27 18 30 17 14 -5z m3316 -162 c232 -138 315 -198 404 -289 123 -126 181 -253 181 -397 0 -212 -122 -395 -379 -566 -183 -123 -494 -256 -707 -301 l-31 -7 -12 63 c-7 35 -35 168 -63 296 -28 128 -49 234 -47 237 3 2 40 11 84 20 290 60 499 184 577 343 30 61 33 74 33 162 0 160 -47 260 -219 462 -55 66 -107 129 -115 140 -16 22 -23 26 294 -163z m-1656 -636 c30 -8 116 -43 190 -78 141 -65 202 -86 384 -129 127 -30 196 -58 228 -92 18 -19 35 -78 80 -282 112 -496 142 -743 103 -843 -50 -126 -165 -242 -399 -403 l-157 -108 -38 37 c-78 76 -100 157 -100 365 l0 137 83 11 c205 29 317 144 348 358 10 65 14 75 34 80 58 15 79 94 37 137 -42 42 -238 34 -368 -14 -60 -23 -152 -101 -191 -162 -65 -103 -101 -267 -110 -502 -10 -267 28 -397 156 -537 78 -84 99 -120 107 -182 18 -126 -87 -225 -246 -233 -99 -5 -117 7 -72 47 18 17 43 30 55 30 28 0 65 32 73 64 7 28 -18 81 -41 90 -33 12 -96 5 -140 -15 -50 -24 -100 -77 -136 -144 -13 -25 -26 -45 -29 -45 -3 0 -16 20 -29 45 -36 67 -86 120 -136 144 -44 20 -107 27 -140 15 -23 -9 -48 -62 -41 -90 8 -32 45 -64 73 -64 12 0 37 -13 55 -30 45 -40 27 -52 -72 -47 -159 8 -264 107 -246 233 8 62 29 98 107 182 128 140 166 270 156 537 -9 235 -45 399 -110 502 -39 61 -131 139 -191 162 -79 29 -175 44 -266 39 -66 -3 -83 -7 -102 -25 -42 -43 -21 -122 37 -137 20 -5 24 -15 34 -80 31 -214 143 -329 349 -358 l82 -11 0 -137 c0 -208 -22 -289 -100 -365 l-38 -37 -157 108 c-234 161 -349 277 -399 403 -38 98 -13 320 90 786 30 138 60 266 66 285 22 73 76 103 255 146 179 42 242 63 378 126 168 78 197 88 275 97 81 8 149 4 219 -16z m-730 -1011 c36 -29 94 -130 107 -186 l7 -29 -47 6 c-114 16 -178 87 -192 213 l-7 54 48 -15 c26 -7 64 -27 84 -43z m1287 -1 c-16 -123 -80 -192 -191 -208 -40 -5 -45 -3 -45 13 0 25 45 121 75 160 26 33 115 84 148 84 18 0 19 -5 13 -49z m-770 -1596 c47 -32 81 -32 129 1 37 25 38 25 99 10 34 -9 76 -16 94 -16 29 0 31 -3 37 -43 10 -66 3 -98 -27 -120 l-26 -20 -96 32 c-56 18 -117 31 -146 31 -29 0 -90 -13 -146 -31 l-96 -32 -26 20 c-30 22 -37 54 -27 120 6 42 7 43 43 44 20 0 57 6 82 13 64 19 65 19 106 -9z"/>
              <path d="M3729 5180 c-9 -5 -22 -23 -29 -40 -15 -37 0 -81 33 -98 14 -7 101 -13 227 -14 245 -4 223 6 350 -160 47 -62 104 -127 127 -144 52 -40 117 -55 178 -42 67 14 119 60 215 186 127 166 105 156 350 160 126 1 213 7 227 14 12 6 27 24 34 40 16 38 -9 94 -44 103 -13 4 -125 5 -248 3 -222 -3 -224 -3 -269 -30 -55 -32 -114 -94 -195 -205 -33 -45 -72 -89 -87 -98 -26 -15 -30 -15 -55 0 -16 9 -55 53 -88 98 -81 111 -140 173 -195 205 -45 27 -46 27 -280 30 -141 1 -241 -2 -251 -8z"/>
              </g>
              <NavLink className='nav-link' to='/LandPage'> Home </NavLink>
             </svg>
            </a>
          </div>
          </div>
          

          <form action="#" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
          <div>
        <label htmlFor="Name" className="sr-only">Name</label>

        <div className="relative">
          <input
            type="email"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-black shadow-sm"
            placeholder="Enter Name"
          />

          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
          <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#0F4C7F"><g><rect fill="none" height="24" width="24"/></g><g><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z"/></g>
          </svg>
          </span>
        </div>
      </div>
      <div>
        <label htmlFor="email" className="sr-only">Email</label>

        <div className="relative">
          <input
            type="email"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-black shadow-sm"
            placeholder="Enter email"
          />

          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#0F4C7F"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
          </svg>
          </span>
        </div>
      </div>

      <div>
        <label htmlFor="password" className="sr-only">Password</label>

        <div className="relative">
          <input
            type="password"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-black shadow-sm"
            placeholder="Enter password"
          />

          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#0F4C7F"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
          </svg>
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-sm text-white">
          <a className="underline" href="#/">
          <NavLink className='nav-link' to='/Login'>Sign in</NavLink>
          </a>
        </p>

        <button type="submit" className="inline-block rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white">
          <a className="underline" href="#">
          <NavLink className='nav-link' to='/MainPage'>Sign up</NavLink>
          </a>
        </button>
      </div>
      </form>
      <br />
      <hr />

      <div>
  <form action="#" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
    <div className="p-3 bg-white rounded-md flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="30px" height="30px" fill="#0F4C7F" role="button"><path d="M 26 2 C 13.308594 2 3 12.308594 3 25 C 3 37.691406 13.308594 48 26 48 C 35.917969 48 41.972656 43.4375 45.125 37.78125 C 48.277344 32.125 48.675781 25.480469 47.71875 20.9375 L 47.53125 20.15625 L 46.75 20.15625 L 26 20.125 L 25 20.125 L 25 30.53125 L 36.4375 30.53125 C 34.710938 34.53125 31.195313 37.28125 26 37.28125 C 19.210938 37.28125 13.71875 31.789063 13.71875 25 C 13.71875 18.210938 19.210938 12.71875 26 12.71875 C 29.050781 12.71875 31.820313 13.847656 33.96875 15.6875 L 34.6875 16.28125 L 41.53125 9.4375 L 42.25 8.6875 L 41.5 8 C 37.414063 4.277344 31.960938 2 26 2 Z M 26 4 C 31.074219 4 35.652344 5.855469 39.28125 8.84375 L 34.46875 13.65625 C 32.089844 11.878906 29.199219 10.71875 26 10.71875 C 18.128906 10.71875 11.71875 17.128906 11.71875 25 C 11.71875 32.871094 18.128906 39.28125 26 39.28125 C 32.550781 39.28125 37.261719 35.265625 38.9375 29.8125 L 39.34375 28.53125 L 27 28.53125 L 27 22.125 L 45.84375 22.15625 C 46.507813 26.191406 46.066406 31.984375 43.375 36.8125 C 40.515625 41.9375 35.320313 46 26 46 C 14.386719 46 5 36.609375 5 25 C 5 13.390625 14.386719 4 26 4 Z"/></svg>
            <div className="ml-2 text-sm font-medium text-blue-700 flex items-center">
            <a className="underline" href="https://accounts.google.com/">
              <span className="inline-block align-middle" role="button">Continue with Google</span>
            </a>
            </div>
            </div>
            <div className="p-3 bg-white rounded-md flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="30px" height="30px" fill="#0F4C7F" role="button" ><path d="M 25 3 C 12.861562 3 3 12.861562 3 25 C 3 36.019135 11.127533 45.138355 21.712891 46.728516 L 22.861328 46.902344 L 22.861328 29.566406 L 17.664062 29.566406 L 17.664062 26.046875 L 22.861328 26.046875 L 22.861328 21.373047 C 22.861328 18.494965 23.551973 16.599417 24.695312 15.410156 C 25.838652 14.220896 27.528004 13.621094 29.878906 13.621094 C 31.758714 13.621094 32.490022 13.734993 33.185547 13.820312 L 33.185547 16.701172 L 30.738281 16.701172 C 29.349697 16.701172 28.210449 17.475903 27.619141 18.507812 C 27.027832 19.539724 26.84375 20.771816 26.84375 22.027344 L 26.84375 26.044922 L 32.966797 26.044922 L 32.421875 29.564453 L 26.84375 29.564453 L 26.84375 46.929688 L 27.978516 46.775391 C 38.71434 45.319366 47 36.126845 47 25 C 47 12.861562 37.138438 3 25 3 z M 25 5 C 36.057562 5 45 13.942438 45 25 C 45 34.729791 38.035799 42.731796 28.84375 44.533203 L 28.84375 31.564453 L 34.136719 31.564453 L 35.298828 24.044922 L 28.84375 24.044922 L 28.84375 22.027344 C 28.84375 20.989871 29.033574 20.060293 29.353516 19.501953 C 29.673457 18.943614 29.981865 18.701172 30.738281 18.701172 L 35.185547 18.701172 L 35.185547 12.009766 L 34.318359 11.892578 C 33.718567 11.811418 32.349197 11.621094 29.878906 11.621094 C 27.175808 11.621094 24.855567 12.357448 23.253906 14.023438 C 21.652246 15.689426 20.861328 18.170128 20.861328 21.373047 L 20.861328 24.046875 L 15.664062 24.046875 L 15.664062 31.566406 L 20.861328 31.566406 L 20.861328 44.470703 C 11.816995 42.554813 5 34.624447 5 25 C 5 13.942438 13.942438 5 25 5 z"/></svg>
                    <div className="ml-2 text-sm font-medium text-blue-700 flex items-center">
                    <a className="underline" href="https://facebook.com/">
                      <span className="inline-block align-middle" role="button">Continue with Facebook</span>
                    </a>
                    </div>
            </div>
            <div className="p-3 bg-white rounded-md flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="30px" height="30px" fill="#0F4C7F"role="button" ><path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"/></svg>
                    <div className="ml-2 text-sm font-medium text-blue-700 flex items-center">
                    <a className="underline" href="https://instagram.com/">
                      <span className="inline-block align-middle" role="button">Continue with Instagram</span>
                    </a>
                    </div>
            </div>
            <div className="p-3 bg-white rounded-md flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="30px" height="30px"  fill="#0F4C7F" role="button"><path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"/></svg>
                    <div className="ml-2 text-sm font-medium text-blue-700 flex items-center">
                    <a className="underline" href="https://twitter.com/">
                      <span className="inline-block align-middle" role="button">Continue with X</span>
                    </a>
                    </div>
            </div>
        </form>
      </div>

    </div>
  </section>
</div>
  );
}




export default Register;
