const LinkButton = ({ icon, link }) => {
  return (
    <>
      <button
        onClick={() => window.open(link, "_blank")}
        className="btn btn-circle m-1 bg-black dark:bg-white "
      >
        <i>{icon}</i>
      </button>
    </>
  );
};

export default LinkButton;
