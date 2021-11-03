const ExperienceDetails = (props) => {
  const { details } = props;
  return (
    <div>
      <div className="row">
        <div className="dates col left">
          {details.from} - {details.to}
        </div>

        <div className="col">
          <div className="expPos extra"> {details.position}</div>
          <div className="expPos ">
            {details.company}, {details.city}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceDetails;
