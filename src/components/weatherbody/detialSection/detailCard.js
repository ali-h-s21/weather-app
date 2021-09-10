import classes from "../../../style/main.module.scss";
const DetailCard = (props) => {
  return (
    <div className={classes["card"]}>
      <div className={classes["card-heading"]}>
        <span className={classes["detail-title"]}>{props.title}</span>
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
