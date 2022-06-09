
import axios from "axios";

//headers: {
//    'X-RapidAPI-Key': '66b24158b1msh34c8379013142edp12df54jsna3f3f842b738',
//    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
//  }

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
        'X-RapidAPI-Key': '66b24158b1msh34c8379013142edp12df54jsna3f3f842b738',
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    }
  });
    
  return data;
}