const Educationdetails = (props) => {
  const { details } = props;
  return (
    <div>
      <div className="row">
        <div className="dates col left">
          {details.from} - {details.to}
        </div>

        <div className="col">
          <div className="expPos extra unidets">
            {" "}
            {details.uniName}, {details.city}
          </div>
          <div className="expPos edudets">Degree: {details.degree}</div>
          <div className="expPos edudets">Subject: {details.subject}</div>
        </div>
      </div>
    </div>
  );
};

export default Educationdetails;
