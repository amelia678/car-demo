import React, { useState } from "react";
import {
  Box,
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
} from "@material-ui/core";

import ListCard from "../components/ListCard";
import { carData } from "../data/test-data";

const useStyles = makeStyles({
  formControl: {
    width: "100%",
  },
});

const CarList = () => {
  const [cars, setCars] = useState(carData());
  const [sort, setSort] = useState("");

  const sortCars = (filter) => {
    const sortedCars = carData().sort((a, b) =>
      a[filter] > b[filter] ? 1 : -1
    );
    setCars(sortedCars);
  };

  const handleChage = (e) => {
    setSort(e.target.value);
    sortCars(e.target.value);
  };

  const classes = useStyles();

  return (
    <div>
      <Grid container>
        <Grid item md={4} sm={6} xs={12}>
          <Box py={2}>
            <InputLabel id="sort-select-label">Sort By</InputLabel>
            <Select
              ladbelId="sort-select-label"
              id="sort-select"
              value={sort}
              onChange={handleChage}
              className={classes.formControl}
            >
              <MenuItem value=''>None</MenuItem>
              <MenuItem value="Heading">Heading</MenuItem>
              <MenuItem value="Subheading">Subheading</MenuItem>
              <MenuItem value="Price">Price</MenuItem>
            </Select>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        {cars.map((car, index) => {
          return <ListCard car={car} key={index} />;
        })}
      </Grid>
    </div>
  );
};

export default CarList;
