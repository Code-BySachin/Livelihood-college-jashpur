import "./Contact.css";

function Contact() {
  return (
    <>
      <div className="contact-bgcontainer">
        {/* <header className="header">
          <div className="logo">
            <h3>District Project Livelihood college Jashpur</h3>
          </div>
          <nav>
            <input
              type="text"
              placeholder="Search - Keyword, Phrase"
              className="search-bar"
            />
            <button className="search-btn">Search</button>
            <button className="adv-search">Advanced Search</button>
          </nav>
        </header> */}

        <main className="contact-container">
          <div className="contact-content">
            <div className="contact-form">
              <h2>Query Form</h2>
              <label className="label">Full Name</label>
              <input type="text" placeholder="Enter full name..." />
              <label className="label">Email</label>
              <input type="email" placeholder="Enter email..." />
              <label className="label">Subject</label>
              <input type="text" placeholder="Enter subject..." />
              <label className="label">Message</label>
              <textarea placeholder="Enter your message..."></textarea>
              <button>Submit</button>
            </div>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14703.384456818227!2d84.14247401669854!3d22.882142368356945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398a6735356b815d%3A0x26f267846411c51b!2sLivlihood%20college%20jashpur%20nagar!5e0!3m2!1sen!2sin!4v1743156160909!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{border : 0}}
                allowFullScreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <h2>Contact us</h2>

          <p>
            This is the Official Portal of the Government of India designed,
            developed, and hosted by
            <a href="https://www.nic.in/"> National Informatics Centre (NIC)</a>
            ,
            <a href="https://www.meity.gov.in/">
              {" "}
              Ministry of Electronics & Information Technology
            </a>
            .
          </p>
          <p>
            The objective behind the Portal is to provide a single window access
            to information and services.
          </p>

          <h3>Address:</h3>
          <p>
            Web Information Manager <br />
            National Informatics Centre <br />
            A4B4, 3rd Floor, A Block <br />
            CGO Complex, Lodhi Road <br />
            New Delhi-110003 <br />
            Email: indiaportal[at]gov[dot]in
          </p>
        </main>
      </div>
    </>
  );
}

export default Contact;
