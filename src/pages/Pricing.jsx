// import React from "react";

// const Pricing = () => {

//   return (
//     <div className=" p-8 flex justify-center">
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {plans.map((plan, index) => (
//           <div
//             key={index}
//             className={`relative p-6 backdrop-blur-md bg-[#052127]/90 hover:bg-[#052127]
//               transition-all duration-500 h-full border-transparent rounded-lg shadow-lg`}
//           >
//             <div className="space-y-4 pt-4">
//               <h3 className="text-2xl text-center text-white font-semibold">{plan.title}</h3>
//               <p className="text-gray-300 text-4xl font-bold">{plan.price}</p>
//               <ul className="space-y-2">
//                 {plan.features.map((feature, featureIndex) => (
//                   <li key={featureIndex} className="text-gray-200">
//                     • {feature}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Pricing;

// // previous pricing
//     {/* <div class="h-screen flex justify-center items-center ">
//       <card class="rounded w-72 shadow-xl flex flex-col text-gray-200">
//         <p class="font-semibold bg-white bg-opacity-20 rounded-t px-4 py-2">PRO</p>

//         <div class="flex flex-row items-center pt-8 bg-white bg-opacity-10 pl-12 pr-10 gap-3">
//           <div class="flex flex-row gap-1">
//             <span class="text-base"> $ </span>
//             <p class="text-5xl font-semibold">a</p>
//           </div>
//           <p class="font-light text-xs">Invest in youself</p>
//         </div>

//         <div class="flex flex-row items-center justify-center bg-white bg-opacity-10 pt-5 pb-10">
//           <p class="text-xs text-gray-300 border border-gray-50 border-opacity-20 rounded-full py-1 px-2">billed monthly</p>
//         </div>

//         <div class="grid grid-cols-12 bg-white bg-opacity-20 px-4 gap-y-3 pt-10">
//           <div>
//             <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
//               <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
//             </svg>
//           </div>

//           <div class="col-span-11 text-sm flex items-center font-semibold pl-2">Unlimited items per workspace</div>

//           <div class="col-span-12 h-[1px] bg-white bg-opacity-20"></div>

//           <div>
//             <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
//               <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
//             </svg>
//           </div>

//           <div class="col-span-11 text-sm flex items-center font-light pl-2">Everything in Starter</div>

//           <div>
//             <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
//               <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
//             </svg>
//           </div>

//           <div class="col-span-11 text-sm flex items-center font-light pl-2">500 extractions / day</div>

//           <div>
//             <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
//               <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
//             </svg>
//           </div>

//           <div class="col-span-11 text-sm flex items-center font-light pl-2">cognitive AI support for 15 meeting / day</div>

//           <div>
//             <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
//               <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
//             </svg>
//           </div>

//           <div class="col-span-11 text-sm flex items-center font-light pl-2">Unlimited conversation</div>

//           <div class="col-span-12 mt-20 mb-5 text-gray-100">
//             <button class="rounded bg-gradient-to-r from-[#003e4b] to-[#00ff99] hover:from-gray-900 hover:to-gray-900 w-full py-3">Try for Free</button>
//           </div>
//         </div>
//       </card>
//     </div> */}

import React from "react";

const Pricing = () => {
  const plans = [
    {
      title: "FREE",
      price: "$0",
      features: [
        "Regular LLM Response - 10/Day",
        "‘Notes’ and ‘To-Do’ Extraction - 10/Day",
        "Reminder Notifications",
        "Meeting Schedules - 2/day",
        "Expert - 1 Topic",
      ],
    },
    {
      title: "Professional",
      price: "$16",
      features: [
        "Regular LLM Response - 25/Day",
        "‘Notes’ and ‘To-Do’ Extraction - 25/Day",
        "Reminder Notifications",
        "Meeting Schedules - 5/day",
        "Expert - 3 Topics",
        "Global Contextual Persona Updates - 2/Day",
        "Custom PA Mobile Number - 1 Call/Day",
      ],
    },
    {
      title: "Unlimited",
      price: "$25",
      features: [
        "Regular LLM Response - Unlimited",
        "‘Notes’ and ‘To-Do’ Extraction - Unlimited",
        "Reminder Notifications",
        "Meeting Schedules - 10/day",
        "Expert - 8 Topics",
        "Global Contextual Persona Updates - Unlimited",
        "Custom PA Mobile Number - 5 Calls/Day",
        "Azmth Ask-Back Access",
      ],
    },
  ];

  return (
    <section className="px-8 relative z-10 overflow-hidden bg-[#052127] pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <span className="mb-2 block text-lg font-semibold text-white">
                Pricing Table
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.208] text-white sm:text-4xl md:text-[40px]">
                Our Pricing Plan
              </h2>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="-mx-4 flex flex-wrap">
            {plans.map((plan, index) => (
              <PricingCard
                key={index}
                type={plan.title}
                price={plan.price}
                subscription="month"
                description={`Perfect for ${plan.title.toLowerCase()} usage.`}
                buttonText={`Choose ${plan.title}`}
                active={plan.title === "Professional"} // Set "Professional" plan as active
              >
                {plan.features.map((feature, featureIndex) => (
                  <List key={featureIndex}>{feature}</List>
                ))}
              </PricingCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

const PricingCard = ({
  children,
  description,
  price,
  type,
  subscription,
  buttonText,
  active,
}) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="relative z-10 mb-10 overflow-hidden rounded-[10px] border-2 border-stroke bg-[#052127]/90 hover:bg-[#052127]/100 duration-500 text-white px-8 py-10 shadow-pricing dark:border-dark-3 dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10 xl:p-[50px]">
          <span className="mb-3 block text-lg font-semibold text-white ">
            {type}
          </span>
          <h2 className="mb-5 text-[42px] font-bold text-dark dark:text-white">
            {price}
            <span className="text-base font-medium text-body-color dark:text-dark-6">
              / {subscription}
            </span>
          </h2>
          <p className="mb-8 border-b border-stroke pb-8 text-base text-body-color dark:border-dark-3 dark:text-dark-6">
            {description}
          </p>
          <div className="mb-9 flex flex-col gap-[14px]">{children}</div>
          <a
            href="/#"
            className={` ${
              active
                ? "block w-full rounded-md border border-primary bg-[#217486] p-3 text-center text-base font-medium text-white transition duration-300 hover:bg-opacity-90"
                : "block w-full rounded-md border border-stroke bg-transparent p-3 text-center text-base font-medium text-primary transition hover:border-primary hover:bg-[#217486] duration-300 text-white dark:border-dark-3"
            } `}
          >
            {buttonText}
          </a>
          <div>
            <span className="absolute right-0 top-7 z-[-1]">
              <svg
                width={77}
                height={172}
                viewBox="0 0 77 172"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx={86} cy={86} r={86} fill="url(#paint0_linear)" />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1={86}
                    y1={0}
                    x2={86}
                    y2={172}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#3056D3" stopOpacity="0.09" />
                    <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span className="absolute right-4 top-4 z-[-1]">
              <svg
                width={41}
                height={89}
                viewBox="0 0 41 89"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="38.9138"
                  cy="87.4849"
                  r="1.42021"
                  transform="rotate(180 38.9138 87.4849)"
                  fill="#3056D3"
                />
                <circle
                  cx="38.9138"
                  cy="74.9871"
                  r="1.42021"
                  transform="rotate(180 38.9138 74.9871)"
                  fill="#3056D3"
                />
                <circle
                  cx="38.9138"
                  cy="62.4892"
                  r="1.42021"
                  transform="rotate(180 38.9138 62.4892)"
                  fill="#3056D3"
                />
                <circle
                  cx="38.9138"
                  cy="38.3457"
                  r="1.42021"
                  transform="rotate(180 38.9138 38.3457)"
                  fill="#3056D3"
                />
                <circle
                  cx="38.9138"
                  cy="13.634"
                  r="1.42021"
                  transform="rotate(180 38.9138 13.634)"
                  fill="#3056D3"
                />
                <circle
                  cx="38.9138"
                  cy="50.2754"
                  r="1.42021"
                  transform="rotate(180 38.9138 50.2754)"
                  fill="#3056D3"
                />
                <circle
                  cx="38.9138"
                  cy="26.1319"
                  r="1.42021"
                  transform="rotate(180 38.9138 26.1319)"
                  fill="#3056D3"
                />
                <circle
                  cx="38.9138"
                  cy="1.42021"
                  r="1.42021"
                  transform="rotate(180 38.9138 1.42021)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.4157"
                  cy="87.4849"
                  r="1.42021"
                  transform="rotate(180 26.4157 87.4849)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.4157"
                  cy="74.9871"
                  r="1.42021"
                  transform="rotate(180 26.4157 74.9871)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.4157"
                  cy="62.4892"
                  r="1.42021"
                  transform="rotate(180 26.4157 62.4892)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.4157"
                  cy="38.3457"
                  r="1.42021"
                  transform="rotate(180 26.4157 38.3457)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.4157"
                  cy="13.634"
                  r="1.42021"
                  transform="rotate(180 26.4157 13.634)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.4157"
                  cy="50.2754"
                  r="1.42021"
                  transform="rotate(180 26.4157 50.2754)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.4157"
                  cy="26.1319"
                  r="1.42021"
                  transform="rotate(180 26.4157 26.1319)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.4157"
                  cy="1.4202"
                  r="1.42021"
                  transform="rotate(180 26.4157 1.4202)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.9177"
                  cy="87.4849"
                  r="1.42021"
                  transform="rotate(180 13.9177 87.4849)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.9177"
                  cy="74.9871"
                  r="1.42021"
                  transform="rotate(180 13.9177 74.9871)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.9177"
                  cy="62.4892"
                  r="1.42021"
                  transform="rotate(180 13.9177 62.4892)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.9177"
                  cy="38.3457"
                  r="1.42021"
                  transform="rotate(180 13.9177 38.3457)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.9177"
                  cy="13.634"
                  r="1.42021"
                  transform="rotate(180 13.9177 13.634)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.9177"
                  cy="50.2754"
                  r="1.42021"
                  transform="rotate(180 13.9177 50.2754)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.9177"
                  cy="26.1319"
                  r="1.42021"
                  transform="rotate(180 13.9177 26.1319)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.9177"
                  cy="1.42019"
                  r="1.42021"
                  transform="rotate(180 13.9177 1.42019)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.41963"
                  cy="87.4849"
                  r="1.42021"
                  transform="rotate(180 1.41963 87.4849)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.41963"
                  cy="74.9871"
                  r="1.42021"
                  transform="rotate(180 1.41963 74.9871)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.41963"
                  cy="62.4892"
                  r="1.42021"
                  transform="rotate(180 1.41963 62.4892)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.41963"
                  cy="38.3457"
                  r="1.42021"
                  transform="rotate(180 1.41963 38.3457)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.41963"
                  cy="13.634"
                  r="1.42021"
                  transform="rotate(180 1.41963 13.634)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.41963"
                  cy="50.2754"
                  r="1.42021"
                  transform="rotate(180 1.41963 50.2754)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.41963"
                  cy="26.1319"
                  r="1.42021"
                  transform="rotate(180 1.41963 26.1319)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.41963"
                  cy="1.4202"
                  r="1.42021"
                  transform="rotate(180 1.41963 1.4202)"
                  fill="#3056D3"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

const List = ({ children }) => {
  return (
    <p className="text-base text-body-color dark:text-dark-6">{children}</p>
  );
};
