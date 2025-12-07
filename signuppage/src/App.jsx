import React from "react";

/**
 * PackNgo SignUp page - React + plain CSS
 * Put an image at: public/signup.jpg
 */

export default function SignUp() {
  return (
    <div className="page">
      <div className="top-label">sign up page</div>

      <header className="site-header">
        <div className="container header-inner">
          <div className="brand">
            <div className="logo">P</div>
            <div className="brand-name">PackNgo</div>
          </div>

          <div className="header-right">
            <span>Already have an account? <a href="#" className="link">Log In</a></span>
          </div>
        </div>
      </header>

      <main className="hero-area">
        <div className="container hero-inner">
          <div className="panel-wrap">
            <div className="panel left-panel">
              <h2 className="panel-title">Create an account</h2>

              <form className="form">
                <label className="field">
                  <span className="vis">Full Name</span>
                  <input type="text" placeholder="Full Name" />
                </label>

                <label className="field">
                  <span className="vis">Email</span>
                  <input type="email" placeholder="example.email@gmail.com" />
                </label>

                <label className="field">
                  <span className="vis">Password</span>
                  <div className="pw-row">
                    <input type="password" placeholder="Enter at least 8+ characters" />
                  </div>
                </label>

                <label className="field">
                  <span className="vis">Confirm Password</span>
                  <input type="password" placeholder="Confirm Password" />
                </label>

                <button type="submit" className="btn submit">Sign in</button>
              </form>

              <div className="divider">Or sign in with</div>

              <div className="socials">
                <button className="social">G</button>
                <button className="social">f</button>
              </div>
            </div>

            <div className="panel right-panel">
              <img src="https://static.vecteezy.com/system/resources/previews/008/063/100/large_2x/rear-view-portrait-of-young-man-traveler-with-backpack-standing-on-a-mountain-with-arms-spread-open-travel-life-style-and-adventure-concept-free-photo.jpg" alt="traveler" />
            </div>
          </div>
        </div>

        {/* decorative shapes */}
        <div className="circle big"></div>
        <div className="circle small"></div>
        <div className="rect decor-rect"></div>
      </main>
    </div>
  );
}
