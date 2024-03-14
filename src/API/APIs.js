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

export async function getAllCropsAPI() {
  try {
    const response = await axios({
      method: "GET",
      url: API + "crops",
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

export async function fetchSingleCropDetailsAPI(crop) {
  try {
    console.log(crop);
    const response = await axios({
      url: API + `crops/${crop}`,
      method: "GET",
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}
