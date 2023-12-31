import { ArrowRightCircleFill } from "react-bootstrap-icons";
import PropTypes from "prop-types";

const LinkCard = ({ doubled, vertical, button, img, text, buttonDark }) => {
  let buttonColor;
  if (buttonDark !== undefined) {
    if (buttonDark === true) {
      buttonColor = " fill-black";
    } else {
      buttonColor = " fill-white";
    }
  } else {
    buttonColor = " fill-black dark:fill-white";
  }

  // if (!text) {
  //   text = `This is a ${doubled ? "doubled" : ""} ${
  //     vertical ? "vertical" : ""
  //   } card`;
  // }

  const images = {
    flixx: [
      "bg-flixx-small sm:bg-flixx-medium lg:bg-flixx-large xl:bg-flixx-big",
    ],
  };

  return (
    <div
      className={`flex justify-center items-center relative cursor-pointer rounded-xl border-2 dark:border-slate-400/10 border-slate-900/40 bg-neutral-100 p-4 dark:bg-neutral-900 dark:hover:border-slate-100/20  ${
        doubled ? "col-span-3 xl:col-span-2" : "col-span-3 sm:col-span-1"
      } ${
        vertical ? "row-span-2 xl:row-span-4 " : "row-span-1 xl:row-span-2 "
      } bg-cover bg-no-repeat ${images[img] ? images[img] : ""}`}
      onClick={() => {
        if (button.link) {
          window.open(button.link, "_blank");
        }
      }}
    >
      {/* <div className="absolute bottom-0 left-0"> */}
      {/* <div className="">{images[img] ? "" : <span>{text}</span>}</div> */}
      <span className="">{images[img] ? "" : text}</span>

      {button.exists && (
        <button
          className={
            "lg:block hidden absolute bottom-0 right-0 px-3 py-3 text-[1.5rem]"
          }
        >
          <ArrowRightCircleFill className={buttonColor} />
        </button>
      )}
    </div>
  );
};

export default LinkCard;

LinkCard.propTypes = {
  doubled: PropTypes.bool,
  vertical: PropTypes.bool,
  button: PropTypes.object,
  img: PropTypes.string,
  text: PropTypes.string,
  buttonDark: PropTypes.bool,
};
