import { useState } from "react";
import { LiaBarsSolid } from "react-icons/lia";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";

const SideMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="block">
        <div
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        >
          <div className="absolute z-40 p-5 text-2xl rounded-full shadow-lg shadow-semiDarkShade right-5 top-8 md:right-20 bg-lightShade text-iconsColor">
            <LiaBarsSolid
              className={twMerge(
                "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700",
                showMenu ? "opacity-0 left-[-100px]" : "opacity-100"
              )}
            />
            <RxCross1
              className={twMerge(
                "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700",
                !showMenu ? "opacity-0 left-full" : "opacity-100"
              )}
            />
          </div>
        </div>
        <div
          className={twMerge(
            "transition-all duration-500 absolute inset-0 z-30 bg-darkShade bg-opacity-80 ",
            !showMenu ? " opacity-0 left-full" : "opacity-100"
          )}
        >
          <div
            className={twMerge(
              "transition-all duration-300 absolute flex flex-col items-end gap-3 pt-10",
              showMenu && "top-20 right-5 md:right-20 opacity-100",
              !showMenu && "inset-0 opacity-0"
            )}
          >
            {["Home", "Portfolio", "Experience", "Resume", "Contact"].map(
              (e) => {
                return (
                  <div
                    key={e}
                    onClick={() => onClickItem(e)}
                    className="text-xl font-medium transition-all cursor-pointer text-accentColor hover:text-semiLightShade"
                  >
                    {e}
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </>
  );

  function onClickItem(e: string) {
    if (e === "Contact") {
      window.location.href = "mailto:asterjoules@gmail.com";
    } else if (e == "Resume") {
      downloadResume();
    } else {
      if (e == "Home") e = "";
      navigate(`/${e.toLowerCase()}`);
    }
  }
  function downloadResume() {
    const resumeUrl = "/aman_resume.pdf";
    const resumeFilename = "aman_resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = resumeFilename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};

export default SideMenu;
