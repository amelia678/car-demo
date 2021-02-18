import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import React from "react";
import { carData } from "../data/test-data";

const CarList = () => {
  return (
    <div>
      <Grid container spacing={2}>
        {carData().map((car, index) => {
          return (
            <Grid item md={2} sm={3} xs={6}>
            <Card key={index}>
              <CardContent>
                <Typography variant='body1'>{car["Heading"]}</Typography>
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
