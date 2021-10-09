import dotenv from "dotenv";
import pgp from "pg-promise";

const db = initDb();

export const getTasks = () => db.any("SELECT * FROM tasks");

export const getExperienceEntries = () => db.any("SELECT title, city, state, country, description, to_eat_text, to_do_text, to_see_text, mins_to_read, date_uploaded::VARCHAR, img, to_eat_img, to_do_img, to_see_img, authors.first_name, authors.last_name, authors.bio FROM experience_entries LEFT JOIN authors on authors.id = experience_entries.author_id ORDER BY title"); 

export const addExperienceEntry = (entry) => 
  db.one(
    "INSERT INTO experience_entries(title, city, state, country, description, to_eat_text, to_do_text, to_see_text, mins_to_read, date_uploaded) VALUES(${title}, ${city}, ${state}, ${country}, ${description}, ${to_eat_text}, ${to_do_text}, ${to_see_text}, ${mins_to_read}, ${date_uploaded}) RETURNING *",
    entry,
  );


function initDb() {
  let connection;

  if (process.env.DATABASE_URL === undefined) {
    dotenv.config({ path: "../.env" });
    connection = {
      user: "postgres",
      database: process.env.POSTGRES_DB,
      password: process.env.POSTGRES_PASSWORD,
      port: 5442,
    };
  } else {
    connection = {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    };
  }

  return pgp()(connection);
}
