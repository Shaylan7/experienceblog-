import * as React from "react";

import AddBoxIcon from "@mui/icons-material/AddBox";

import * as apiClient from "./apiClient";

const AddExperience = () => {
  const [entries, setExperienceEntry] = React.useState([]);

  const loadExperienceEntries = async () =>
    setExperienceEntry(await apiClient.getExperienceEntries());
  const addExperienceEntry = async (entry) => {
    apiClient.addExperienceEntries(entry).then(loadExperienceEntries);
  };

  React.useEffect(() => {
    loadExperienceEntries();
  }, []);

  return <AddEntry {...{ addExperienceEntry }} />;
};

const AddEntry = ({ addExperienceEntry }) => {
  const onSubmit = (e) => {
    const form = e.currentTarget;
    const {
      title: { value: title },
      city: { value: city },
      state: { value: state },
      country: { value: country },
      description: { value: description },
      to_eat_text: { value: to_eat_text },
      to_do_text: { value: to_do_text },
      to_see_text: { value: to_see_text },
      mins_to_read: { value: mins_to_read },
      date_uploaded: { value: date_uploaded },
    } = form.elements;

    e.preventDefault();
    addExperienceEntry({
      title,
      city,
      state,
      description,
      country,
      to_eat_text,
      to_do_text,
      to_see_text,
      mins_to_read,
      date_uploaded,
    });
    form.reset();
  };

  return (
    // <div className="formpage">
    //   <section className="content-container">
    /* <div className="left-content flex-center__vertical"> */
    /* <p className="spacing40">Traveled Recently?</p> */
    /* <img className="form-photo" src={formphoto} /> */
    /* </div> */
    // <div className="right-content">
    <div className="formpage">
      <p className="title">Add an experience here</p>
      <div className="formpagebody">
        <form onSubmit={onSubmit}>
          <div className="left-content">
            <label className="label">
              Entry Title: {""}
              <input className="input" name="title" required />
            </label>
            <br />
            <label className="label">
              City: {""}
              <input className="input" name="city" required />
            </label>
            <br />
            <label className="label">
              State: {""}
              <input className="input" name="state" required />
            </label>
            <br />
            <label className="label">
              Country: {""}
              <input className="input" name="country" required />
            </label>
            <br />
            <label className="label">
              Description: {""}
              <input className="input" name="description" required />
            </label>
          </div>
          <br />
          <div className="right-content">
            <label className="label">
              To Eat: {""}
              <input className="input" name="to_eat_text" required />
            </label>
            <br />
            <label className="label">
              To Do: {""}
              <input className="input" name="to_do_text" required />
            </label>
            <br />
            <label className="label">
              To See: {""}
              <input className="input" name="to_see_text" required />
            </label>
            <br />
            <label className="label">
              Mins to read: {""}
              <input className="input" name="mins_to_read" required />
            </label>
            <br />
            <label className="label">
              Date: {""}
              <input
                className="input"
                name="date_uploaded"
                type="date"
                required
              />
            </label>
            <br />
            {/* <label>
        To Eat Photo
        <input name="image" type="file" />
      </label>
      <label>
        To Do Photo
        <input name="image" type="file" />
      </label>
      <label>
        To See Photo
        <input name="image" type="file" />
      </label> */}
            <button
              className="button"
              style={{
                backgroundColor: "#e3a477",
                border: "none",
              }}
            >
              <AddBoxIcon />{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
    //   </section>
    // </div>
  );
};

export default AddExperience;
