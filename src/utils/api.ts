const apiHost = import.meta.env.API_HOST || "http://localhost:8000";

export default {
  cats: `${apiHost}/cats`,
};
