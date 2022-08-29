import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import ContestList from "./ContestList";
import Loading from "./Loading";

import {
  Text,
  useColorMode,
  NativeBaseProvider,
  ScrollView,
  Badge,
} from "native-base";

const baseURL = "https://kontests.net/api/v1/all";

function AllContest() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://kontests.net/api/v1/all",
    };

    axios
      .request(options)
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return <>{!data ? <Loading /> : <ContestList data={data} />}</>;
}

export default AllContest;
