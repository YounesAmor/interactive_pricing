import { useEffect, useState } from "react";
import "./App.css";
import { subscriptionValues } from "./services/data";
function App() {
  const [sliderValue, setSliderValue] = useState(3);
  const [views, setViews] = useState("100k");
  const [price, setPrice] = useState(16);
  const [isMonth, setIsMonth] = useState(false);

  const handleChange = (e) => {
    setSliderValue(parseInt(e.target.value));
  };
  useEffect(() => {
    const appropriatePlan = (element) => element["value"] === sliderValue;
    const planIndex = subscriptionValues.filter(appropriatePlan);
    console.log(planIndex);
    const plan = planIndex[0];
    setViews(plan["views"]);
    setPrice(plan["price"]);
  }, [sliderValue]);

  return (
    <div className="App text-manrope grid h-screen w-screen place-content-center bg-mainBg bg-cover py-12 px-5 lg:space-y-5">
      <div className="bg-circles  bg-center bg-no-repeat py-9">
        <p className="mb-2 text-xl font-bold text-desaturatedBlue">
          Simple, traffic-based pricing
        </p>
        <p className="text-sm text-grayishBlue">
          Sign-up for our 30-day trial.
          <br /> No credit card required.
        </p>
      </div>

      <div className="grid space-y-4 divide-y rounded-lg border border-transparent bg-white py-4 shadow-grayishBlue sm:w-[350px] sm:shadow-lg lg:w-[540px] lg:shadow-xl">
        <div className="lg: grid space-y-8 py-5 sm:grid-cols-1 sm:px-5 lg:grid-cols-2 lg:items-center lg:justify-center   lg:px-10">
          <div className="lg:mt-8">
            <p className="text-grayishBlue sm:text-sm lg:col-start-1 lg:row-start-1">
              {views} PAGEVIEWS
            </p>
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2">
            <input
              type="range"
              min="1"
              max="5"
              value={sliderValue}
              onChange={(e) => handleChange(e)}
              className="appearance-none rounded-lg border bg-lightGrayishBlue"
              readOnly
            />
          </div>

          <div className="text-manrope flex items-center justify-center sm:mt-9 lg:col-start-2 lg:row-start-1 lg:mb-4">
            <p className="text-4xl text-desaturatedBlue ">
              {isMonth === true
                ? price.toFixed(2)
                : (price * 12 * 0.75).toFixed(2)}
              ${" "}
            </p>
            <p className="text-sm text-grayishBlue">
              /{isMonth === true ? " month" : " year"}
            </p>
          </div>
          {/* Monthly/ yearly billing */}
          <div className="flex items-center justify-center gap-2 text-sm text-grayishBlue opacity-80 lg:col-span-2 lg:justify-self-end">
            <p>Monthly billing</p>
            <label className="relative inline-flex cursor-pointer items-center ">
              <input
                type="checkbox"
                className="peer sr-only"
                onChange={() => setIsMonth(!isMonth)}
                checked={isMonth === true ? false : true}
              />
              <div className="peer h-6 w-11 self-center rounded-full bg-gray-200 after:absolute after:top-0.5 after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-strongCyan peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-red-300 "></div>
            </label>

            <div className="flex items-center justify-center gap-2">
              <p>Yearly Billing</p>
              <p className="rounded-full border border-transparent bg-lightRed p-[3px] text-[10px] text-white">
                -25%
              </p>
            </div>
          </div>
        </div>
        <div className="grid py-5 sm:grid-cols-1 sm:text-center lg:grid-cols-2 lg:justify-start lg:px-5 lg:text-left">
          {/* Benefits */}
          <div className="text-sm text-grayishBlue ">
            <ul className="list-none space-y-2 ">
              <li className="flex items-center justify-center gap-2 lg:justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8">
                  <path
                    fill="none"
                    stroke="#10D8C4"
                    strokeWidth="2"
                    d="M1 4.134l1.907 1.908L7.949 1"
                  />
                </svg>
                <p>Unlimited websites</p>
              </li>
              <li className="flex items-center justify-center gap-2 lg:justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8">
                  <path
                    fill="none"
                    stroke="#10D8C4"
                    strokeWidth="2"
                    d="M1 4.134l1.907 1.908L7.949 1"
                  />
                </svg>
                <p>100% data ownership</p>
              </li>
              <li className="flex items-center justify-center gap-2 lg:justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8">
                  <path
                    fill="none"
                    stroke="#10D8C4"
                    strokeWidth="2"
                    d="M1 4.134l1.907 1.908L7.949 1"
                  />
                </svg>
                <p>Email reports</p>
              </li>
            </ul>
          </div>
          {/* Start Button */}
          <div className="sm:mt-3 lg:justify-self-center">
            <button className="text-manrope w-48 rounded-full border border-transparent bg-desaturatedBlue p-2 text-sm text-lightGrayishBlue">
              Start my trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
