import { useEffect, useState } from "react";
import { Button } from "reactstrap";
import { authFetch } from "../../fetch/fetchUtils";
import "./MainPage.scss";

const MainPage = (props) => {
  const { history } = props;
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    history.push("/login");
  };
  const [user, setUser] = useState();

  const fetchUser = async () => {
    const data = await authFetch("/access", history);
    setUser(data?.user?.username);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="MainPage">
      <div className="d-block">
        <h1>Witam na stonie głównej</h1>
        <span>
          Zalogowano jako <b>{user}</b>
        </span>
      </div>
      <Button className="my-2" outline color="danger" onClick={() => logout()}>
        Wyloguj
      </Button>
    </div>
  );
};

export default MainPage;
