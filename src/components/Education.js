import { useState } from "react";
import Educationdetails from "./Educationdetails";

const Education = (props) => {
  let obj = {
    uniName: "",
    city: "",
    degree: "",
    subject: "",
    from: "",
    to: "",
  };
  const [exp, setExp] = useState([
    {
      uniName: "",
      city: "",
      degree: "",
      subject: "",
      from: "",
      to: "",
      id: Math.floor(Math.random() * 50000),
    },
  ]);
  const { showForm } = props;
  const del = (e) => {
    e.preventDefault();
    let id = e.currentTarget.parentElement.id;
    let newExp = exp.filter((item) => item.id != id);
    setExp(newExp);
  };

  const addNew = (e) => {
    e.preventDefault();
    obj.id = Math.floor(Math.random() * 5000000);
    let newExp = [...exp];
    newExp.push(obj);
    setExp(newExp);
  };
  if (showForm) {
    return (
      <div className="container section ">
        <div className="row">
          <div className="col">
            <form className="card z-depth-0.5 grey lighten-3 black-text">
              <div className="card-content">
                <span className="card-title">Education:</span>
                {exp.map((item) => (
                  <div key={item.id} id={item.id}>
                    <div className="input-field">
                      <input
                        type="text"
                        id="uniName"
                        placeholder="University name:"
                        value={item.uniName}
                        onChange={(e) =>
                          setExp(
                            exp.map((it) =>
                              it.id === item.id
                                ? { ...it, uniName: e.target.value }
                                : it
                            )
                          )
                        }
                      />
                    </div>
                    <div className="input-field">
                      <input
                        type="text"
                        id="city"
                        placeholder="City name:"
                        value={item.city}
                        onChange={(e) =>
                          setExp(
                            exp.map((it) =>
                              it.id === item.id
                                ? { ...it, city: e.target.value }
                                : it
                            )
                          )
                        }
                      />
                    </div>
                    <div className="input-field">
                      <input
                        type="text"
                        id="degree"
                        placeholder="Degree:"
                        value={item.degree}
                        onChange={(e) =>
                          setExp(
                            exp.map((it) =>
                              it.id === item.id
                                ? { ...it, degree: e.target.value }
                                : it
                            )
                          )
                        }
                      />
                    </div>
                    <div className="input-field">
                      <input
                        type="text"
                        id="subject"
                        placeholder="Subject:"
                        value={item.subject}
                        onChange={(e) =>
                          setExp(
                            exp.map((it) =>
                              it.id === item.id
                                ? { ...it, subject: e.target.value }
                                : it
                            )
                          )
                        }
                      />
                    </div>
                    <div className="input-field">
                      <input
                        type="text"
                        id="from"
                        placeholder="From:"
                        value={item.from}
                        onChange={(e) =>
                          setExp(
                            exp.map((it) =>
                              it.id === item.id
                                ? { ...it, from: e.target.value }
                                : it
                            )
                          )
                        }
                      />
                    </div>
                    <div className="input-field">
                      <input
                        type="text"
                        id="to"
                        placeholder="To:"
                        value={item.to}
                        onChange={(e) =>
                          setExp(
                            exp.map((it) =>
                              it.id === item.id
                                ? { ...it, to: e.target.value }
                                : it
                            )
                          )
                        }
                      />
                    </div>
                    <button
                      className="btn red lighten-1"
                      onClick={del}
                      style={{ marginTop: "50px" }}
                    >
                      Delete
                    </button>
                  </div>
                ))}
                <button
                  className="btn blue lighten-1"
                  style={{ marginTop: "30px" }}
                  onClick={addNew}
                >
                  add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="experienceDetails">
        <h5 className="desc-title" style={{ paddingTop: "10px" }}>
          Education:{" "}
        </h5>
        {exp.map((item) => (
          <Educationdetails details={item} key={item.id} />
        ))}
      </div>
    );
  }
};

export default Education;
