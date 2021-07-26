import React from "react";
import axios from "axios";

axios.get('/wp-json/wp/v2/person/14')
     .then(function(response){
         console.log(response.title)
     })

const ProfileCard = () => {
    return (
    <div className="profile-info">
    <div className="user-img">
        <img src="https://vcard.pingmedia.in/wp-content/uploads/2021/05/deep-prakash-goyal.jpg" alt="Deep Prakash Goyal" />
    </div>
    <h1>Deep Prakash Goyal</h1>
    <span>Sr. WordPress Developer</span>
    <p>
    Experienced wordpress developer and designer with a demonstrated history of working in the information technology and services industry.
    </p>
    <div className="action-buttons">

    <a href="tel:8077380314" ><i className="fa fa-phone"></i> Call</a>
    <a href="" target="_blank"><i className="fa fa-whatsapp"></i> Whatsapp</a> 
    <a href="" target="_blank"><i className="fa fa-map-marker"></i> Direction</a>
    <a href="mailto:wpexpertdeep@gmail.com"><i className="fa fa-envelope"></i> Mail</a>
    <a href="https://deepprakashgoyal.online" target="_blank"><i className="fa fa-globe"></i> Website</a>
    </div>
</div>
    );
}

export default ProfileCard;