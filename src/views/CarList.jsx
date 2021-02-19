import React from "react";
import { Grid } from "@material-ui/core";

import ListCard from "../components/ListCard";
import { carData } from "../data/test-data";

const CarList = () => {
  return (
    <div>
      <Grid container spacing={2}>
        {carData().map((car, index) => {
          return <ListCard car={car} key={index} />;
        })}
      </Grid>
    </div>
  );
};

export default CarList;
