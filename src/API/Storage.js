import axios from "axios";

const API = "http://localhost:5173/api/";

export async function getStorageHousesAPI() {
  try {
    const response = await axios({
      method: "GET",
      url: API + "storage",
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}

export async function fetchSingleStorageDataAPI(id) {
  try {
    const response = await axios({
      method: "GET",
      url: API + "storage/" + id,
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}
