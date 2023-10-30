import LinkButton from "./LinkButton";

const LinksButtonsList = ({ icons }) => {
  console.log(icons);
  return (
    <div name="links" className="flex justify-center md:justify-start">
      <div className="flex flex-row flex-wrap justify-center md:justify-start my-3">
        {/* <LinkButton icon={icons[0].icon} link={icons[0].link} /> */}
        {icons.map((button) => {
          return (
            <LinkButton
              key={crypto.randomUUID()}
              icon={button.icon}
              link={button.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LinksButtonsList;
