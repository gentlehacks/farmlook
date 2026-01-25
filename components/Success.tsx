"use client";

const success = [
  {
    heading: "100+",
    subheading: "Crops Analyzed",
  },
  {
    heading: "92%",
    subheading: "Acuracy Rate",
  },
  {
    heading: "15s",
    subheading: "Diagnosis Time",
  },
];

const Success = () => {
  return (
    <div className="w-full mt-[5rem] mb-[5rem] flex items-center justify-center bg-green-800 p-5 px-22 lg:px-12 grid grid-cols-1 lg:grid-cols-2 lg:grid-cols-3">
      {/*  */}
      {success.map((s) => (
        <div
          key={s.heading}
          className={`w-full py-12 flex flex-col items-center justify-center 
            ${
              s.heading === "5s"
                ? "border-none"
                : "border-b-2 lg:border-b-0 lg:border-r-2 border-gray-400"
            }
          `}
        >
          <h1 className="text-4xl font-extrabold text-white mb-2">
            {s.heading}
          </h1>
          <p className="text-lg font-medium text-gray-300">{s.subheading}</p>
        </div>
      ))}
    </div>
  );
};

export default Success;
