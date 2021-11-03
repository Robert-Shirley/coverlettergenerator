import { StrictMode, useState } from "react";
import ReactDOM from "react-dom";
import Education from "./components/Education";
import Experience from "./components/Experience";
import PersonalInfo from "./components/PersonalInfo";

const App = () => {
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      <PersonalInfo showForm={showForm} />
      <Experience showForm={showForm} />
      <Education showForm={showForm} />
      {/* <button style={{ marginTop: "300px" }} onClick={handleClick}>
        Click
      </button> */}
    </div>
  );
};

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
