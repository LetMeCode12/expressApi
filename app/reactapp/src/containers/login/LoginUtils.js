import { NotificationManager } from "react-notifications";

export const fetchLogin = (data, history) => {
  NotificationManager.info("Logowanie...");
  fetch(process.env.REACT_APP_URL + "/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      switch (res.status) {
        case 200:
          break;
        default:
          localStorage.removeItem("token");
          localStorage.removeItem("refreshToken");
      }
      return res.json();
    })
    .then((data) => {
      NotificationManager.success("Success", "Pomyślnie zalogowano");
      localStorage.setItem("token", data.auth);
      localStorage.setItem("refreshToken", data.refreshToken);
      history.push("/");
    })
    .catch((err) => {
      console.error(err);
      NotificationManager.error("Error", "Logowanie nie powiodło sie");
    });
};
