import * as React from "react";

import * as apiClient from "./apiClient";
import formphoto from "./formphoto.jpg";
import "./addexperience.css";

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
          <div className="leftcontent">
            <label>Entry Title:
              <input className="input" name="title" required />
            </label>
            <label>
              City:
              <input className="input" name="city" required />
            </label>
            <label>
              State:
              <input className="input" name="state" required />
            </label>
            <label>
              Country:
              <input className="input" name="country" required />
            </label>
            <label>
              Description:
              <input className="input" name="description" required />
            </label>
          </div>
          <div className="rightcontent">
            <label>
              To Eat:
              <input className="input" name="to_eat_text" required />
            </label>
            <label>
              To Do:
              <input className="input" name="to_do_text" required />
            </label>
            <label>
              To See:
              <input className="input" name="to_see_text" required />
            </label>
            <label>
              Mins to read:
              <input className="input" name="mins_to_read" required />
            </label>
            <label>
              Date:
              <input
                className="input"
                name="date_uploaded"
                type="date"
                required
              />
            </label>
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
            <button>Add Experience</button>
          </div>
        </form>
      </div>
    </div>
    //   </section>
    // </div>
  );
};

export default AddExperience;
