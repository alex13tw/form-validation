import React, { useState } from 'react';
import './App.css';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [number, setNumber] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [submittedText1, setSubmittedText1] = useState([]);
  const [submittedText2, setSubmittedText2] = useState([]);

  const [submittedText3, setSubmittedText3] = useState([]);
  const [submittedText4, setSubmittedText4] = useState([]);

  const [submittedText5, setSubmittedText5] = useState([]);
  const [submittedText6, setSubmittedText6] = useState([]);


  const [inputFields, setInputFields] = useState({
    vfname: "",
    vlname: "",
    vnumber:"",
    vpassword:"",
    vemail:"",
    vgender:""
    
  });

  
  const [submitted, setSubmitted] = useState(false); 
  const [submitted2, setSubmitted2] = useState(false); 
  const [submitted3, setSubmitted3] = useState(true); 


  const [submittedfn, setSubmittedfn] = useState(false); 
  const [submittedln, setSubmittedln] = useState(false); 
  const [submittedn, setSubmittedn] = useState(false); 
  const [submittedem, setSubmittedem] = useState(false); 
  const [submittedpw, setSubmittedpw] = useState(false); 


 
  const Submit = (e) => {

    setSubmittedText1([ firstName]);
    setFirstName("");
    setSubmittedText2([ lastName]);
    setLastName("");
    setSubmittedText3([ number]);
    setNumber("");
    setSubmittedText4([ email]);
    setEmail("");
    setSubmittedText5([ password]);
    setPassword("");
    setSubmittedText6([ gender]);
    setGender("");
      
    
      e.preventDefault();
      
      setSubmitted2(true)

    if(inputFields.vfname==='' && inputFields.vlname==='' && inputFields.vnumber==='' && inputFields.vpassword==='' && inputFields.vgender==='' && inputFields.vemail==='' ){
      
      setSubmitted(true)
    }


    if(firstName!=='' && lastName!=='' && number!=="" && email!=="" && password!=="" && gender!==""){
      setSubmitted3(false);
     }

  };

  return (
    <div className='pt-5 '>
    <div className="row justify-content-center m-4">
    <div className="col-6 ">
    <form className='bg-success pb-3 shadow shadow-lg rounded' >
      <div className="row p-4 justify-content-center">
      <div className="col-12 p-2 d-flex justify-content-center pt-4">
      <input className='form-control' onBlur={() => firstName==='' ?setSubmittedfn(true):""}  type="text" required  placeholder="first name" value={firstName} onChange={(e) => setFirstName(e.target.value) } /> &nbsp;&nbsp;
      
      <input  className='form-control ' onBlur={() =>lastName==''? setSubmittedln(true):""} type="text" placeholder="last name"  value={lastName}  onChange={(e) => setLastName(e.target.value)}/>
      <br/>
      
      </div>
      <div className="col-12">
      
      {(firstName==="" && submitted2 && submitted3) || (submittedfn && firstName==="" && submitted3) ?(<p className='text-muted'>{inputFields.vfname="enter the first name"}</p> ):inputFields.vfname=''}
       
      {(lastName==="" && submitted2 && submitted3) || submittedln && lastName==="" && submitted3 ?(<p className='text-muted'>{inputFields.vlname="enter the last name  name"}</p>):inputFields.vlname=''}

      </div>
      <div className="col-12 p-2 d-flex justify-content-center">
        <input className='form-control' type="number" onBlur={() =>number==''? setSubmittedn(true):""}   placeholder="number" value={number}  onChange={(e) => setNumber(e.target.value)}/>
      </div>
      <div className="col-12">
      {( number.length < 10 && submitted2 && submitted3) || submittedn && number.length < 10 && submitted3 ?(<p className='text-muted'>{inputFields.vnumber=" number must contain greater than or equal to 10 characters"}</p>):inputFields.vnumber=''}
    
      </div>
      <div className="col-12 p-2 d-flex justify-content-center">
      <input className='form-control' onBlur={() => email==''? setSubmittedem(true):""}  type="email"  placeholder="email" value={email}  onChange={(e) => setEmail(e.target.value)}/>
      </div>
      <div className="col-12">
      {(!(email.match(/\S+@\S+\.\S+/)) && submitted2 && submitted3) || submittedem && !(email.match(/\S+@\S+\.\S+/)) && submitted3 ?(<p className='text-muted'>{inputFields.vemail="enter the correct e-mail address"}</p>):inputFields.vemail=''}
      </div>
      <div className="col-12 p-2 d-flex justify-content-center">
      <input className='form-control' type="password" onBlur={() =>password==''? setSubmittedpw(true):""} placeholder="password" value={password}  onChange={(e) => setPassword(e.target.value)}/>
      </div>
      <div className="col-12">
      {(password.length < 8 && submitted2 && submitted3 ) || submittedpw && password.length  < 8  && submitted3 ?( <p className='text-muted'>{inputFields.vpassword=" Password must contain greater than or equal to 8 characters."}</p>):inputFields.vpassword=''}
      </div>
      <div className="col-12 p-2 d-flex justify-content-center radio">
      <input   type="radio"  name="gender"  value="male"    onClick={() => setGender('male')}
        />
        <label className='text-white m-2'>Male</label>
        <input type="radio"  name="gender"  value="female"     onClick={() => setGender('female')}
        />
        <label className='text-white m-2'>Female</label>     
        </div>
        <div className="col-12">
        {gender ==="" && submitted3 ?(  <p className='text-muted text-center'>{inputFields.vgender="select one gender"}</p>):inputFields.vgender=''}
        
       </div>
        <div className="col-12 d-flex justify-content-center">
        <button className='btn btn-primary '  onClick={Submit} type='submit'>submit</button>
        </div>
    
       </div>  
      </form>
    </div>

    </div>      

    <div className="row justify-content-center">
      <div className="col-5 ">
      
      <h4></h4>

      {submitted?<div>{submittedText1.map(el => <p  className='text-center text-danger'> {el}</p>)} 
     {submittedText2.map(el => <p className='text-center text-danger'> {el}</p>)}
     {submittedText3.map(el => <p className='text-center text-danger'> {el}</p>)}
     {submittedText4.map(el => <p className='text-center text-danger'> {el}</p>)}
     {submittedText5.map(el => <p className='text-center text-danger'> {el}</p>)}
     {submittedText6.map(el => <p className='text-center text-danger'> {el}</p>)}</div>:""}
      
     
      </div>
    </div>  

    </div>
  );
}

export default App;
