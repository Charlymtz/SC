import adidascls from '../img/adidascls.png'
import spcl from '../img/spcl.png'
import balenozuna from '../img/balenozuna.png'

export default function SectionOne(){
    return(
        <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header className="text-center">
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">"I still have my feet on the ground, I just wear better shoes.”</h2>
            <br/>
            <p className="text-sm font-medium uppercase tracking-widest text-black">
            - Oprah Winfrey
            </p>
          </header>
      
          <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
            <li>
              <a href="#" className="group relative block">
                <img
                  src={spcl}
                  alt=""
                  className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                />
      
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">  
                <h3 className="text-xl font-medium text-white">Miami Vibes</h3>
                  <span
                    className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                  >
                    take a look
                  </span>
                </div>
              </a>
            </li>
      
            <li>
              <a href="#" className="group relative block">
                <img
                  src={balenozuna}
                  alt=""
                  className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                />
      
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white">Artist</h3>
      
                  <span
                    className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                  >
                    Shop Now
                  </span>
                </div>
              </a>
            </li>
      
            <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
              <a href="https://startdigital.com.au/airlab/adidas-concept-posters/" className="group relative block">
                <img
                  src={adidascls}
                  alt=""
                  className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                />
      
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white">Classics stay</h3>
      
                  <span
                    className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                  >
                    classic?
                  </span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>
    )
}