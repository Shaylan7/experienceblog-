export const getTasks = () => _get("/api/tasks");

export const getExperienceEntries = () => _get("/experiences");

export const addExperienceEntries = (entry) => _post("/experiences", entry);

export const addTask = (name) => _post("/api/tasks", { name });

const _get = async (url) => (await fetch(url)).json();

const _post = async (url, body) => {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  let result;
  try {
    result = await response.json();
  } catch {}

  return result;
};
