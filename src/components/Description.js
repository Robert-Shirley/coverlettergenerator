const Description = (props) => {
  const { description } = props;
  return (
    <div className="desc">
      <h5 className="desc-title">Description: </h5>
      <div style={{ fontStyle: "italic", paddingTop: "5px" }}>
        {description}
      </div>
    </div>
  );
};

export default Description;
