import React from "react";

function ContactPage() {
  return (
    <div className="content-box">
      <div className="text-5xl text-left">Contact</div>
      <div className="flex h-[70vh]">
        <div className="w-3/4 m-auto">
          <p>
            Interested in working together? I am always open for new projects
            and opportunities where I can contribute, learn, and grow. I'll get
            back to you as soon as I can.
          </p>
          <div className="flex">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=lehzter@gmail.com"
              target="_blank"
              className="m-auto p-3 rounded-lg text-xl border border-lightblue text-white font-bold hover:text-navy hover:bg-lightblue"
            >
              <i className="fa fa-envelope fa-sm"></i> EMAIL ME
            </a>
          </div>
          <br />
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/lester-qui%C3%B1ones-95b012220/"
              target="_blank"
              className="m-auto p-3 rounded-lg text-xl border border-lightblue text-white font-bold hover:text-navy hover:bg-lightblue"
            >
              <i className="fab fa-linkedin-square fa-sm"></i> MESSAGE ME
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
