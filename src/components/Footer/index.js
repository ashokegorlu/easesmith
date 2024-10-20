import React from 'react'
import "./index.css"

function Footer() {
  return (
    <>
    <footer className="footer bg-neutral text-neutral-content p-10 mt-4">
    <form className='text-neutral-content'>
    <h6 className="footer-title">Newsletter</h6>
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text text-neutral-content">Enter your email address</span>
      </label>
      <div className="join">
        <input
          type="text"
          placeholder="username@site.com"
          className="input input-bordered join-item text-warning-content" />
        <button className="btn btn-primary join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
  
  <nav>
    <h6 className="footer-title">Services</h6>
    <span className="link link-hover">Branding</span>
    <span className="link link-hover">Design</span>
    <span className="link link-hover">Marketing</span>
    <span className="link link-hover">Advertisement</span>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <span className="link link-hover">About us</span>
    <span className="link link-hover">Contact</span>
    <span className="link link-hover">Jobs</span>
    <span className="link link-hover">Press kit</span>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <span className="link link-hover">Terms of use</span>
    <span className="link link-hover">Privacy policy</span>
    <span className="link link-hover">Cookie policy</span>
  </nav>
</footer>
<aside className='p-6 bg-neutral text-neutral-content  p-10'>
    <svg
      width="50"
      height="50"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      className="fill-current">
      <path
        d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
    </svg>
    <p className=''>
    Chaperone
      <br />
      <br/>
      lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necessitatibus <br/>enim ut internos accusantium a numquam autem ab rerum omnis. lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necessitatibus lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necessitatibus
    </p>
  </aside>
<footer className="footer footer-center bg-neutral text-neutral-content rounded p-10">
  <nav className="grid grid-flow-col gap-4">
    <spam className="link link-hover">About us</spam>
    <spam className="link link-hover">Contact</spam>
    <spam className="link link-hover">Jobs</spam>
    <spam className="link link-hover">Press kit</spam>
  </nav>
  <nav>
    <div className="grid grid-flow-col gap-4 ">
    <a href="https://www.linkedin.com/in/hemanthmani" className="footer__link"><i className="fa-brands fa-linkedin fa-bounce"></i></a>
                    <a href="https://www.instagram.com/weird0__813?igsh=bDRucG1xb3pzNmlp" class="footer__link"><i className="fa-brands fa-instagram fa-bounce"></i></a>
                    <a href="https://github.com/HemanthMani813" className="footer__link"><i class="fa-brands fa-github fa-bounce"></i></a>

    </div>
  </nav>
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by Hemanth Mani</p>
  </aside>
</footer>
    </>
  )
}

export default Footer