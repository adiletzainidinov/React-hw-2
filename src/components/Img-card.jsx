const ImgCard = (props) => {
  return (
    <div className="img-card">
      <img
        src={props.image}
        alt="img"
      />
    </div>
  );
};

export default ImgCard;