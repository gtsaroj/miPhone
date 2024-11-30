import React from "react";

const Info = () => {
  const qualification = [
    {
      title: "Experience",
      sub_title: "Junior",
      icon: (
        <i class="bx text-[var(--secondary-text)] bx-award about__icon"></i>
      ),
    },
    {
      title: "Completed",
      sub_title: "6+ projects",
      icon: (
        <i class="bx text-[var(--secondary-text)] bx-briefcase-alt about__icon"></i>
      ),
    },
    {
      title: "Support",
      sub_title: "Projects",
      icon: (
        <i class="bx text-[var(--secondary-text)] bx-support about__icon"></i>
      ),
    },
  ];
  return (
    <div className="flex justify-evenly gap-3 sm:gap-10 ">
      {qualification?.map((data) => (
        <div className="flex text-[var(--primary-text)]   flex-col justify-center border-[1px] p-1 border-[var(--border-color)] w-24 rounded-lg items-center">
          {data.icon}
          <h3 className=" text-sm sm:text-[16px]  tracking-wide">
            {data.title}
          </h3>
          <span className=" text-[var(--secondary-text)] sm:text-sm text-xs  ">
            {data.sub_title}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Info;
