import { useState} from "react";
import './Home.scss';
import Form from "./Form";
import { redirect } from "react-router-dom";

export default function Home() {

  const [formState, setFormState] = useState(false);


  const submitForm = (e) => {
    e.preventDefault();
    setFormState(true);
    return redirect("/Connect");
  };


  return (
    <div className="home">
      <div className="home_content"> 
        <h1> Welcome! </h1>

        {!formState && <Form 
        submitForm={submitForm}
        />}
      
      </div>
      
    </div>
  )
}
