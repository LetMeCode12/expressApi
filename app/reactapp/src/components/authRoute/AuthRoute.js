import { Component } from "react";
import { Redirect, Route } from "react-router";

class AuthRoute extends Component {
  constructor(props) {
    super(props);

    this.state = {
      auth: true,
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (!token) {
      this.setState({
        auth: false,
      });
    }
  }

  render() {
    const { auth } = this.state;
    return auth ? <Route {...this.props} /> : <Redirect to="/login" />;
  }
}

export default AuthRoute;
