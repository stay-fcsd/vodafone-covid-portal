import React, { useEffect, useState } from "react";
import LineGraph from "./LineGraph";
import { v4 as uuidv4 } from "uuid";
import "./Graphs.css";
import { Grid } from "@mui/material";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function Graphs({ owi, loc }) {
  const [value, setValue] = useState(0);

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div id="country__graphs">
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            textColor="inherit"
            // indicatorColor="secondary"
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Line Graphs" {...a11yProps(0)} />
            <Tab label="Tree Map" {...a11yProps(1)} />
            <Tab label="World Map" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <LineGraph key={uuidv4()} type="cases" owi={owi} loc={loc} />
        </Grid>
        <Grid item xs={6}>
          <LineGraph key={uuidv4()} type="deaths" owi={owi} loc={loc} />
        </Grid>

        <Grid item xs={6}>
          <LineGraph key={uuidv4()} type="vaccines" owi={owi} loc={loc} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Graphs;
