import React from "react";
import { Grid } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className="loader"
      style={{
      
        width: "100%",
        height: "100%",
        position: "fixed",
        display: "flex",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid
        visible={true}
        height="100"
        width="100"
        color="blue"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        wrapperClass="grid-wrapper"
      />
    </div>
  );
}
