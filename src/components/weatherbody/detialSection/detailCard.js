const DetailCard = (props) => {
  return (
    <div className="card">
      <div className="card-heading">
        <span className="detail-title">{props.title}</span>
        <img
          src={`/images/icons/${props.iconName}.svg`}
          alt=""
          className="detail-img"
        />
      </div>
      <p className="detail-content">{props.content}</p>
    </div>
  );
};
export default DetailCard;
