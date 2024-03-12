import axios from "axios";

export async function getStorageHousesAPI() {
  try {
    const response = await axios({
      method: "GET",
      url: "api/storage",
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}
