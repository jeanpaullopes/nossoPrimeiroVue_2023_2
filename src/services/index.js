
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: false,
  headers: {
    accept: "application/json",
    "Content-type": "application/json",
  },
});


const services = {
  getAlunos(callback) {
    api.get("/alunos").then((response) => {
      if (callback != undefined) {
        callback(response.data);
      }
    });
  },
  getAlunosPromisse() {
    return api.get("/alunos");
  }

}
export default services;
