

const AboutMe = () => {
    return (
        <section className="page-section mb-0" id="aboutme">
        <div className="container">
          {/* About Section Heading*/}
          <h2 className="page-section-heading text-center text-uppercase">Quién soy?</h2>
          {/* Icon Divider*/}
          <div className="divider-custom">
            <div className="divider-custom-line" />
            <div className="divider-custom-icon"><i className="fas fa-star" /></div>
            <div className="divider-custom-line" />
          </div>
          {/* About Section Content*/}
          <div className="row">
            <div className="col-lg-4 ml-auto"><img src="images/mifoto.jpg" className="rounded" width="300"></img></div>
            <div className="col-lg-8 mr-auto">
              <div className="row">
                 <div className="col">
                 <p className="lead">
                  Hola!, mi nombre es Ricardo Arana Reyes Guerrero, soy ingeniero de sistema especializado en el desarollo de software para sistemas de información en la web. Estoy más dedica al desarrollo de aplicaciones web del lado del cliente (frond-end) utilizando Javascript, soy titulado de la Universidad Nacional del Callao y actualmente trabajando como Aquitecto de aplicaciones en Everis Perú
                </p>
                 </div>
              </div>
              <div className="text-center">
              <div className="row mt-4">
              <div className="col">
                <a href="https://www.linkedin.com/in/ricardo-arana-reyes-guerrero/" target="_blank">
                  <i className="fab fa-linkedin mr-2 fa-2x" />
                </a>
              </div>
                <div className="col">
                <a href="https://twitter.com/Rickyrish" target="_blank">
                  <i className="fab fa-twitter mr-2 fa-2x" />
                  </a>
                </div>
                <div className="col">
                <a href="https://www.youtube.com/channel/UCVXDZUMTSPpM8tVCjiXnz7Q" target="_blank">
                  <i className="fab fa-youtube mr-2 fa-2x" />
                  </a>
                </div>
                <div className="col">
                <a href="https://github.com/ricardo-arana" target="_blank">
                  <i className="fab fa-github mr-2 fa-2x" />
                  </a>
                </div>
                <div className="col">
                <a href="https://medium.com/@ricardo.aranareyes" target="_blank">
                  <i className="fab fa-medium mr-2 fa-2x" />
                  </a>
                </div>
                
              </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    );
}

export default AboutMe;