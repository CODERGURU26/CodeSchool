import Navbar from "./Navbar";
import Footer from "./Footer";
import img from "./ContactUs/contact.svg";
import { useState} from "react";
import Swal from "sweetalert2";

const ContactUs = () => {
  const[fullname , setFullname] = useState('')
  const[email , setEmail] = useState('')
  const[phoneNo , setPhoneNo] = useState('')
  const[message , setMessage] = useState('')

  const contactUs = (e)=>{
    e.preventDefault()
    Swal.fire({
      title:"Thank You!",
      icon:"success",
      text: "We Will Reach You Soon!"
    })
  }
  return (
    <>
      <Navbar />
      <div style={{
        display: "flex"
      }}>
        <div >
          <img style={{
            marginTop:"30px",
            filter:"drop-shadow(5px 5px 10px gray)",
            height:"100vh"
            }} src={img} width="90%" />
        </div>
        <div style={{
          width: "70%",
        
        }}> <form onSubmit={contactUs} style={{
          display:"flex",
          flexDirection:"column",
          gap:40,
          filter:"drop-shadow(5px 5px 10px gray)",
          padding:40,
          height:"100vh",
        }}>
             <div style={{
              display:"flex",
              flexDirection:"column",
              gap:10
             }}>
             <label style={{  fontWeight:"bold"}}>Fullname</label>
              <input
               className="border rounded-[10px]"
               style={{padding:10}}
              onChange={(e)=>setFullname(e.target.value)}
              type="text" placeholder="Enter Your Name" required  />
              
             </div>
             <div style={{
              display:"flex",
              flexDirection:"column",
              gap:5,
             }}>
             <label style={{ fontWeight:"bold"}}>Email</label>
              <input
              style={{padding:10}}
              className="border rounded-[10px]"
              onChange={(e)=>setEmail(e.target.value)}
              type="text" placeholder="example@gmail.com" required  />
              
             </div>
             <div style={{
              display:"flex",
              flexDirection:"column",
              gap:5
             }}>
             <label style={{ fontWeight:"bold"}}>Phone-No</label>
              <input
               className="border rounded-[10px]"
               style={{padding:10}}
              onChange={(e)=>setPhoneNo(e.target.value)}
              type="number" placeholder="Phone-No." required  />
              
             </div>
             <div style={{
              display:"flex",
              gap:5,
              flexDirection:"column",
             }}>
                <label style={{ fontWeight:"bold"}}>Message Here</label>
                <textarea  
                 className="border rounded-[10px]"
                 style={{padding:30}}
                onChange={(e)=>setMessage(e.target.value)}
                placeholder="Enter Your Query?" ></textarea>
              
             </div>
             <button style={{
              border:"none",
              padding:"10px 24px",
              background:"darkorange",
              color:"white",
              fontSize:18,
              borderRadius:10,
              width:"fit-content",
              fontWeight:"bold"
             }}>Submit</button>
          </form>  
          </div>
      </div>

      <Footer />
    </>
  )
}

export default ContactUs