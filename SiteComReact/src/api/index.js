import axios from "axios";


const urlTarefa = "https://parseapi.back4app.com/classes/Tarefa";
const headers = {
  "X-Parse-Application-Id": "",
  "X-Parse-REST-API-Key": "",
};

const headersJson = {
  ...headers,
  "Content-Type": "application/json",
};