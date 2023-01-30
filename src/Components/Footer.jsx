import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <div className='footer-container'>
     <div className='foot-container'>
     <ul className='table'>
        <li>Lorem, ipsum dolor.</li>
        <li>Lorem, ipsum dolor.</li>
        <li>Lorem, ipsum dolor.</li>
        <li>Lorem, ipsum dolor.</li>
        <li>Lorem, ipsum dolor.</li>
     </ul>
     <div className='logo-name'><img className='logo' src='https://imgs.search.brave.com/6U392SZsw1Ij8a1SP6zFZlqoCaPGzFBqeESZExWMe-c/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjEv/MDIvQ2FuYWRpYW4t/QnJvYWRjYXN0aW5n/LUNvcnBvcmF0aW9u/LUxvZ28tMTk4Ni0x/OTkyLnBuZw'></img>
     <h3>Wearea</h3></div>
     <ul className='networks'>
        <br></br>
        <li><i class='bx bxl-instagram'> Instagram</i></li>
        <li><i class='bx bxl-facebook-circle' > Facebook</i></li>
        <li><i class='bx bxl-linkedin-square'> LinkedIn</i></li>
     </ul>
     </div>
    </div>
  )
}

export default Footer