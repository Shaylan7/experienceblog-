import * as React from "react";

import Grid from "@mui/material/Grid";

import * as apiClient from "./apiClient.js";

const Gallery = () => {
  const [photos, setPhotos] = React.useState([]);

  const loadPhotos = async () =>
    setPhotos(await apiClient.getExperienceEntries());

  React.useEffect(() => {
    loadPhotos();
  }, []);
  return (
    <div>
      <h1>COMING SOON....</h1>
    </div>
  );
};
export default Gallery;
