import axios from 'axios';

const serverURL = 'https://full-stack-mern-v2.herokuapp.com';

export const getUserNumber = async () => {
  try {
    const response = await axios.get(`${serverURL}/getUserNumber`);
    return response;
  } catch (error) {
    console.error(error);
  }
}

export const putUserNumber = async (userNumber) => {
  try {
    const response = await axios.put(`${serverURL}/putUserNumber`,
      {
        "userNumber": userNumber
      })
    if (response.data.modifiedCount == 1) return true;
  } catch (error) {
    console.error(error);
  }
}