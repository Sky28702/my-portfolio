const ProfileData = (props) => {
  return (
    <>
      <div className="flex flex-col justify-between items-center bg-white shadow shadow-slate-400 mx-90 py-20 border-rounded-[10px] cursor-pointer ">
        {" "}
        <img
          src="/pfp.png"
          alt="profile image"
          className="h-40 w-40 rounded-full"
        ></img>
        <p className="font-semibold text-[20px] text-center mb-4">
          {props.name}
        </p>
        <p className="font-normal">{props.email} </p> <p>{props.number}</p>
        <p className="font-normal">{props.address}</p>
      </div>
    </>
  );
};

export default ProfileData;
