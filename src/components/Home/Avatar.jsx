import AvatarImage from "../../assets/ava.jpg";

const Avatar = () => {
  return (
    <div name="avatar">
      <img src={AvatarImage} alt="avatar" className="rounded-full inline" />
    </div>
  );
};

export default Avatar;
