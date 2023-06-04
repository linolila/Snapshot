
import axios from 'axios';
import{useEffect,useState}from 'react';


const Posts =(param)=>{ 
     const [response, setResponse] = useState([]);
     const[isLoading, setIsLoading] = useState(false);
     const[error, setError] = useState('');
     axios.defaults.baseURL=
     'https://api.unsplash.com';
     const fetchData = async (url) => {
     try{
          setIsLoading(true);
          const response = await axios.get(url);
setResponse(response.data.results);
     }catch(err){
          setError(err.message);
               
}
finally{
setIsLoading(false);
}}
useEffect(()=>{
     fetchData(param);
},[param])
return ({
     response,
     isLoading,
     error,
     fetchData:url=>fetchData(url)
}
)
} 
   


export default Posts;