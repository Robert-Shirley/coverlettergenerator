const Details = (props) => {
  const { address, phone, email } = props;
  return (
    <div>
      <div
        className="card details grey lighten-5"
        style={{ position: "absolute" }}
      >
        <h5
          style={{ paddingTop: "15px", marginTop: "5px", marginBottom: "5px" }}
        >
          Personal Details:
        </h5>
        <div style={{ marginTop: "5px" }}>
          <div className="spanDets" style={{ fontWeight: "bold" }}>
            Address:{" "}
          </div>
          <div className="spanDets">{address}</div>
        </div>
        <div style={{ marginTop: "5px" }}>
          <div className="spanDets" style={{ fontWeight: "bold" }}>
            Phone Number:{" "}
          </div>
          <div className="spanDets">{phone}</div>
        </div>
        <div style={{ marginTop: "5px" }}>
          <div className="spanDets" style={{ fontWeight: "bold" }}>
            Email Address:{" "}
          </div>
          <div className="spanDets">{email}</div>
        </div>
      </div>
      <div className="card grey lighten-2 rightMargin"></div>
    </div>
  );
};

export default Details;
