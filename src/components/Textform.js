import React, {useState} from "react";


function Textform(props) {

  const handleOnChange = (event) =>{
    setText(event.target.value);
  }
  const handleonClick1 = () =>{
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleonClick2 = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleonClick3 = () => {
    setText('');
  }
  const handleonClick4 = () => {
    navigator.clipboard.writeText(text)
  }
  const handleonClick5 = () => {
    let newText = text.charAt(0).toUpperCase()+text.substring(1).toLowerCase()
    setText(newText)
  }
  const[text, setText] = useState("");
  // setText("")
  return (
    <>
      <div className="conatiner">
      <h1>{props.txt}</h1>
        <textarea
          class="form-control"
          id="my-box"
          rows="6"
          value={text}
          onChange={handleOnChange}
        ></textarea>
        <div className="container">
        <button className="btn btn-outline-danger" onClick={handleonClick1}>UPPER CASE</button>
        <button className="btn btn-outline-danger m-2" onClick={handleonClick2}>LOWER CASE</button>
        <button className="btn btn-outline-danger m-2" onClick={handleonClick3}>CLEAR</button>
        <button className="btn btn-outline-danger m-2" onClick={handleonClick4}>COPY</button>
        <button className="btn btn-outline-danger m-2" onClick={handleonClick5}>CAPITIALIZE</button>
        </div>
      </div>
      <div className="container">
        <h2>Your Text Summary</h2>
        <p>{text.split(' ').length} words and {text.length} characters</p>
        <p>minutes to raed : {0.32*text.split(' ').length}sec</p>

        <h3>Preview : </h3>
        <p>{text.length>0 ? text : "Enter in the textbox to preview it"}</p>
      </div>
    </>
  );
}

export default Textform;
