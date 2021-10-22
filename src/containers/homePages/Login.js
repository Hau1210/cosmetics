import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.scss";


class Login extends Component {
  constructor(props) {
    super(props);
   
  }

  render() {
    return (
      <div className="login-background">
        <div className="login-container">
          <div className="login-content row">
            <div className="col-12 text-login">Login</div>

            <div className="col-12 ">
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address:</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    // value={this.state.email}
                    // onChange={(event) => this.handleOnChangeUsername(event)}
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password:</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    // value={this.state.password}
                    // onChange={(event) => this.handleOnChangePassword(event)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <div className="col-12" style={{ color: "red" }}>
                
                </div>
                <Button
                  variant="primary"
                  type="submit"
                //   onClick={() => this.handleLogin}
                  className="btn-login"
                >
                  Log in
                </Button>
                <div className="col-12">
                  <span>Forgot your password?</span>
                </div>
                <div className="col-12 text-center mt-3">
                  <span className="text-other-login">Or Login with:</span>
                </div>
                <div className="col-12 social-login">
                  <i class="fab fa-google-plus-g google"></i>
                  <i class="fab fa-facebook-f facebook"></i>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}





export default (Login);
