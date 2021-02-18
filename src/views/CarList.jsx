import { Card, CardContent, Grid } from "@material-ui/core";
import React from "react";
import { carData } from "../data/test-data";

const CarList = () => {
  return (
    <div>
      <Grid container spacing={3}>
        {carData().map((car, index) => {
          return (
            <Grid item md={2} sm={3} xs={6}>
            <Card key={index}>
              <CardContent>
                <p>{car["Heading"]}</p>
              </CardContent>
            </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default CarList;
