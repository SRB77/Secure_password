/* eslint-disable no-unused-vars */
import { React, useEffect, useState } from "react";
import "./App.css";

function App() {
  const [length ,setLength] = useState(8);
  const [numAllow ,setnumAllow] = useState(false);
  const [charAllow ,setcharAllow] = useState(false);
  let [Password ,setPassword] = useState("");

  useEffect(()=>{
    const passwordGenerator = () => {
      let aplhabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      let numbers = "0123456789";
      let specialChar = "~!@#$%^&*<>.?/";;
      let pass = "";
      for (let i = 1; i <=length; i++) {
        let index = Math.floor(Math.random() * length + 1);
        pass += aplhabet.charAt(index);
      }
      setPassword(pass);
    };
    passwordGenerator()
  },[])
  console.log(Password)

  return (
    <>
      <div className="main">
        <div className="container">
          <h1 className="Heading">Password Generator</h1>
          <div className="input-div">
            <input
              type="text"
              className="input-box"
              placeholder="PASSWORD HERE "
              value={Password}
              readOnly
            />
            <button className="copyBtn">COPY</button>
          </div>

          <div className="param-div">
            <label>
              <input
                type="range"
                name="input-range"
                className="input-range"
                min={6}
                max={24}
                defaultValue={8}
              />
              :length
            </label>

            <label>
              <input type="checkbox" className="checkbox"/>
              :Numbers
            </label>

            <label>
              <input type="checkbox" className="checkbox"/>
              :SpecialChar
            </label>

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
