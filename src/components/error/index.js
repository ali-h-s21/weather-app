export default Error = function (props) {
  return (
    <div className={"error-box"}>
      <h6 className="error-msg">{props.errorMsg}</h6>
    </div>
  );
};
