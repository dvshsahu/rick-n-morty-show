import React, { Fragment } from "react";
import '../styles/AppDetails.css'
const AvatarDetail = ({Avatar}) => {
    return(
        <Fragment>
          
                <div className="col-md-3 col-6 my-2">
                    <div className="card avatar-detail-card" >
                    <img className="card-img-top" src={Avatar.image} alt="Card image cap" />
                    <div className="card-body centered py-2">
                        <h5 className="card-title mb-0">{Avatar.name}</h5>
                        {/* <p className="card-text text-muted">id : {Avatar.id} - created {Avatar.created} </p> */}
                        <p className="card-text">id : {Avatar.id} - created 2 years ago </p>
                    </div>
                    <ul className="list-group list-group-flush ">
                        <li className="list-group-item avatar-item"><span>STATUS</span> <span>{Avatar.status}</span></li>
                        <li className="list-group-item avatar-item"><span>SPECIES</span><span>{Avatar.species}</span></li>
                        <li className="list-group-item avatar-item"><span>GENDER</span> <span>{Avatar.gender}</span></li>
                        <li className="list-group-item avatar-item"><span>ORIGIN</span><span>{Avatar.origin.name.split(' ')[0]}</span></li>
                        <li className="list-group-item avatar-item"><span>LAST LOCATION</span> <span>{Avatar.location.name}</span></li>
                    </ul>
                    
                    </div>
     
                </div>
         
             
        </Fragment>
      
    )
}

export default AvatarDetail;