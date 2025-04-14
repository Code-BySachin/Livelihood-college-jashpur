import './AboutUS.css';

function AboutUS() {
  return (
    <>
      {/* <div className="aboutus-bgcontainer"> */}
        {/* <header className="aboutus-header">
          <div className="aboutus-logo">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNabkHletDXBsLWAUCPgkEsG4Lu9kpqYnl6g&s"
              alt="Logo"
              className="logo-img"
            />
            <h1>District Project Livelihood College, Jashpur (Chhattisgarh)</h1>
          </div>
        </header> */}

        <main className="aboutus-container">
          <img
            src="https://www.thenewsindia.in/uploads/chhattisgarh/1689421619.jpg"
            className="aboutus-image"
            alt="College Image"
          />
          <p className="aboutus-text">
            The District Project Livelihood College, Jashpur was established as a government
            initiative to provide skill-based training and employment opportunities to the youth.
            Recognizing the increasing demand for specialized skills, the college was founded to bridge
            the gap between education and employability. Over the years, it has grown into a center of
            excellence, offering courses in coding, software programming, graphic design, finance,
            business management, and education. By collaborating with industries, trade associations,
            and employers, the college ensures that its training programs align with the evolving job
            market, equipping students with practical expertise that enhances their career prospects.
          </p>
          <div className="aboutus-information">
            <button className="learn-more-btn">Learn More</button>
          </div>
          <div className="aboutus-content">
            <div>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuWEeMuQATYRyiwi4WAZ06wJK0rsyc7gSgNw&s"/>
            </div>
            <div className='aboutusImg'>
              <h3>Mr. Amarnath Dhamgaya</h3>
              <p>Principal</p>
              <p>dplc-jashpur[at]cg[dot]gov[dot]in</p>
              <p>7049790009</p>
              <p>District Project Livelihood College Jashpur (Chhattisgarh)</p>
            </div>
          </div>
        </main>
        
      {/* </div> */}
    </>
  );
}

export default AboutUS;
