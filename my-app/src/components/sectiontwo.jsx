import model1 from '../img/model1.png';
import model2 from '../img/model2.png';

export default function SectionTwo() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Unique Style!
          </h2>
          <p className="text-lg text-gray-600">
            "Fashion meets graffiti in an elegant dance of urban expression."
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
            <img
              src={model1}
              alt="The North Face"
              className="w-full object-cover h-64 lg:h-auto"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">The North Face</h3>
              <p className="text-gray-700">
                Discover adventure with The North Face sneakers. Designed to withstand and shine in every step.
              </p>
              <p className="mt-4 text-sm text-gray-600">Perfect for your next urban explorations!</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
            <img
              src={model2}
              alt="Gucci"
              className="w-full object-cover h-64 lg:h-auto"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Gucci</h3>
              <p className="text-gray-700">
                Explore elegance and style with Gucci sneakers. A perfect fusion of fashion and comfort.
              </p>
              <p className="mt-4 text-sm text-gray-600">Highlight your style with the ultimate luxury brand!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
