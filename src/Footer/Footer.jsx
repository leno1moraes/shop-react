import React from "react";
import twitterLogo from '/twitter-social-icons-grey-icon.png';
import instagramLogo from '/instagram-logo-light.png';
import facebookLogo from '/facebook-icon-vector-gray.png';

function Footer(){
    return(
        <>

        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                    <svg className="bi" width="30" height="24"><use xlinkHref="#bootstrap"/></svg>
                </a>
                <span className="mb-3 mb-md-0 text-body-secondary">&copy; 2024 Company, Inc</span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li className="ms-3"><a className="text-body-secondary" href="#"><img src={twitterLogo} width="24" height="24"/></a></li>
                <li className="ms-3"><a className="text-body-secondary" href="#"><img src={instagramLogo} width="24" height="24"/></a></li>
                <li className="ms-3"><a className="text-body-secondary" href="#"><img src={facebookLogo} width="24" height="24"/></a></li>
                </ul>
            </footer>
        </div>        
        </>
    )
}

export default Footer