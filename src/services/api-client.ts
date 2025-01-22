import  axios  from "axios";



export interface FetchResponse<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params:{
    key:'e6bf805564af4e728dca51cd22849690'
  }
  
})