/* eslint-disable react/prop-types */
// import { useState } from "react";

export function General({
  name,
  setName,
  email,
  setEmail,
  phone,
  setPhone,
  display,
  setDisplay,
}) {
  // const [email, setEmail] = useState('');
  // const [phone, setPhone] = useState('');

  if (!display) {
    return (
      <div className="general">
        <h1 className="h-one">General Information</h1>
        <div className="fields">
          <div className="formfield">
            <label>
              Name:
              <input
                key={name}
                placeholder="Enter your name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                autoFocus
                disabled={display}
              ></input>
            </label>
          </div>
          <div className="formfield">
            <label>
              Email:
              <input
                key={email}
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
                value={email}
                disabled={display}
              ></input>
            </label>
          </div>
          <div className="formfield">
            <label>
              Phone:
              <input
                key={phone}
                onChange={(e) => setPhone(e.target.value)}
                autoFocus
                value={phone}
                disabled={display}
              ></input>
            </label>
          </div>
        </div>
        <div>
          <button onClick={() => setDisplay(true)} disabled={display}>
            Click me to submit yo
          </button>
        </div>
      </div>
    );
  }
}

export function GeneralRes({ name, email, phone, display, setDisplay }) {
  if (display) {
    return (
      <div className="resume">
        <h1 className="h-one">Your Resume</h1>
        <div className="general-data">
          <span>{name}</span>
          <span>{email}</span>
          <span>{phone}</span>
        </div>
        <div>
          <button onClick={() => setDisplay(false)} disabled={!display}>
            EDIT ME
          </button>
        </div>
      </div>
    );
  }
}
