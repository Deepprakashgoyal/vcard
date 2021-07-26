import React from "react";

const DetailCard = (props) =>{
    return (
        <div className="profile-list">
                        <table>
                            <tbody>
                            <tr>
                                <td>birthday&#58;</td>
                                <td>10th October</td>
                            </tr>
                                
                            <tr>
                                <td>address&#58;</td>
                                <td>Agra, U.P. India</td>
                            </tr>
                            <tr>
                                <td>e-mail&#58;</td>
                                <td>wpexpertdeep@gmail.com</td>
                            </tr>
                            <tr>
                                <td>phone&#58;</td>
                                <td>+91 8077380314</td>
                            </tr>
                            <tr>
                                <td>website&#58;</td>
                                <td><a href="https://deepprakashgoyal.online" target="_blank" className="website-url"></a></td>
                            </tr>
                            </tbody>
                        </table>

                        <div className='image-gallery'>
                            <div className='single-image'>
                                <img src='https://vcard.pingmedia.in/wp-content/uploads/2021/05/deep-prakash-goyal.jpg' />
                            </div>
                            <div className='single-image'>
                                <img src='https://lh3.googleusercontent.com/p/AF1QipPEqpykvtbIXGzl3PIWMX2T-0pqqFv4tMFtzfTv=h305-no' />
                            </div>
                            <div className='single-image'>
                                <img src='https://deepprakashgoyal.github.io/about/images/me1.jpg' />
                            </div>
                        </div>

                        <ul className="social-links">
                        <li>
                                    <a href="#" target="_blank" title="Follow Me on Facebook" className="f-facebook">
                                        <i className="fa fa-facebook" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank" title="Follow Me on Twitter" className="f-twitter">
                                        <i className="fa fa-twitter" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank" title="Follow Me on Instagram" className="f-instagram">
                                        <i className="fa fa-instagram" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank" title="Follow Me on Linkedin" className="f-linkedin">
                                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                                    </a>
                                </li>
                            
                            
                        </ul>
                        <div className="save-btns">
                            <a href="#" className="btn " target="_blank" >Save to contact <i className="fa fa-download"></i></a>
                            <a href="#" className="btn" target="_blank">Share <i className="fa fa-share"></i></a>
                        </div>
                    </div>
    );
}

export default DetailCard;