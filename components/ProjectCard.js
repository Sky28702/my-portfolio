const Cards = (props) => {
  return (
    <div>
      <img
        src={props.image}
        alt="my projects"
        className="h-[200px] w-[300px] rounded-[5px]"
      ></img>
      <h5 className="font-semibold mt-1 mb-2">{props.title}</h5>
      <p className="text-slate-600">{props.paragraph}</p>
    </div>
  );
};

export default Cards;
