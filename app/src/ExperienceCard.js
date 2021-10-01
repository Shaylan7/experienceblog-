import * as React from "react";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

import * as apiClient from "./apiClient";

const ExperienceCard = (props) => {
  const [entries, setEntries] = React.useState([]);

  const loadEntries = () => apiClient.getExperienceEntries().then(setEntries);
  React.useEffect(() => {
    loadEntries();
  }, []);

  return (
    <section>
      <ExperienceList entries={entries} searchedTerm={props.searchedTerm} />
    </section>
  );
};

const ExperienceList = ({ entries, searchedTerm }) => (
  <div>
    <Grid container spacing={2} justifyContent="center">
      {/* {entries.map(entry({ title, city, state, date_uploaded, mins_to_read }) => ( */}
      {entries
        .filter((entry) =>
          entry.city?.toLowerCase().includes(searchedTerm.toLowerCase()),
        )
        .map((entry) => (
          <Grid item key={entry.id} xs={12} md={6} lg={3}>
            <Card style={{ height: "100%" }} sx={{ maxWidth: 345 }}>
              <CardMedia component="img" height="140" src={entry.img} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {entry.title}
                </Typography>
                <Typography variant="body1">
                  {entry.city}, {entry.state}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {entry.mins_to_read} minute read<br></br>
                  Uploaded: {entry.date_uploaded}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" component={Link} to="/allexperiences">
                  Read More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
    </Grid>
  </div>
);

export default ExperienceCard;
