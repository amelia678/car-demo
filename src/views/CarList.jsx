import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { carData } from "../data/test-data";

const useStyles = makeStyles({
  price: {
    color: "green",
    fontWeight: 'bold'
  },
});

const CarList = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={2}>
        {carData().map((car, index) => {
          return (
            <Grid key={index} md={2} sm={3} xs={6} item>
              <Card>
                <CardMedia
                  component="img"
                  src={
                    "https://www.autotrader.com/content/dam/autotrader/homepage/styles/DefaultDesk_Style_LUXURY.png"
                  }
                  title="Car image"
                />
                <CardContent>
                  <Grid
                    container
                    direction="column"
                    justify="space-between"
                    style={{ height: 220 }}
                  >
                    <Grid item>
                      <Typography variant="h6">{car.Heading}</Typography>
                      <Box my={1}>
                        <Typography variant="subtitle2">
                          {car.Subheading}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item>
                      <Divider></Divider>
                      <Box display="flex" justifyContent="flex-end">
                        <p className={classes.price}>${car.Price.toLocaleString("en")}</p>
                      </Box>
                    </Grid>
                  </Grid>
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
