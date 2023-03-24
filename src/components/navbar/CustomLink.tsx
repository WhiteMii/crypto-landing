import React from "react";
import { useNavigate } from "react-router-dom";
import { SelectedPage } from "../../models/models";
import { Link } from "react-scroll";

type Props = {
  page: string;
};

const CustomLink = ({ page }: Props) => {
  const navigate = useNavigate();

  const handleLinkClick = (sectionId: string) => {
    navigate(`/?sectionId=${sectionId}#${sectionId}`);
  };
  const gradient =
    "cursor-pointer to-gradient-second from-gradient-first  hover:bg-gradient-to-r hover:bg-clip-text  hover:text-transparent duration-500";
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  return (
    <Link
      to={lowerCasePage}
      smooth={true}
      className={`${gradient} text-xl font-bold`}
      onClick={() => handleLinkClick(lowerCasePage)}
    >
      {page}
    </Link>
  );
};

export default CustomLink;
