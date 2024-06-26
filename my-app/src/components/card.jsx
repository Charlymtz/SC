import nikeairforce1 from '../img/nikeairforce1.png'
import jordanretro from '../img/jordanretro.png'
import adidasforum from '../img/adidasforum.png'


function Card() {
    return (
      <div className="flex justify-center space-x-4 bg-white">
        <div className="group relative block bg-black border-blue-400 border-8">
          <img
            alt=""
            src={jordanretro}
            className="absolute inset-0 h-full w-full object-cover brightness-100 transition-opacity group-hover:brightness-50"
          />
          <div className="relative p-4 sm:p-6 lg:p-8">
            <p className="text-sm font-medium uppercase tracking-widest text-black">Jordan</p>
  
            <p className="text-xl font-bold text-white sm:text-2xl"> 11 Retro</p>
  
            <div className="mt-32 sm:mt-48 lg:mt-64">
              <div
                className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
              >
               <p className="text-sm text-white">
                Elevate your style with the iconic Air Jordan 11 Retro. Experience the perfect blend of heritage and innovation, designed to make a statement both on and off the court.
              </p>

              </div>
            </div>
          </div>
        </div>
  
        <div className="group relative block bg-black border-blue-400 border-8">
          <img
            alt=""
            src={nikeairforce1}
            className="absolute inset-0 h-full w-full object-cover brightness-100 transition-opacity group-hover:brightness-50"
          />
  
          <div className="relative p-4 sm:p-6 lg:p-8 text-center" >
            <p className="text-sm font-medium uppercase tracking-widest text-balck">Nike</p>
  
            <p className="text-xl font-bold text-white sm:text-2xl">Air Force 1</p>
  
            <div className="mt-32 sm:mt-48 lg:mt-64">
              <div
                className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
              >
                <p className="text-sm text-white">
                Step into legendary status with the timeless Nike Air Force 1. Embrace the classic design and unmatched comfort, a symbol of self-expression and individuality.
                </p>

              </div>
            </div>
          </div>
        </div>
  
        <div className="group relative block bg-black border-blue-400 border-8">
          <img
            alt=""
            src={adidasforum}
            className="absolute inset-0 h-full w-full object-cover brightness-100 transition-opacity group-hover:brightness-50"
          />
  
          <div className="relative p-4 sm:p-6 lg:p-8 text-right">
            <p className="text-sm font-medium uppercase tracking-widest text-black">Adidas</p>
            <p className="text-xl font-bold text-white sm:text-2xl">Forum Low</p>
            <div className="mt-32 sm:mt-48 lg:mt-64">
              <div
                className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
              >
                <p className="text-sm text-white">
                Redefine your street style with the Adidas Forum Low. Experience unparalleled comfort and versatility, crafted for those who dare to challenge the norm.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  export default Card;
  