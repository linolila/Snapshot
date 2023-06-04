import React,{createContext} from 'react';
import './App.css';
import useAxios from './hooks/useAxios';
import Search from './Componenet/Search';
import Images from './Componenet/Images';
import Header from './Componenet/Header';
import Navigation from './Componenet/Navigation';
import HeroSection from './Componenet/HeroSection';
import Home from './Componenet/Home';

export const ImageContext=createContext();
function App() {
    const{response,isLoding,error,fetchData}=useAxios
    (`search/photos?page=1&query=office&client_id=${process.env.REACT_APP_ACCESS_KEY}`)
    
    const value={
        response,
        isLoding,
        error,
        fetchData}
    return (
        <div className='App'>
           <ImageContext.Provider value={value}>
{/* <Header>
    <Search/>
           </Header> */}
           
           <Navigation/>
<HeroSection/>

{/* <Images/> */}

           </ImageContext.Provider >
        </div>
    );
}

export default App;
