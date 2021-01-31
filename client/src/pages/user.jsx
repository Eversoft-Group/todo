import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../redux/login/action";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  changeState = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submit = () => {
    this.props.loginUser(this.state);
  };

  render() {
    const { username, password } = this.state;
    return (
      <div className="row" style={{ paddingTop: "50px" }}>
        {this.props.token !== "" && (
          <div class="alert alert-primary" role="alert">
            You are logged in!!!
          </div>
        )}
        <div className="col-sm-3"></div>
        <div className="col-sm-6" style={{ background: "#f5ebeb" }}>
          <div class="form-group">
            <label for="exampleInputEmail1">Username</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => this.changeState(e)}
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => this.changeState(e)}
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <br />
          <button
            type="button"
            class="btn btn-primary"
            onClick={() => this.submit()}
          >
            Submit
          </button>
        </div>
        <div className="col-sm-3"></div>
        <br />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.User.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (data) => dispatch(loginUser(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
