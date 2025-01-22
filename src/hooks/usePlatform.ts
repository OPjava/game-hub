import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from '../services/api-client'


const apiClient = new APIClient<Platform> ('/platforms/lists/parents')
export interface Platform {
  id: number;
  name: string;
  slug: string;
}
const usePlatform = ( ) => useQuery ({
queryKey: ['platforms'],
queryFn: apiClient.getAll, // call the platform page then fetch the response
staleTime: 24 * 60 * 60 * 1000, //24hr
 //initialData: { count: platforms.length, results: platforms} //initial data if no data is available from the cache
})

export default usePlatform;