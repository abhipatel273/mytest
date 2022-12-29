import React,{useState} from "react";


export default function Textform(props) {

   const handleon = ()=>{
    let abc = text.toUpperCase();
    setText(abc);
   }

   const handlechange = (e)=>{
    setText(e.target.value);
   }

    const [text, setText] = useState("replace text");
    
    // setText("abc") this is correct way
  return (
    <>
    <div>
      <h1>{props.title}</h1>
      <div className="input-group mb-2">
        <label className="input-group-text">With textarea</label>
        <textarea className="form-control" value={text} onChange={handlechange} id="myform" aria-label="With textarea"></textarea>
      </div>
      <button className="btn-success" onClick={handleon}>text change</button>
    </div>
    <div className="">
       <h5>text summary</h5>
       <p className="my-2"> {text.split(" ").length} word and {text.length} character</p>
    </div>
    </>
  );
}
