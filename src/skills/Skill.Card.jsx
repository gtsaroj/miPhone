import React from "react";
import { LuBadgeCheck } from "react-icons/lu";

const SkillCard = ({ title, skills }) => {
  return (
    <div className="sm:w-[400px] w-full p-3 rounded-lg border-[1px] flex flex-col items-center justify-center border-[var(--border-color)] ">
      <h3 className=" tracking-wider text-[var(--primary-text)] text-lg mb-5 ">{title}</h3>
      <div className="w-full">
        <div className="grid-cols-2  gap-x-6 gap-y-7 p-2 grid">
          {skills?.map((data) => (
            <div className="flex items-start justify-start gap-2  ">
              <LuBadgeCheck className=" mt-1.5 text-[var(--primary-text)] size-5" />
              <div className="flex flex-col items-start justify-start">
                <h3 className="text-[16px] tracking-wide text-[var(--primary-text)] ">{data.title}</h3>
                <p className=" text-xs tracking-wide text-[var(--secondary-text)] ">
                  {data.subtitle}{" "}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
