import React from "react";

type Props = {};

const Footer = (props: Props) => {
  const gradient =
    "cursor-pointer  to-gradient-second from-gradient-first hover:bg-gradient-to-b hover:bg-clip-text  hover:text-transparent duration-500";

  return (
    <footer className=" bg-bg bg-footer bg-cover bg-center bg-no-repeat pb-28 pt-44">
      <div className="mx-auto flex max-w-[70%] flex-col items-center text-center max-[1200px]:max-w-[90%]">
        <div className="flex gap-12 text-3xl max-[900px]:gap-8 max-[900px]:text-3xl">
          <i className={`fa-brands fa-twitter ${gradient}`}></i>
          <i className={`fa-brands fa-discord ${gradient}`}></i>
          <i className={`fa-brands fa-facebook ${gradient}`}></i>
          <i className={`fa-brands fa-youtube ${gradient}`}></i>
        </div>
        <div className="mt-12 flex gap-12 text-2xl">
          <p className={`cursor-pointer ${gradient}`}>Privacy</p>
          <p className={`cursor-pointer ${gradient}`}>Terms of Use</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
