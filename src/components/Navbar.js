
import React, { useState } from 'react';
export default function Navbar(props) {
  /*  USESTATE */

  const [text, setText]= useState("Change your text..!!");
  let btn = document.querySelectorAll(".btn");
   if(text.length===0){

  btn.forEach((r)=>{
    r.disabled=true;
    r.style.cursor="not-allowed";
  })
}

else{
     btn.forEach((r)=>{
          r.disabled=false
          r.style.cursor="pointer"
        })
}

  const upperCase = ()=>{
     let newto = text.toUpperCase();
     setText(newto)
   
  }
  
  const loCase = ()=>{
     let newto = text.toLowerCase();
     setText(newto)
  }
  
  const onChange =(e)=>{
   setText(e.target.value);

  }

  const copy = ()=>{
     let teext= document.getElementById('boxx');
     teext.select();
     document.getSelection().removeAllRanges();
     navigator.clipboard.writeText(teext.value)
  }

  const clearText = ()=>{
  const clr = "";
  setText(clr)
  
  }

  const converFirst = ()=>{
     let newto = text.toLowerCase()
     .split(' ')
     .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
     })
     .join(' ');
     setText(newto)
 
     }
         /*  USESTATE */
  
  return (
     
    <div className='container-fluid p-0 '>
      <nav className={` navbar navbar-expand-lg bg-${props.mode==="black"} navbar-${props.mode} `}>
          <a href="navbar-brand">
               <h1 className={` text-uppercase text-${props.mode==="light"?"dark":"light"}`}>textutils</h1>
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
         </button>
          <div className="container-fluid " id='navbarSupportedContent' >
               <ul className="ml-auto collapse navbar-collapse navbar-nav h5 text-uppercase " >
                    <li className="nav-item"><a className={`nav-link text-${props.mode==="dark"?"light":"dark"}`} href="/">home</a></li>
                    <li className="nav-item"><a className={`nav-link text-${props.mode==="dark"?"light":"dark"}`} href="/">services</a></li>
                    <li className="nav-item"><a className={`nav-link text-${props.mode==="dark"?"light":"dark"}`} href="/">contact</a></li>
                    <li className="nav-item"><a className={`nav-link text-${props.mode==="dark"?"light":"dark"}`} href="/">about us</a></li>
               </ul>
          </div>
          <div className="container d-flex text-nowrap justify-content-end "  >
            <button onClick={()=>props.toggleMode('primary')} style={{height:'2vw',borderRadius:"200px",border:"none"}}className=" bg-primary text-right p-4"></button>
             <button onClick={()=>props.toggleMode('success')} style={{height:'2vw',borderRadius:"200px", border:"none",marginLeft:"1vw"}} className="bg-success p-4"></button>
              <button onClick={()=>props.toggleMode('warning')} style={{height:'2vw',borderRadius:"200px", border:"none",marginLeft:"1vw"}} className="bg-warning p-4"></button>
               <button onClick={()=>props.toggleMode('danger')}  style={{height:'2vw',borderRadius:"200px", border:"none",marginLeft:"1vw"}} className="bg-danger p-4" ></button>
                <button onClick={()=>props.toggleMode('dark')}    style={{height:'2vw',borderRadius:"200px", border:"none",marginLeft:"1vw"}} className="bg-dark  p-4"></button>
             </div>
      </nav>

         <div className="container-fluid">
          <h1 className={`text-uppercase mt-5  text-center text-${props.mode==="dark"?"light":"dark"}`}>Try textutils: You can change your text with one click</h1>
         
         </div>
         <div className="container-fluid text-center">
         <textarea value={text} id="boxx" onChange={onChange} style={{backgroundColor: props.mode==="dark"?"#000":"white"}} className={`form-control mt-5 box text-${props.mode==="dark"?"white":"dark"}`} cols="200" rows="20">  {text} </textarea>
        <p className={`mt-5 text-${props.mode==="dark"?"light":"dark"}`} > Length of your text {text.length}</p>
        <p className={`text-${props.mode==="dark"?"white":"dark"}`}>Length of your words {text.split(" ").filter((e)=>{ return e.length !==0 }).length}</p>

         </div>
         <div style={{marginRight:'28vw'}}  className=" d-flex container-fluid">
         <div className="row">
    <div className="col">
    
    <button  className='mr-2  mt-1 btn btn-success text-white' onClick={converFirst}>convert first letter to uppercase</button>
    <button  style={{ marginRight:'.5vw' }} onClick={loCase} className=' btn btn-primary mt-1 text-white'>convert to Lowercase</button>
    <button   style={{ marginRight:'.5vw' }} onClick={upperCase} className="btn btn-dark mt-1 text-white " >convert to uppercase</button>
    <button  onClick={copy} className='btn btn-danger mt-1 text-white'>copy to clipboard</button>
    <button  className=' ml-2 mt-1 btn btn-warning text-white' onClick={clearText}>clear output</button>
    </div>
    
         </div>

         </div>

    </div>
   
  )
}
