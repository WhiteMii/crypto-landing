import React from "react";

type Props = {
  img: string;
  title: string;
  text: string;
};

const WhyUsBlock = ({ img, title, text }: Props) => {
  return (
    <div className=" text-md flex gap-8 rounded-3xl border-[1px] border-[#83838340] bg-bg-box p-[2.4rem] max-[400px]:gap-4">
      <i
        className={`${img} flex h-[3rem] w-[4rem] items-center rounded-lg bg-gradient-to-t from-gradient-first to-gradient-second p-[1rem] text-3xl`}
      ></i>
      <div>
        <h4 className="mb-3 text-2xl font-bold uppercase">{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default WhyUsBlock;
