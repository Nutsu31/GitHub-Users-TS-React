import React, { useState } from 'react';
import './App.css';
import Body from './components/Body/Body';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';


type DataProps = {
  login:string;
  name:string;
  // setUserData:(data : object) => object | void;
  userData: string;
  avatar_url:string;
  followers:number;
  following:number;
  blog:string;
  bio:string;
  location:string;
  twitter_username:string;
  html_url:string;
  public_repos:number;
  company:string;
}

function App() {
  const [dark, setDark] = useState<boolean>(false)
  const [userData, setUserData] = useState<DataProps>({})

  console.log(userData)
  return (
    <div className={dark ? "AppDark" : "AppLight"}>

      <Header dark={dark} setDark={setDark} />

      <SearchBar dark={dark} setUserData={setUserData} />

      <Body  dark={dark} 
      login={userData.login} 
      name={userData.name} 
      followers={userData.followers} 
      avatar_url={userData.avatar_url}  
      following={userData.following}
      bio={userData.bio}
      blog={userData.blog}
      location={userData.location}
      twitter={userData.twitter_username}
      html_url={userData.html_url}
      public_repos={userData.public_repos}
      company={userData.company}
      />
    </div>
  );
}

export default App;
