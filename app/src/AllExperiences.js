import * as React from "react";

import * as apiClient from "./apiClient";
import avatar from "./avatar.JPG";

import "./allexperiences.css";

const AllExperiences = () => {
  const [entries, setExperienceEntry] = React.useState([]);

  const loadExperienceEntries = async () =>
    setExperienceEntry(await apiClient.getExperienceEntries());

  React.useEffect(() => {
    loadExperienceEntries();
  }, []);

  return (
    <body>
      <div className="all-experiences">
        <section className="header">Shay's Experiences</section>
        <section className="content-container">
          <div className="left-content">
            {entries.map((entry) => (
              <div>
                <div className="article">
                  <div id={entry.id}>
                    <h2>{entry.title}</h2>
                    <img className="blog-photo-main" src={entry.img} />
                    <div className="heading6">{entry.description}</div>
                  </div>
                  <div>
                    <img className="blog-photo" src={entry.to_eat_img} />
                    <p>{entry.to_eat_text}</p>
                  </div>
                  <div>
                    <img className="blog-photo" src={entry.to_do_img} />
                    <p>{entry.to_do_text}</p>
                  </div>
                  <div>
                    <img className="blog-photo" src={entry.to_see_img} />
                    <p>{entry.to_see_text}</p>
                  </div>
                  <hr
                    style={{
                      width: "50%",
                      marginLeft: "auto",
                      marginRight: "auto",
                      marginBottom: "2%",
                    }}
                  ></hr>
                  <br></br>
                  <br></br>
                </div>
              </div>
            ))}
          </div>
          <div className="right-content">
            <div>
              <img className="author-image" src={avatar} />
              <p>
                Author: {entries[0]?.first_name} {entries[0]?.last_name}
              </p>{" "}
              <p className="author-bio">{entries[0]?.bio}</p>
            </div>
          </div>
        </section>
      </div>
    </body>
  );
};

export default AllExperiences;
