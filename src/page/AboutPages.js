import React from "react";
import axios from "axios";

const AboutPages = () => {
  const [version, setVersion] = React.useState("");
  React.useEffect(() => {
    async function getData() {
      const resp = await axios.get(
        "https://api.codingthailand.com/api/version"
      );
      setVersion(resp.data.data.version);
    }

    getData();
  }, []);

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-md-12">
          <h2>เกี่ยวกับเรา</h2>
          <p>Backend API version : {version}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPages;
