"use client";
import Accordion from "./Accordion";

const faq = [
  {
    id: 1,
    question: "Can i use FarmLook on my mobile phone?",
    answer: `Yes, you can absolutely use FarmLook on your mobile phone. And is available for both Android and IOS versions.`,
  },
  {
    id: 2,
    question: "How can i identify diseases on my crop?",
    answer: `To identify diseases with FarmLook, follow this steps:
    1. Open FarmLook App.
    2. Select your crop type (maize, tomato, beans and more...).
    3. Snap the affected plant photo, after you select crop type (make sure it's clear).
    4. Click analyze button.
    5. FarmLook identify diseases and show you recommendations to follow easily.
    `,
  },
  {
    id: 3,
    question: `Is FarmLook support Hausa Language?`,
    answer: `Yes FarmLook make it easy for you to switch to Hausa Language, on your profile settings.
    `,
  },
  {
    id: 3,
    question: `Did FarmLook support offline accessibility?`,
    answer: `No. FarmLook doesn't support offline mode now, but it have feature that let you upload your crop picture. So that means you can snap and upload later where there's no internet connection.
    `,
  },
];
export const FaqSection = () => {
  

  return (
    <div id="faq" className="w-full my-[5rem] px-6 md:px-12 lg:px-22 flex flex-col items-center justify-center">
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-700 text-center">
        Frequent Ask Questions
      </h1>
      <p className="mt-1 font-medium text-gray-500 text-center md:px-12">Have a question about FarmLook? Your on right place.</p>
      <div className="w-full mt-[5rem] flex flex-col items-center justify-center gap-6">
        {faq.map((f) => (
          <Accordion 
            id={f.id}
            question={f.question}
            answer={f.answer}
          />
        ))}
      </div>
    </div>
  );
};
