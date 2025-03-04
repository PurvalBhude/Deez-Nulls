import { CheckCircle2 } from "lucide-react";
import { features, pricingOptions } from "../constants/needs";
import { Link } from 'react-router-dom'; // Import Link

const Pricing = () => {
  return (
    <section id="pricing" className="my-10">
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Functions
      </h2>
      <div className="flex flex-wrap">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 border border-neutral-700 rounded-xl hover:border-orange-500 hover:shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
              <p className="text-4xl mb-8">
                {option.title}
                {option.title === "Pro" && (
                  <span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl mb-4 ml-2">
                    (Administrator's Side)
                  </span>
                )}
              </p>
              <p className="mb-8">
                <span className="text-5xl mt-6 mr-2">{option.price}</span>
              </p>
              <ul>
                {option.features.map((feature, index) => (
                  <li key={index} className="mt-8 flex items-center">
                    <CheckCircle2 />
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
              {/* Updated Link for Know more */}
              <Link
                to={
                  option.title === "Startups"
                    ? "/StartupKnowMore"
                    : option.title === "Admin"
                    ? "/AdminKnowMore"
                    : option.title === "EIRs"
                    ? "/EirKnowMore"
                    : "#"
                }
                className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200"
              >
                Know more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Pricing;
