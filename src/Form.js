import React from 'react'
import './Home.scss';
import { Link} from 'react-router-dom';

export default function Form({ submitForm }) {
  return (
    <div className="formdiv">
      <h2 className="form_title"> We'd love to learn more about you</h2>
      <form className="survey">
        <div className="question"> 
          <p>Question 1: How are you feeling today?</p>
          <select name="feeling" className="feeling_dropdown dropdowns">
            <option>Great</option>
            <option>good</option>
            <option>average</option>
            <option>not great</option>
            <option>I need immediate help</option>
          </select>
        </div>
        <div className="question">
          <p>Question 2: What are you here for?</p>
          <select name="problems" className="problem_dropdown dropdowns" multiple>
            <option value="addiction">Addiction</option>
            <option value="confidence">Self-esteem</option>
            <option value="depression">Depression</option>
            <option value="grief">Grief</option>
            <option value="illness">Illness</option>
            <option value="phobia">Phobia</option>
            <option value="relationships">Relationships</option>
            <option value="trauma">Trauma</option>
            <option value="sleep">Sleep</option>
          </select>
        </div>
      
        <div className="question">
          <p> Question 3: Are you looking to share, listen, or both?</p>
          <select name="problems" className="problem_dropdown dropdowns" multiple>
            <option value="share">Share</option>
            <option value="listen">Listen</option>
            <option value="both">Both</option>
          </select>
        </div>
        <div className="button_flex">
          <Link to="/connect">Connect</Link>
      </div>
      </form>
      
    </div>
  )
}
