import React from "react";
import { FaUser } from "react-icons/fa";

interface Props {
  id: number;
  name: string;
  image: string;
  text: string;
  category: string;
}
const Testimonial = ({ id, name, image, text, category }: Props) => {
  return (
    <div
      key={id}
      className="w-full p-5 bg-green-100 border-1 border-green-200 rounded-xl flex flex-col "
    >
      <p className="italic text-lg text-gray-500 w-full mb-5">{text}</p>
      <div className="flex items-center">
        <div className="w-12 h-12 bg-green-200 rounded-full overflow-hidden border border-green-300">
          <FaUser className="" />
        </div>
        <div className="flex flex-col ml-3">
          <h3 className="text-lg font-semibold text-gray-600">{name}</h3>
          <p className="text-md font-medium text-gray-500">{category}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
