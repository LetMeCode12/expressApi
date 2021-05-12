import { useEffect, useRef, useState } from "react";
import { Button, Input } from "reactstrap";
import { authFetch } from "../../fetch/fetchUtils";
import "./MainPage.scss";
import { decode, encode } from "./MainPageUtils";

const MainPage = (props) => {
  const { history } = props;
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    history.push("/login");
  };
  const [user, setUser] = useState();
  const [encodeData, setEncodeData] = useState();
  const [decodeData, setDecodeData] = useState();
  const encodeInput = useRef();
  const decodeInput = useRef();

  const fetchUser = async () => {
    const data = await authFetch("/access", history);
    setUser(data?.user?.username);
  };

  const onEncode = () => {
    setEncodeData(encode(encodeInput.current.value));
  };

  const onDecode = () => {
    console.log("decdoe:", decode(decodeInput.current.value));
    setDecodeData(decode(decodeInput.current.value));
  };

  useEffect(() => {
    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="MainPage">
      <div className="d-block">
        <h1>Witam na stonie głównej</h1>
        <span>
          Zalogowano jako <b>{user}</b>
        </span>
        <Input
          title="encode"
          placeholder="Dane do zakodoawnia"
          innerRef={encodeInput}
        />
        <Button
          className="my-2"
          outline
          color="primary"
          onClick={() => onEncode()}
        >
          Zakoduj
        </Button>
        <p>{encodeData}</p>
        <Input
          title="decode"
          placeholder="Dane do odkodoawnia"
          innerRef={decodeInput}
        />
        <Button
          className="my-2"
          outline
          color="primary"
          onClick={() => onDecode()}
        >
          Odkoduj
        </Button>
        <p>{decodeData}</p>
      </div>
      <Button
        className="my-2"
        style={{ float: "right" }}
        outline
        color="danger"
        onClick={() => logout()}
      >
        Wyloguj
      </Button>
    </div>
  );
};

export default MainPage;
