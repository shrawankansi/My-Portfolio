

// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import "./Contact.css"
function ContactForm() {
  const [state, handleSubmit] = useForm("xnqkqeyb");
  if (state.succeeded) {
      return <p className='Thanks'>Thanks for joining us!</p>;
  }
  return (
      <form onSubmit={handleSubmit} >
        <div className="contactUs">
          <h1>Contact Us</h1>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label htmlFor="message">YOUR MESSAGE</label>
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button className='submit btn_shadow' type="submit" disabled={state.submitting}>
        Submit
      </button>
      </div>
    </form>
  );
}
function App() {
  return (
    <ContactForm />
  );
}
export default App;



////////////////////////old code start/////////////////////////////////////////


// import React, { useState } from "react"
// import contact1 from "./contact1.png"
// import "./Contact.css"


// const Contact = () => {
//   const [data, setData] = useState({
//     fullname: "",
//     phone: "",
//     email: "",
//     subject: "",
//     message: "",})

//   const InputEvent = (event) => {
    
//     const { name, value } = event.target

//     setData((preVal) => {
//       return {
//         ...preVal,
//         [name]: value,
//       }
//     })
//   }

//   const formSubmit = (event) => {
//     event.preventDefault()
//     alert(
//       `My name is ${data.fullname}. 
// 	My phone number is ${data.phone}. 
// 	My email address is ${data.email}. 
// 	My Subject on  ${data.subject}. 
// 	Here is my message I want to say : ${data.message}. 
// 	`
//     )
//   }


//   return (
//     <>
//       <section className='Contact' id='contact'>
//         <div className='container top'>
//           <div className='heading text-center'>
//             <h4>CONTACT</h4>
//             <h1>Contact With Me</h1>
//           </div>

//           <div className='content d_flex'>
//             <div className='left'>
//               <div className='box contact'>
//                 <div className='img'>
//                   <img src={contact1} alt='' />
//                 </div>
//                 <div className='details'>
//                   <h1>Shrawan Kansi</h1>
//                   <p>FrontEnd Developer</p>
//                   <p>I am available for freelance work. Connect with me via and call in to my account.</p> <br />
//                   <p>Phone: 7292877283</p>
//                   <p>Email: shrawankansi@gmail.com</p> <br />
//                   <span>FIND WITH ME</span>
//                   <div className='button f_flex'>
//                     <button className='btn_shadow'>
//                       <i className='fab fa-facebook-f'></i>
//                     </button>
//                     <button className='btn_shadow'>
//                       <i className='fab fa-instagram'></i>
//                     </button>
//                     <button className='btn_shadow'>
//                       <i className='fab fa-twitter'></i>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className='right box_shadow'>
//               <form onSubmit={formSubmit} >

   





//                 <div className='f_flex'>
//                   <div className='input row'>
//                     <span>YOUR NAME</span>
//                     <input type='text' name='fullname' value={data.fullname} onChange={InputEvent} />
//                   </div>
//                   <div className='input row'>
//                     <span>PHONE NUMBER </span>
//                     <input type='number' name='phone' value={data.phone} onChange={InputEvent} />
//                   </div>
//                 </div>
//                 <div className='input'>
//                   <span>EMAIL </span>
//                   <input type='email' name='email' value={data.email} onChange={InputEvent} />
//                 </div>
//                 <div className='input'>
//                   <span>SUBJECT </span>
//                   <input type='text' name='subject' value={data.subject} onChange={InputEvent} onClick="" />
//                 </div>
//                 <div className='input'>
//                   <span>YOUR MESSAGE </span>
//                   <textarea cols='30' rows='10' name='message' value={data.message} onChange={InputEvent}></textarea>
//                 </div>
//                 <button className='btn_shadow'>
//                   SEND MESSAGE <i className='fa fa-long-arrow-right'></i>
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }

// export default Contact


// //////////////////////////////////////////////////////////////////////////