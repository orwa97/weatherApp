import React, { useContext, useEffect, useRef, useState } from "react";
import Layout from "../../components/layout/Layout";
import { AuthContext } from "../../store/auth-context";
import SearchBar from "./searchBar/SearchBar";
const MainPage: React.FC = () => {
  const ctx = useContext(AuthContext);
  const [searchInput, setSearchInput] = useState("");
  const ref = useRef<NodeJS.Timeout>();
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    clearTimeout(ref.current);
    ref.current = setTimeout(() => setSearchInput(e.target.value), 600);
  };

  useEffect(() => {
    console.log(searchInput, ctx.userToken, "logggg");

    if (searchInput) {
      console.log(searchInput, ctx.userToken, "logggg");
      fetch(
        `https://wtm-sample-apis.staging.wtmsrv.com/api/weather-api/weather/${searchInput}`,
        { method: "GET", headers: { Authorization: `Beaer ${ctx.userToken}` } }
      )
        .then((res) => res.json())
        .then(console.log)
        .catch(console.log);
    }
  }, [searchInput]);

  return (
    <Layout>
      <SearchBar onChange={onChangeHandler} />
    </Layout>
  );
};

export default MainPage;
