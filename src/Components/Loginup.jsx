import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import "./Signup.css"
export default function Loginup(){
    const[data,setData]=useState({useremail:"",userpassword:""})
    function handleChange(e){
        setData(prev=>{ 
            return{
                ...prev,useremail:e.target.value
            }
        })
    }
    function handlePass(e){
        setData(prev=>{ 
            return{
                ...prev,userpassword:e.target.value
            }
        })
    }
    function handleSubmit(e){
        e.preventDefault()
    const arr=JSON.parse(localStorage.getItem("userdata"))
    console.log(arr)
    var a=false;
    for(var i=0;i<arr.length;i++)
    {
if(arr[i].email===data.useremail)
{
    if(arr[i].password===data.userpassword)
    {
    alert("Login Success")
        a=true
    }
}

    }
    if(a===false)
    {
        alert("Failed")
    }
    
}
    return(
        <div>
            <img id="lo" src="https://auth.ayoa.com/images/ayoa-icon-logo.png" alt="loh" />
        
         <form onSubmit={handleSubmit}>
           
            <label>
             <input 
            type="text"
            className="form-control"
            placeholder="Email "
         name="useremail"
            required="required"            
         onChange={handleChange}
            /></label>
            <br></br>
            <label>
             <input 
            type="text"
            className="form-control"
            placeholder=" Password"
        name="userpassword"
            required="required"            
            onChange={handlePass}
            /></label>
            <br></br> 
          
          
           <label>
           <input  id="sig" type="Submit" 
           className="form-control" value="SIGN IN WITH EMAIL" />
           </label> 
          
            </form>
            <p>or sign up with:</p>
            <div id="loginpath">
              <button>
              <span class="icon-wrapper">
                            <svg class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 48 48">
                                <g>
                                    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                                    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                                    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                                    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                                    <path fill="none" d="M0 0h48v48H0z"></path>
                                </g>
                            </svg>
                        </span>
                       Google
              </button>
              <button>
              <svg class="icon" width="20px" height="20px" viewBox="0 0 38 38" >
                                <path fill="#4267B2" d="M35.8330074,0.0784104477 L2.16699253,0.0784104477 C1.01323881,0.0784104477 0.0784104477,1.0133806 0.0784104477,2.16699253 L0.0784104477,35.8330074 C0.0784104477,36.9864776 1.0133806,37.9215895 2.16699253,37.9215895 L20.2915747,37.9215895 L20.2915747,23.2667761 L15.3599403,23.2667761 L15.3599403,17.5554329 L20.2915747,17.5554329 L20.2915747,13.3435298 C20.2915747,8.45570895 23.276985,5.79414926 27.6373433,5.79414926 C29.7259253,5.79414926 31.5211418,5.94955224 32.0442089,6.01902985 L32.0442089,11.127194 L29.0200895,11.1286119 C26.6486344,11.1286119 26.189515,12.2554254 26.189515,13.9089926 L26.189515,17.5554329 L31.8451344,17.5554329 L31.1088135,23.2667761 L26.1896567,23.2667761 L26.1896567,37.9215895 L35.8331492,37.9215895 C36.9866194,37.9215895 37.9217314,36.9863358 37.9217314,35.8330074 L37.9217314,2.16699253 C37.9215895,1.01323881 36.9864776,0.0784104477 35.8330074,0.0784104477" id="Shape"></path>
                            </svg>
              
                       Facebook
              </button>
              <button>
            <span>
            <img  id="apple" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG0AAACGCAMAAADgpfQlAAAAaVBMVEUAAAD////y8vL8/PyAgID5+fnr6+uampr29va8vLxNTU2MjIxKSkpiYmI9PT3Nzc0zMzNcXFzh4eHCwsJ4eHi1tbWrq6tSUlLU1NRtbW0sLCyGhoZXV1dERESSkpILCwsXFxcdHR0kJCRPXIIBAAAETklEQVRogb2a54KqMBCFJ3RkBUVBsay47/+QV7GlDIELOZ7fhA9SpmVIOFRRb38osjxA7lANddrjaUmV01MbOO3DIirAtHJHksAzWZMi6C7xGxVmfeFcmnfQYAcgLWo1GB1xNM+AUQqj+fo0ErW2TTKPpm+Qm3bWAXNotQmzT+QcWsnADh6KtmNov/Yh02kpA7ta98gMWpgztHhg0GRaxcBWCYrG/ZrN2cyiFQwsGBw1lRYw8zg8aiqN+TX7UZtD25uwcsw3TqOZRssWIMyl6ct2GAWbSjursPWADZlJU2FDJsQlbTFmfzii7QYNiDNaG4z/rxm0YLFYb+P9kBV2RBNh6E8YZaX5SRSVZRl54Yg3edGmzo7BMa6LyOv5lH5aVAXrVwT3s62tJ8rfZ8uLvE9PwYb7wh5aFGvnlyiP+3ZEwTiEmxozk2NpmwU7nM61OUPlL//s49hrP8jQCs4tvxQoBjGser7rw7PTIiYAVpTXzxlNiuA68Oz98cJCq0a84HLbNFW8tE2BrN9e2nbkG/5LS4+lhcZGdKM8YmhGnulMV8+gRX8oGNFfotFwf3bXj0rzf5Awoq1Cg+xGWXuJxuVHLtWm0r95YNgiktdtyFzNVKOcNy5jcah3xaaj+WNN3jR9DGVH4/JMd8qEQguhR60RKg26aitPoy2RNMXX32jlZXjMZGVCo3HlKle6CJ0GcqGdUp1WtjhYLnQa0h5XBo0PdJ3IqB+SAMYHW6HTEhzMrHsRU2dxpYORFxFwkyx1mCDg2c5MWoajmfVzAsYIZnZJXOXbkczkmYBBAkMbka9NFHOlQzjnxtFwunz137h1a79KW+FoZi2RgHFCbdKA4Z3h3gQBs8SFUVgjW5lqrgxDifQ4RhAE9abmBTEyUjCvWyhC0vQbORLInEM3JySG6pmz1Og05BHQV47EBkrLNRo0WdTCvFv+BvQCd6UqDZp2k7J0hK6W3CKGUqZxnRtutZdoAlwHpY95vtOOcNqr1HWnQQ3zU49b4zvNA5+Bh+43Tl0ND15T7pSnD9o3prLjdbTwK1N5s2KPSi/WD7xVPGhQB/7W9VUzX3+Dlr1oWCf3VPm+6/gC7PS5WUEGsU9tPjQfDjsL6Y4qRtNSmebhigud8lCmoX+uEgoN6wlyX6Vh45NUaDTkzelZ6DSk4ylNGi5AeWVWCs1vMbC/hKOh7sbewbnWgwG5ivjUTfT+EsChk3pvdRogTJfKXUanjnPXI3cGmV1IjpdOqZmYtMRtXduz09wundpBxnWPOQyJtK5RtlfNWTCrVyj5PjxH1y1r/b09XX9OcCeja6+vo9GaZJ2bYxbH2XFrrVotzZ7G3v7JvpuyPCg+zZuhVxz7yuBHpmOzv1uTMyptUxitrknBTrtZMLfSRKl/9aGvX7PM9F6wNf+kte+1kj3Cie0tfSpJT/KK9fUwD/T07uNmdWnzJt4MNguHRZ01y+U2Tvsf/QeLEjFuxwYp0gAAAABJRU5ErkJggg==" alt="hi" />
             
            </span>
            <span>       
            
                       Apple</span> 
              </button>
            </div>
            <Link to="/Sign"><p><span>Don't have an account?</span><span>Sign up</span></p></Link>
            <p>Forgot password?</p>
            <p>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
            <img id="open" src="https://auth.ayoa.com/images/og_logo.svg" alt="to" />
        </div>
    )
}