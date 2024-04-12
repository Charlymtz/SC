import { NavLink } from "react-router-dom"
import loginps from '../img/loginps.png'
function Login(){
    return(
<div className="dark:bg-gradient-to-l from-teal-900 via-teal-900 to-teal-500 dark:text-yellow-50">

  <section className="relative flex flex-wrap lg:h-screen lg:items-center">
    <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24 bg-lavender-200 from-violet-700 via-fuchsia-700 to-violet-400 text-white">
    <div className="flex-1 md:flex md:items-center md:gap-12 justify-center">
            <a className="block text-teal-600" href="#">
            <NavLink className='nav-link' to='/'>
              <span className="sr-only">
                </span>
              <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="200" height="200" viewBox="0 0 918 968" preserveAspectRatio="xMidYMid meet">
              <g transform="translate(0.000000,968.000000) scale(0.100000,-0.100000)" fill="#133621" stroke="none">
              <path d="M3288 6948 c-9 -7 -34 -37 -56 -66 -74 -100 -157 -159 -477 -345 -276 -160 -384 -236 -505 -357 -118 -118 -167 -193 -206 -314 -127 -401 118 -784 671 -1047 145 -69 278 -119 433 -163 l117 -33 -5 -49 c-3 -27 -5 -98 -5 -159 0 -129 20 -198 90 -306 77 -120 187 -217 452 -398 l101 -70 -15 -52 c-23 -78 -14 -200 20 -266 34 -65 107 -137 170 -166 38 -18 47 -26 43 -42 -36 -152 6 -274 114 -331 62 -33 130 -31 246 6 l94 30 94 -30 c116 -37 184 -39 246 -6 108 57 150 179 114 331 -4 16 5 24 43 42 63 29 136 101 170 166 34 66 43 188 20 266 l-15 52 101 70 c265 181 375 278 452 398 70 108 90 177 90 306 0 61 -2 132 -5 159 l-5 49 117 33 c155 44 288 94 433 163 553 263 798 646 671 1047 -39 121 -88 196 -206 314 -121 121 -229 197 -505 357 -320 186 -403 245 -477 345 -50 67 -64 78 -103 78 -77 0 -97 -95 -50 -235 36 -109 93 -196 242 -372 205 -242 253 -324 255 -434 2 -107 -62 -189 -201 -259 -80 -40 -235 -87 -333 -101 -83 -12 -86 -12 -124 12 -69 43 -116 59 -291 104 -95 24 -210 60 -255 80 -46 21 -121 54 -168 75 -212 94 -408 94 -620 0 -47 -21 -122 -54 -168 -75 -45 -20 -160 -56 -255 -80 -175 -45 -222 -61 -291 -104 -38 -24 -41 -24 -124 -12 -98 14 -253 61 -333 101 -139 70 -203 152 -201 259 2 110 50 192 255 434 73 87 152 189 176 228 86 144 118 310 68 357 -26 24 -74 29 -99 10z m-229 -437 c-8 -11 -60 -73 -115 -139 -172 -202 -219 -302 -219 -462 0 -88 3 -101 33 -162 78 -159 287 -283 577 -343 44 -9 81 -18 84 -20 2 -3 -19 -109 -47 -237 -28 -128 -56 -261 -63 -296 l-12 -63 -31 7 c-213 45 -524 178 -707 301 -257 171 -379 354 -379 566 0 144 58 271 181 397 91 94 173 152 434 306 127 75 239 143 250 150 27 18 30 17 14 -5z m3316 -162 c232 -138 315 -198 404 -289 123 -126 181 -253 181 -397 0 -212 -122 -395 -379 -566 -183 -123 -494 -256 -707 -301 l-31 -7 -12 63 c-7 35 -35 168 -63 296 -28 128 -49 234 -47 237 3 2 40 11 84 20 290 60 499 184 577 343 30 61 33 74 33 162 0 160 -47 260 -219 462 -55 66 -107 129 -115 140 -16 22 -23 26 294 -163z m-1656 -636 c30 -8 116 -43 190 -78 141 -65 202 -86 384 -129 127 -30 196 -58 228 -92 18 -19 35 -78 80 -282 112 -496 142 -743 103 -843 -50 -126 -165 -242 -399 -403 l-157 -108 -38 37 c-78 76 -100 157 -100 365 l0 137 83 11 c205 29 317 144 348 358 10 65 14 75 34 80 58 15 79 94 37 137 -42 42 -238 34 -368 -14 -60 -23 -152 -101 -191 -162 -65 -103 -101 -267 -110 -502 -10 -267 28 -397 156 -537 78 -84 99 -120 107 -182 18 -126 -87 -225 -246 -233 -99 -5 -117 7 -72 47 18 17 43 30 55 30 28 0 65 32 73 64 7 28 -18 81 -41 90 -33 12 -96 5 -140 -15 -50 -24 -100 -77 -136 -144 -13 -25 -26 -45 -29 -45 -3 0 -16 20 -29 45 -36 67 -86 120 -136 144 -44 20 -107 27 -140 15 -23 -9 -48 -62 -41 -90 8 -32 45 -64 73 -64 12 0 37 -13 55 -30 45 -40 27 -52 -72 -47 -159 8 -264 107 -246 233 8 62 29 98 107 182 128 140 166 270 156 537 -9 235 -45 399 -110 502 -39 61 -131 139 -191 162 -79 29 -175 44 -266 39 -66 -3 -83 -7 -102 -25 -42 -43 -21 -122 37 -137 20 -5 24 -15 34 -80 31 -214 143 -329 349 -358 l82 -11 0 -137 c0 -208 -22 -289 -100 -365 l-38 -37 -157 108 c-234 161 -349 277 -399 403 -38 98 -13 320 90 786 30 138 60 266 66 285 22 73 76 103 255 146 179 42 242 63 378 126 168 78 197 88 275 97 81 8 149 4 219 -16z m-730 -1011 c36 -29 94 -130 107 -186 l7 -29 -47 6 c-114 16 -178 87 -192 213 l-7 54 48 -15 c26 -7 64 -27 84 -43z m1287 -1 c-16 -123 -80 -192 -191 -208 -40 -5 -45 -3 -45 13 0 25 45 121 75 160 26 33 115 84 148 84 18 0 19 -5 13 -49z m-770 -1596 c47 -32 81 -32 129 1 37 25 38 25 99 10 34 -9 76 -16 94 -16 29 0 31 -3 37 -43 10 -66 3 -98 -27 -120 l-26 -20 -96 32 c-56 18 -117 31 -146 31 -29 0 -90 -13 -146 -31 l-96 -32 -26 20 c-30 22 -37 54 -27 120 6 42 7 43 43 44 20 0 57 6 82 13 64 19 65 19 106 -9z"/>
              <path d="M3729 5180 c-9 -5 -22 -23 -29 -40 -15 -37 0 -81 33 -98 14 -7 101 -13 227 -14 245 -4 223 6 350 -160 47 -62 104 -127 127 -144 52 -40 117 -55 178 -42 67 14 119 60 215 186 127 166 105 156 350 160 126 1 213 7 227 14 12 6 27 24 34 40 16 38 -9 94 -44 103 -13 4 -125 5 -248 3 -222 -3 -224 -3 -269 -30 -55 -32 -114 -94 -195 -205 -33 -45 -72 -89 -87 -98 -26 -15 -30 -15 -55 0 -16 9 -55 53 -88 98 -81 111 -140 173 -195 205 -45 27 -46 27 -280 30 -141 1 -241 -2 -251 -8z"/>
              </g>
             </svg>
             <h1 className="text-center font-bold text-teal-800 sm:text-3xl" style={{ fontFamily: 'Roboto, sans-serif' }}>Bull Threads</h1>
            </NavLink>
            </a>
          </div>

    <form action="#" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
      <div>
        <label htmlFor="email" className="sr-only">Email</label>

        <div className="relative">
          <input
            type="email"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-black shadow-sm"
            placeholder="Enter email"
          />

          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-sm text-white">
          No account?
          <a className="underline" href="#">
          <NavLink className='nav-link' to='/Register'>Sign up</NavLink>
            </a>
        </p>

        <button
          type="submit"
          className="inline-block rounded-lg bg-teal-600 px-5 py-3 text-sm font-medium text-white"
        >
          Sign in
        </button>
      </div>
    </form>
  </div>

  <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
    <img
      alt=""
      src={loginps}
      className="absolute inset-0 h-full w-full object-cover"
    />
  </div>
</section>
</div>
    )
}

export default Login