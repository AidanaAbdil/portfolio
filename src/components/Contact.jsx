function Contact () {
    return (
      <section id="contact">
        <div class="container">
          <h2>Contact Me</h2>
          <p>
            If you'd like to get in touch, feel free to email me at: {""}
            <a href="mailto:your.email@example.com">
              aidana.abdilkyzy@icloud.com
            </a>
          </p>
        </div>

        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/aidanaabdilkyzy"
            target="_blank"
            className="social-icon"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/AidanaAbdil"
            target="_blank"
            className="social-icon"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.instagram.com/aboutaidana"
            target="_blank"
            className="social-icon instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </section>
    );
}

export default Contact;