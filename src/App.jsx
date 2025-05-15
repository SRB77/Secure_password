import { React, useCallback, useEffect, useState } from "react";
import "./App.css";

function App() {
  const [length ,setLength] = useState(8);
  const [numAllow ,setnumAllow] = useState(false);
  const [charAllow ,setcharAllow] = useState(false);
  let [Password ,setPassword] = useState("");


  let passwordGeneratorfn = useCallback(()=>{
      let aplhabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      let numbers = "0123456789";
      let specialChar = "~!@#$%^&*<>.?/";
      let pass = "";
      if (charAllow) {
        aplhabet += specialChar;
        console.log(aplhabet);
      }
      if (numAllow) {
        aplhabet += numbers;
        console.log(aplhabet);
      }
      for (let i = 1; i <= length; i++) {
        let index = Math.floor(Math.random() * aplhabet.length + 1);
        pass += aplhabet.charAt(index);
      }
      setPassword(pass);
    },[length,charAllow,numAllow,setPassword])

  // console.log(passwordGeneratorfn);


  useEffect(()=>{ 
    passwordGeneratorfn();
  },[length,numAllow,charAllow,passwordGeneratorfn])
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
                onChange={(event)=>{
                  setLength(event.target.value);
                }}
              />
              :length
            </label>

            <label>
              <input type="checkbox" className="checkbox" onChange={()=>{
                setnumAllow((prev)=>!prev);
              }} defaultChecked={numAllow} />
              :Numbers
            </label>

            <label>
              <input type="checkbox" className="checkbox" onChange={()=>{
                setcharAllow((prev)=>!prev);
              }} defaultChecked={charAllow} />
              :SpecialChar
            </label>

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
