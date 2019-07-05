import React from "react"
import Modal from 'react-modal';

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const modalStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    minWidth              : '300px',
    width                 : '500px',
    maxWidth              : '90vw',
    transform             : 'translate(-50%, -50%)'
  },
  overlay : {
    background             : 'rgba(0,0,0,.8)'
  }
}

Modal.setAppElement('#___gatsby')

class ContactForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = this.getInitialState();

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  getInitialState = () => {
    return {
      submitted:false,
      userMessage: '',
      modalIsOpen: false
    }
  }

  openModal = () => {
    this.setState({modalIsOpen: true});
  }


  closeModal = () => {
    this.setState(this.getInitialState());
  }


  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => {
        this.setState({
          submitted: true,
          userMessage: "Thanks for sending me a message! We'll talk soon!."
        })
      })
      .catch(error => {
        this.setState({
          submitted: false,
          userMessage: "There was an error with your submission... " + error
        })
      })
  };


  render() {
    return (
      <div>
        <button onClick={this.openModal} style={{margin: "0 auto"}} className="button">
          Or Just Email Me
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Contact Me"
          style={modalStyles}
        >
          {
            this.state.submitted ?
              <p>{this.state.userMessage}</p>
              :
              <section>
                <p key="msg">{this.state.userMessage}</p>
                <h1 key="h1">Send me an email</h1>
                <form
                  key="form"
                  name="contact"
                  method="post"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={this.handleSubmit}
                >
                  <input type="hidden" name="form-name" value="contact"/>
                  <p hidden>
                    <label>
                      Don’t fill this out:{" "}
                      <input name="bot-field" onChange={this.handleChange}/>
                    </label>
                  </p>
                  <p>
                    <label>
                      Your name:<br/>
                      <input required type="text" name="name" onChange={this.handleChange}/>
                    </label>
                  </p>
                  <p>
                    <label>
                      Your email:<br/>
                      <input required type="email" name="email" onChange={this.handleChange}/>
                    </label>
                  </p>
                  <p>
                    <label>
                      Message:<br/>
                      <textarea rows="8" required name="message" onChange={this.handleChange}/>
                    </label>
                  </p>
                  <p>
                    <button className="button dark" type="submit">Send Message</button>
                  </p>
                </form>
              </section>
          }
        </Modal>
      </div>
    );
  }
}


export default ContactForm;
