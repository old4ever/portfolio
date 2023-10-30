const LinkButton = ({ icon, link }) => {
  return (
    <>
      <button
        onClick={() => window.open(link, "_blank")}
        className="btn btn-circle m-1 bg-black dark:bg-white "
      >
        <i className="bg-white">
          <img src={icon} />
        </i>
      </button>
    </>
  );
};

export default LinkButton;
