"use client";

import Testimonial from "./Testimonial";

const testimonials = [
  {
    id: 1,
    name: "Muhammed Salihu",
    image: "/muhammed",
    text: "Before FarmLook i have to wait for an extension worker. Now i know what is wrong with my maize in seconds. It saved my season.",
    category: "Maize farmer, Niger state",
  },
  {
    id: 2,
    name: "Abbas barmo",
    image: "/abbas",
    text: "The Hausa feature is excellent. It explains the diseases in a way i can understand and tells me exactly which medicine to buy.",
    category: "Tomato farmer, Niger state",
  },
  {
    id: 3,
    name: "Oga Kabiru",
    image: "/kb",
    text: "This FarmLook is a new tool for farmers, it let me easily know what happening to my crops before it catches diseases. Which saves me alot of time.",
    category: "Tomato farmer, Niger state",
  },
];

const Testimonials = () => {
  return (
    <div className="w-full mt-[10rem] mb-[5rem] px-6 flex flex-col items-center justify-center">
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-700">
        Early Farmers Feedback
      </h1>
      <div className="w-full mt-[5rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <Testimonial
            key={t.id}
            id={t.id}
            name={t.name}
            image={t.image}
            text={t.text}
            category={t.category}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
