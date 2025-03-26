import { ReactNode, useState } from "react";

export const Card = ({
  icon,
  heading,
  number,
}: {
  icon: ReactNode;
  heading: string;
  number: number;
}) => {
  const [colorActived, setColorActived] = useState(false);
  return (
    <div
      onClick={() => setColorActived(!colorActived)}
      className={`group h-max w-full max-w-54 space-y-3 rounded-lg p-7 shadow-lg transition-all duration-300 hover:bg-[#CF9A2A] hover:text-white ${colorActived && "bg-[#CF9A2A] text-white"}`}
    >
      <div
        className={`${colorActived && "text-white"} flex justify-between text-3xl transition-all duration-300 group-hover:text-white`}
      >
        {icon}
        <h3 className="font-bold text-[#CF9A2A] group-hover:text-white">
          0{number}
        </h3>
      </div>
      <p className="font-medium">{heading}</p>
    </div>
  );
};
