import React from "react";
import Axios from 'axios';
import ProfileCard from "./components/profile-card";
import "./assets/css/normalize.min.css";
import "./assets/css/style.css";
import "./assets/css/font-awesome.min.css";
import DetailCard from "./components/detail-card";
import Footer from "./components/footer";

const data = Axios.get('http://localhost/wp/deep/wp-json/wp/v2/person/14').then((res)=>{
                    return res.data;
                  })



const profileDetail = 
  {
    "email": "wpexpertdeep@gmail.com",
    "phone": "8077380314",
    "birthday" : "10th October",
    "website" : "deepprakashgoyal.online",
    "address": "Agra, U.P."
  };
function App() {
  return (
    <section id="about" className="about">
            <div className="container">
                <div className="about-content">
                  <ProfileCard />
                  <DetailCard profileDetails={data}/>
                </div>
                <Footer />
            </div>
    </section>
  );
}

export default App;
