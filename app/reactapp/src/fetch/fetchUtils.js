export const authFetch = async (path, history, method, body) => {
  const token = await localStorage.getItem("token");
  if (token) {
    try {
      const res = await fetch(process.env.REACT_APP_URL + path, {
        method: method || "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: body ? JSON.stringify(body) : undefined,
      });

      if (res.status === 200) {
        const data = await res.json();
        return data;
      }
      console.log(res.status);
      return await updateToken(path, history, method, body);
    } catch (e) {
      console.error(e);
      localStorage.removeItem("token");
      localStorage.removeItem("refreshToken");
      history.push("/login");
    }
  } else {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    history.push("/login");
  }
};

const updateToken = async (path, history, method, _body) => {
  console.log("Weszlo:");
  const token = await localStorage.getItem("refreshToken");
  if (token) {
    const body = {
      refreshToken: token,
    };
    const res = await fetch(process.env.REACT_APP_URL + "/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (res.status === 200) {
      const data = await res.json();
      await localStorage.setItem("token", data.auth);
      await localStorage.setItem("refreshToken", data.refreshToken);
      return authFetch(path, history, method, _body);
    }
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    history.push("/login");
  } else {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    history.push("/login");
  }
};
