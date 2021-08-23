import { Button, InputAdornment, Paper, TextField, Toolbar, makeStyles } from "@material-ui/core";

import BackButton from "../../components/BackButton";
import PageHeader from "../../components/PageHeader";
import PeopleOutlineTwoToneIcon from "@material-ui/icons/PeopleOutlineTwoTone";
import React from "react";
import { Search } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
  searchInput: {
    width: "75%",
  },
}));

function EmployeesList() {
  const classes = useStyles();

  const onSearch = (phrase) => {
    console.log("PHRASE: ", phrase)
  }

  return (
    <>
      <PageHeader
        title="Employees"
        description="List of employees"
        icon={<PeopleOutlineTwoToneIcon />}
      >
        <BackButton />
      </PageHeader>

      <Paper>
        <Toolbar>
            <TextField
              style={{
                width: "75%",
              }}
              id="searchBar"
              onChange={(e) => onSearch(e.target.value)}
              variant="outlined"
              label="Search By Plan"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
            />
          
        </Toolbar>
      </Paper>
    </>
  );
}

export default EmployeesList;
