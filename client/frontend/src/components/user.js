import React, { Component  } from "react";
import { connect } from "react-redux";
import '../App.css';
import { Link, BrowserRouter} from "react-router-dom";
import { Modal, Button, Form , input , Collapse } from "react-bootstrap";
import { bindActionCreators } from "redux";
import { registerUser, loginUser } from "../actionCreator/userAction";



class Register extends Component {
  state = {
    modal: false,
    name: "",
    email: "",
    password: "",
    msg: null,
    show: false,
    isLoggedIn: false,
    showLogin: false,
  };

  validate = () => {
    let nameError = "";
    let emailError = "";
    let passError = "";

    if (!this.state.name) {
      nameError = "name field is empty";
    }

    if (!this.state.email.includes("@")) {
      emailError="invalid email";
      nameError="enter again";
      passError="enter again"
    }
    if (this.state.password.length < 3 || !this.state.password ){
      passError="password must be 3 characters or longer";
    }
    if (emailError || nameError || passError) {
      this.setState({ emailError, nameError ,passError });
      return false;
    }

    return true;
  };


     
  handleSubmit = (e) => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      // clear form
      this.setState(this.state);
    }
   


    var user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };

    this.props.registerUser(user);

   

    this.setState({
      name: "",
      email: "",
      password: "",
     
    });
    
  };
  


  haandleLogin = (e) => {
    e.preventDefault();
   

    var user = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.loginUser(user);
    
    
    
  };

  // open and close login model
  handleShowLogin = () => {
    this.setState({
      showLogin: true,
      show: false,
    });
  };
  handleCloseLogin = () => {
    this.setState({
      showLogin: false,
    });
  };

  // open and close register model
  handleShow = () => {

    this.setState({
      show: true,
      showLogin: false,
    });
  };
  handleClose = () => {
    this.setState({
      show: false,
    });
  };
  constructor(props) {
    super(props);
    this.state = {
      menu: false,
      hidden: true
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
  }

  toggleMenu(){
    this.setState({ menu: !this.state.menu })
  }

  toggleShow() {
    this.setState({ hidden: !this.state.hidden });
  }

  

  render() {

  const show = (this.state.menu) ? "show" : "" ;

    return (
      <div>
  <BrowserRouter className="body">
  <div className="details pos-f-t">
  <div className={"collapse navbar-collapse " + show} id="navbarToggleExternalContent">
    <div className=" p-4">
    <div className="signup">
                  <Link className="nav-link" onClick={this.handleShow}>
                    <span className="lg text-light"> <h5>Sign Up</h5></span>
                  </Link>
                  

                  <Modal show={this.state.show} onHide={this.handleClose} className="signup">
                    <Modal.Header closeButton className="Mbody" >
                      <Modal.Title className="lg text-light">Sign Up</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="Mbody font-weight-normal">
                      <Form>
                        <Form.Group controlId="formBasicname" className="text-light">
                          <Form.Label >Name</Form.Label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder=" enter name..."
                            required minlength="6" maxlength="6"
                            onChange={(e) =>
                              this.setState({ name: e.target.value })
                            }
                          required/>
                          <p style={{ fontSize: 13, color: "red" }}>{this.state.nameError}</p>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail" className="text-light">
                          <Form.Label>Email address</Form.Label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                            onChange={(e) =>
                              this.setState({ email: e.target.value })
                            }
                          required/>
                          <p style={{ fontSize: 13, color: "red" }}>{this.state.emailError}</p>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword" className="text-light">
                          <Form.Label >Password</Form.Label>
                          <div>
                          <input
                           type={this.state.hidden ? "password" : "text"}
                            className="form-control"
                            placeholder="Password"
                            onChange={(e) =>
                              this.setState({ password: e.target.value })
                            }
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            required />
                            <div className="input-group-append">
                            <span className="input-group-text offset-11" id="basic-addon2"><li className="fa fa-eye bg-light " onClick={this.toggleShow}></li></span>
                            </div>
                            </div>
                            <p style={{ fontSize: 13, color: "red" }}>{this.state.passError}</p>
                        </Form.Group>
                        <Button
                         className="text-light"
                          variant="primary"
                          className="mt-3"
                          type="submit"
                          block
                          disabled={!this.state.email || !this.state.name || !this.state.password}
                          onClick={(e) => this.handleSubmit(e)}
                        >
                          Submit
                          {/* <Link onClick={this.handleShowLogin}>Submit</Link> */}
                        </Button>
                        <br />
                        <p className="text-light">
                          if you are already registered click here
                          <Link
                            style={{ color: "blue" }}
                            onClick={this.handleShowLogin}
                          >
                            Login
                          </Link>
                        </p>
                      </Form>
                    </Modal.Body>
                  </Modal>
              
                  <Link
                    className="nav-link"
                    // href="/login"
                    onClick={this.handleShowLogin}
                  >
                    <span className="lg text-light"><h5>Login</h5></span>
                  </Link>
                 
                 
                  {/* LOGIN */}



                  <Modal
                    show={this.state.showLogin}
                    onHide={this.handleCloseLogin}
                  >
                    <Modal.Header closeButton className="Mbody">
                      <Modal.Title className=" text-light">Log In</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="Mbody">
                      {this.state.msg ? (
                        <Link to="/Register"></Link>
                      ) : null}
                      <Form>
                        <Form.Group role="form" controlId="formBasicEmail" className=" text-light" >
                          <Form.Label>Email address</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Enter email"
                            onChange={(e) =>
                              this.setState({ email: e.target.value })
                            }
                          />
                        </Form.Group>
                        <Form.Group role="form" controlId="formBasicPassword" className="text-light" >
                          <Form.Label>Password</Form.Label>
                          <Form.Control
                            type={this.state.hidden ? "password" : "text"}
                            placeholder="Password"
                            onChange={(e) =>
                              this.setState({ password: e.target.value })
                            }
                          /><div className="input-group-append">
                          <span className="input-group-text offset-11" id="basic-addon2"><li className="fa fa-eye bg-light " onClick={this.toggleShow}></li></span>
                          </div>
                        </Form.Group>
                        <Button
                          variant="primary"
                          className="mt-3"
                          type="submit"
                          disabled={!this.state.email || !this.state.password}
                          onClick={(e) => this.haandleLogin(e)}
                          block

                        >
                          <Link to="/play/quiz" className="text-light">
                          Submit
                          </Link>
                        </Button>
                        
                        <br />
                        <p className="text-light">
                          if you are not login click here
                          <Link
                            style={{ color: "blue" }}
                            onClick={this.handleShow}
                          >
                            Signup
                          </Link>
                        </p>
                      </Form>
                     
                    </Modal.Body>
                  </Modal>
                </div>
      
    </div>
  </div>
  <nav className="navbar navbar-dark ">
    <button className="navbar-toggler" type="button" onClick={ this.toggleMenu } data-toggle="Collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="title">Corona Quiz</div>
  </nav>
</div>
          <img src= "../back.jpg" alt="pic" className="logo w-100"></img>
        </BrowserRouter>
        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

const mapdispatchToProps = (dispatch) => {
  return bindActionCreators({ registerUser, loginUser}, dispatch);
};
export default connect(mapStateToProps, mapdispatchToProps)(Register);
