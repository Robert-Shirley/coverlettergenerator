import { useState } from "react";
import Education from "./components/Education";
import Experience from "./components/Experience";
import PersonalInfo from "./components/PersonalInfo";

const App = () => {
  const [showForm, setShowForm] = useState(true);

  const handleClick = () => {
    setShowForm(!showForm);
  };
  const hide = () => {
    let editBTN = document.getElementById("edit");
    editBTN.style.display = "none";
    let printBTN = document.getElementById("save");
    printBTN.style.display = "none";
  };
  const show = () => {
    let editBTN = document.getElementById("edit");
    editBTN.style.display = "block";
    let printBTN = document.getElementById("save");
    printBTN.style.display = "block";
  };
  const printP = async () => {
    await hide();
    window.print();
    show();
  };
  if (showForm) {
    return (
      <div>
        <PersonalInfo showForm={showForm} />
        <Experience showForm={showForm} />
        <Education showForm={showForm} />
        <button className="btn blue darken-3 preview" onClick={handleClick}>
          Preview
        </button>
      </div>
    );
  } else {
    return (
      <div id="pdfdets">
        <PersonalInfo showForm={showForm} />
        <Experience showForm={showForm} />
        <Education showForm={showForm} />
        <button
          className="btn green darken-3 editB"
          id="edit"
          onClick={handleClick}
        >
          Edit
        </button>
        <button className="btn green darken-3 pdf" id="save" onClick={printP}>
          Print
        </button>
      </div>
    );
  }
};

export default App
