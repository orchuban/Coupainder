import axios from "axios";

export default axios.create({
  baseURL: window.location.href.includes("https") ? "https://main.d395v2jqb4fym4.amplifyapp.com" : "http://localhost:8080/api",
  headers: {
    "Content-type": "application/json"
  }
});
