import { useState } from "react";
import Header from "./Header";
import Details from "./Details";
import Description from "./Description";

const PersonalInfo = (props) => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setLastname] = useState("");
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const { showForm } = props;

  if (showForm) {
    return (
      <div className="container section ">
        <div className="row">
          <div className="col">
            <form className="card z-depth-0.5 grey lighten-3 black-text">
              <div className="card-content">
                <span className="card-title">Personal Info:</span>

                <div className="input-field">
                  <input
                    type="text"
                    id="firstname"
                    placeholder="First Name:"
                    value={firstName}
                    onChange={(e) => setfirstName(e.target.value)}
                  />
                </div>
                <div className="input-field">
                  <input
                    type="text"
                    id="lastname"
                    placeholder="Last Name:"
                    value={lastName}
                    onChange={(e) => setLastname(e.target.value)}
                  />
                </div>
                <div className="input-field">
                  <input
                    type="text"
                    id="title"
                    placeholder="Title:"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="input-field">
                  <input
                    type="text"
                    id="address"
                    placeholder="Address:"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <div className="input-field">
                  <input
                    type="text"
                    id="phone"
                    placeholder="Phone Number:"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="input-field">
                  <input
                    type="email"
                    id="email"
                    placeholder="Email:"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="input-field">
                  <input
                    type="text"
                    id="description"
                    placeholder="Description:"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Header firstName={firstName} lastName={lastName} title={title} />
        <Details address={address} phone={phone} email={email} />
        <Description description={description} />
      </div>
    );
  }
};

export default PersonalInfo;
