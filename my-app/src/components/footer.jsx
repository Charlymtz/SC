export default function Footer(){
    return(

<footer className="bg-white">
<div className="mx-auto max-w-screen pb-6 pt-13 border border-gray-300 border-2">
    <div className="lg:flex lg:items-center lg:justify-between">
    <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="block text-teal-600" href="#">
              <span className="sr-only">Home</span>
              <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="80" height="80" viewBox="0 0 918 968" preserveAspectRatio="xMidYMid meet">
              <g transform="translate(0.000000,968.000000) scale(0.100000,-0.100000)" fill="#0F4C7F" stroke="none">
              <path d="M3288 6948 c-9 -7 -34 -37 -56 -66 -74 -100 -157 -159 -477 -345 -276 -160 -384 -236 -505 -357 -118 -118 -167 -193 -206 -314 -127 -401 118 -784 671 -1047 145 -69 278 -119 433 -163 l117 -33 -5 -49 c-3 -27 -5 -98 -5 -159 0 -129 20 -198 90 -306 77 -120 187 -217 452 -398 l101 -70 -15 -52 c-23 -78 -14 -200 20 -266 34 -65 107 -137 170 -166 38 -18 47 -26 43 -42 -36 -152 6 -274 114 -331 62 -33 130 -31 246 6 l94 30 94 -30 c116 -37 184 -39 246 -6 108 57 150 179 114 331 -4 16 5 24 43 42 63 29 136 101 170 166 34 66 43 188 20 266 l-15 52 101 70 c265 181 375 278 452 398 70 108 90 177 90 306 0 61 -2 132 -5 159 l-5 49 117 33 c155 44 288 94 433 163 553 263 798 646 671 1047 -39 121 -88 196 -206 314 -121 121 -229 197 -505 357 -320 186 -403 245 -477 345 -50 67 -64 78 -103 78 -77 0 -97 -95 -50 -235 36 -109 93 -196 242 -372 205 -242 253 -324 255 -434 2 -107 -62 -189 -201 -259 -80 -40 -235 -87 -333 -101 -83 -12 -86 -12 -124 12 -69 43 -116 59 -291 104 -95 24 -210 60 -255 80 -46 21 -121 54 -168 75 -212 94 -408 94 -620 0 -47 -21 -122 -54 -168 -75 -45 -20 -160 -56 -255 -80 -175 -45 -222 -61 -291 -104 -38 -24 -41 -24 -124 -12 -98 14 -253 61 -333 101 -139 70 -203 152 -201 259 2 110 50 192 255 434 73 87 152 189 176 228 86 144 118 310 68 357 -26 24 -74 29 -99 10z m-229 -437 c-8 -11 -60 -73 -115 -139 -172 -202 -219 -302 -219 -462 0 -88 3 -101 33 -162 78 -159 287 -283 577 -343 44 -9 81 -18 84 -20 2 -3 -19 -109 -47 -237 -28 -128 -56 -261 -63 -296 l-12 -63 -31 7 c-213 45 -524 178 -707 301 -257 171 -379 354 -379 566 0 144 58 271 181 397 91 94 173 152 434 306 127 75 239 143 250 150 27 18 30 17 14 -5z m3316 -162 c232 -138 315 -198 404 -289 123 -126 181 -253 181 -397 0 -212 -122 -395 -379 -566 -183 -123 -494 -256 -707 -301 l-31 -7 -12 63 c-7 35 -35 168 -63 296 -28 128 -49 234 -47 237 3 2 40 11 84 20 290 60 499 184 577 343 30 61 33 74 33 162 0 160 -47 260 -219 462 -55 66 -107 129 -115 140 -16 22 -23 26 294 -163z m-1656 -636 c30 -8 116 -43 190 -78 141 -65 202 -86 384 -129 127 -30 196 -58 228 -92 18 -19 35 -78 80 -282 112 -496 142 -743 103 -843 -50 -126 -165 -242 -399 -403 l-157 -108 -38 37 c-78 76 -100 157 -100 365 l0 137 83 11 c205 29 317 144 348 358 10 65 14 75 34 80 58 15 79 94 37 137 -42 42 -238 34 -368 -14 -60 -23 -152 -101 -191 -162 -65 -103 -101 -267 -110 -502 -10 -267 28 -397 156 -537 78 -84 99 -120 107 -182 18 -126 -87 -225 -246 -233 -99 -5 -117 7 -72 47 18 17 43 30 55 30 28 0 65 32 73 64 7 28 -18 81 -41 90 -33 12 -96 5 -140 -15 -50 -24 -100 -77 -136 -144 -13 -25 -26 -45 -29 -45 -3 0 -16 20 -29 45 -36 67 -86 120 -136 144 -44 20 -107 27 -140 15 -23 -9 -48 -62 -41 -90 8 -32 45 -64 73 -64 12 0 37 -13 55 -30 45 -40 27 -52 -72 -47 -159 8 -264 107 -246 233 8 62 29 98 107 182 128 140 166 270 156 537 -9 235 -45 399 -110 502 -39 61 -131 139 -191 162 -79 29 -175 44 -266 39 -66 -3 -83 -7 -102 -25 -42 -43 -21 -122 37 -137 20 -5 24 -15 34 -80 31 -214 143 -329 349 -358 l82 -11 0 -137 c0 -208 -22 -289 -100 -365 l-38 -37 -157 108 c-234 161 -349 277 -399 403 -38 98 -13 320 90 786 30 138 60 266 66 285 22 73 76 103 255 146 179 42 242 63 378 126 168 78 197 88 275 97 81 8 149 4 219 -16z m-730 -1011 c36 -29 94 -130 107 -186 l7 -29 -47 6 c-114 16 -178 87 -192 213 l-7 54 48 -15 c26 -7 64 -27 84 -43z m1287 -1 c-16 -123 -80 -192 -191 -208 -40 -5 -45 -3 -45 13 0 25 45 121 75 160 26 33 115 84 148 84 18 0 19 -5 13 -49z m-770 -1596 c47 -32 81 -32 129 1 37 25 38 25 99 10 34 -9 76 -16 94 -16 29 0 31 -3 37 -43 10 -66 3 -98 -27 -120 l-26 -20 -96 32 c-56 18 -117 31 -146 31 -29 0 -90 -13 -146 -31 l-96 -32 -26 20 c-30 22 -37 54 -27 120 6 42 7 43 43 44 20 0 57 6 82 13 64 19 65 19 106 -9z"/>
              <path d="M3729 5180 c-9 -5 -22 -23 -29 -40 -15 -37 0 -81 33 -98 14 -7 101 -13 227 -14 245 -4 223 6 350 -160 47 -62 104 -127 127 -144 52 -40 117 -55 178 -42 67 14 119 60 215 186 127 166 105 156 350 160 126 1 213 7 227 14 12 6 27 24 34 40 16 38 -9 94 -44 103 -13 4 -125 5 -248 3 -222 -3 -224 -3 -269 -30 -55 -32 -114 -94 -195 -205 -33 -45 -72 -89 -87 -98 -26 -15 -30 -15 -55 0 -16 9 -55 53 -88 98 -81 111 -140 173 -195 205 -45 27 -46 27 -280 30 -141 1 -241 -2 -251 -8z"/>
              </g>
             </svg>
            </a>
          </div>
      <p className="mt-4 max-w-md text-center leading-relaxed text-gray-500 sm:text-left lg:mt-0">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa
        cum itaque neque.
      </p>
    </div>

    <div
      className="mt-16 grid grid-cols-1 gap-8 border-t border-gray-100 pt-16 md:grid-cols-4 lg:grid-cols-6"
    >
      <div className="text-center sm:text-left">
        <p className="text-lg font-medium text-gray-900">About Us</p>

        <ul className="mt-8 space-y-4 text-sm">
          <li>
            <a className="text-gray-700 transition hover:text-gray-700/75" href="#">
              Company History
            </a>
          </li>

          <li>
            <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Meet the Team </a>
          </li>

          <li>
            <a className="text-gray-700 transition hover:text-gray-700/75" href="#">
              Employee Handbook
            </a>
          </li>

          <li>
            <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Careers </a>
          </li>
        </ul>
      </div>

      <div className="text-center sm:text-left">
        <p className="text-lg font-medium text-gray-900">Our Services</p>

        <ul className="mt-8 space-y-4 text-sm">
          <li>
            <a className="text-gray-700 transition hover:text-gray-700/75" href="#">
              Web Development
            </a>
          </li>

          <li>
            <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Web Design </a>
          </li>

          <li>
            <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Marketing </a>
          </li>

          <li>
            <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Google Ads </a>
          </li>
        </ul>
      </div>

      <div className="text-center sm:text-left">
        <p className="text-lg font-medium text-gray-900">Resources</p>

        <ul className="mt-8 space-y-4 text-sm">
          <li>
            <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Online Guides </a>
          </li>

          <li>
            <a className="text-gray-700 transition hover:text-gray-700/75" href="#">
              Conference Notes
            </a>
          </li>

          <li>
            <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Forum </a>
          </li>

          <li>
            <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Downloads </a>
          </li>

          <li>
            <a className="text-gray-700 transition hover:text-gray-700/75" href="#">
              Upcoming Events
            </a>
          </li>
        </ul>
      </div>

      <div className="text-center sm:text-left">
        <p className="text-lg font-medium text-gray-900">Helpful Links</p>

        <ul className="mt-8 space-y-4 text-sm">
          <li>
            <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> FAQs </a>
          </li>

          <li>
            <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Support </a>
          </li>

          <li>
            <a
              className="group flex justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
              href="#"
            >
              <span className="text-gray-700 transition group-hover:text-gray-700/75"> Live Chat </span>

              <span className="relative flex h-2 w-2">
                <span
                  className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75"
                ></span>
                <span className="relative inline-flex size-2 rounded-full bg-teal-500"></span>
              </span>
            </a>
          </li>
        </ul>
      </div>

      <div className="text-center sm:text-left md:col-span-4 lg:col-span-2">
        <p className="text-lg font-medium text-gray-900">Stay in Touch</p>

        <div className="mx-auto mt-8 max-w-md sm:ms-0">
          <p className="text-center leading-relaxed text-gray-500 ltr:sm:text-left rtl:sm:text-right">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum id, iure consectetur et
            error hic!
          </p>

          <form className="mt-4">
            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:items-start">
              <label htmlFor="email" className="sr-only">Email</label>

              <input
                className="w-full rounded-full border-gray-200 px-6 py-3 shadow-sm"
                type="email"
                placeholder="Enter your email"
              />

              <button
                className="block rounded-full bg-indigo-500 px-8 py-3 font-medium text-white transition hover:bg-indigo-600"
                type="submit"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div className="mt-16 border-t border-gray-100 pt-6 sm:flex sm:items-center sm:justify-between">
      <p className="text-center text-sm text-gray-500 sm:text-left">
        Copyright &copy; 2022. All rights reserved.
      </p>

      <ul className="mt-4 flex justify-center gap-6 sm:mt-0 sm:justify-start">
        <li>
          <a
            href="#"
            rel="noreferrer"
            target="_blank"
            className="text-teal-700 transition hover:text-teal-700/75"
          >
            <span className="sr-only">Facebook</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </li>

        <li>
          <a
            href="#"
            rel="noreferrer"
            target="_blank"
            className="text-teal-700 transition hover:text-teal-700/75"
          >
            <span className="sr-only">Instagram</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </li>

        <li>
          <a
            href="#"
            rel="noreferrer"
            target="_blank"
            className="text-teal-700 transition hover:text-teal-700/75"
          >
            <span className="sr-only">Twitter</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
              />
            </svg>
          </a>
        </li>

        <li>
          <a
            href="#"
            rel="noreferrer"
            target="_blank"
            className="text-teal-700 transition hover:text-teal-700/75"
          >
            <span className="sr-only">GitHub</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </li>

        <li>
          <a
            href="#"
            rel="noreferrer"
            target="_blank"
            className="text-teal-700 transition hover:text-teal-700/75"
          >
            <span className="sr-only">Dribbble</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </div>
</footer>
    )
}