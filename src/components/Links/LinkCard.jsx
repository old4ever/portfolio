import { ArrowRightCircleFill } from "react-bootstrap-icons";

const LinkCard = ({ doubled, vertical, button, img, text }) => {
  if (!text) {
    text = `This is a ${doubled ? "doubled" : ""} ${
      vertical ? "vertical" : ""
    } card`;
  }
  const images = {
    flixx: [
      "sm:bg-flixx-small md:bg-flixx-medium lg:bg-flixx-large xl:bg-flixx-big",
    ],
  };
  if (!img) {
  } else {
  }
  return (
    <div
      className={`relative rounded-xl border-2 border-slate-400/10 dark:hover:border-slate-100/20 bg-neutral-100 p-4 dark:bg-neutral-900  ${
        doubled ? "col-span-3 xl:col-span-2" : "col-span-3 sm:col-span-1"
      } ${
        vertical ? "row-span-2 xl:row-span-4 " : "row-span-1 xl:row-span-2 "
      } bg-cover bg-no-repeat ${images[img] ? images[img] : ""}`}
    >
      <div className="absolute bottom-0 left-0">{text}</div>

      {button.exists && (
        <button
          onClick={() => {
            if (button.link) {
              window.open(button.link, "_blank");
            }
          }}
          className="absolute bottom-0 right-0 px-3 py-3 text-[1.5rem]"
        >
          <ArrowRightCircleFill />
        </button>
      )}
    </div>
  );
};

export default LinkCard;
