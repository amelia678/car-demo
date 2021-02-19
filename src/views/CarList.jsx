import React, { useState } from "react";
import { Box, Grid, MenuItem, Select } from "@material-ui/core";

import ListCard from "../components/ListCard";
import { carData } from "../data/test-data";

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

  return (
    <div>
      <Box py={2}>
        <Select value={sort} onChange={handleChage}>
          <MenuItem value="Heading">Heading</MenuItem>
          <MenuItem value="Subheading">Subheading</MenuItem>
          <MenuItem value="Price">Price</MenuItem>
        </Select>
      </Box>
      <Grid container spacing={2}>
        {cars.map((car, index) => {
          return <ListCard car={car} key={index} />;
        })}
      </Grid>
    </div>
  );
};

export default CarList;
