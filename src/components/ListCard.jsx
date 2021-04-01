import React from "react";
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
import placeholder from '../assets/placeholder.jpg'

const useStyles = makeStyles({
  content: {
    height: 220,
  },
  price: {
    color: "green",
    fontWeight: "bold",
  },
});

const ListCard = (props) => {
  const { car } = props;

  const classes = useStyles();
  return (
    <Grid md={2} sm={3} xs={6} item>
      <Card>
        <CardMedia
          component="img"
          src={
            car.showBridge ? "https://www.autotrader.com/content/dam/autotrader/homepage/styles/DefaultDesk_Style_LUXURY.png" : placeholder
          }
          title="Car image"
        />
        <CardContent>
          <Grid
            container
            direction="column"
            justify="space-between"
            className={classes.content}
          >
            <Grid item>
              <Typography variant="h6">{car.Heading}</Typography>
              <Box my={1}>
                <Typography variant="subtitle2">{car.Subheading}</Typography>
              </Box>
            </Grid>
            <Grid item>
              <Divider></Divider>
              <Box display="flex" justifyContent="flex-end">
                <p className={classes.price}>
                  ${car.Price.toLocaleString("en")}
                </p>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ListCard;
