import { LeftSide, RightSide } from "../Components";
import { useEffect, useState } from "react";
import axios from "axios";

export const Resume = function () {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get("/api/resume/raluca")
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="home-page">
      <LeftSide data={data} />

      <RightSide data={data} />
    </div>
  );
};
