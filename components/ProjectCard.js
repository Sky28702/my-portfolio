const Cards = (props) => {
  return (
    <div>
      <img
        src={props.image}
        alt="my projects"
        className="md:h-[200px] md:max-w-[300px] w-104 h-auto rounded-[5px]"
      ></img>
      <h5 className="font-semibold mt-1 mb-2">{props.title}</h5>
      <p className="text-slate-600">{props.paragraph}</p>
    </div>
  );
};

export default Cards;
