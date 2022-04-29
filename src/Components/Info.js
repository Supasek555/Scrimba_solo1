import React from "react";

export default function Info(){
    return (
        <div className="Info">
            
            <div className="info_text">
                <h2 className="my_name">Supasek Dhanabordeephat</h2>
                <p className="my_title">Indian Cookery Apprentice</p>
                {/* <a className="my-website">handsomejames.com</a> */}
                <div className="btn-grp" >
                    <button className="email">Email</button>
                    <button className="linkedin">Linkedin</button>
                </div>
            </div>
            
        </div>
    )
}