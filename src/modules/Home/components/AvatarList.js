import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';

import { getAvatarDetailedList, getFilteredData } from '../actions/HomeActions';
import AvatarDetail from './AvatarDetail';
import AvatarFilter from "./AvatarFilter";
class AvatarList extends Component  {
   
    getData = () =>{
        this.props.getAvatarList();
      }

    FilterData = (val) => {
       this.props.filterData(val);
    }

     componentDidMount = () => {
       this.getData();
      }
      render() {
        return (
          <Fragment>
            <div className="row mx-0">
                <div className="col-1 px-0">Filters
                <AvatarFilter />

                </div>
                <div className="col-11">
                <div className="dropdown mb-2">
                      <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Sort By ID
                      </button>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" onClick = { ()=> this.FilterData("ASC")}>Ascending</a>
                        <a className="dropdown-item" onClick = { ()=> this.FilterData("DSC")}>Descending</a>
                      </div>
                </div>
                  <div className="row mx-0 app-avatar-list">
                    {this.props.avatarList.map((avatar,i) => <AvatarDetail key={`${avatar.id}${i}`} Avatar = {avatar} />)}  
                  </div>
                </div>
              </div>
          </Fragment>
            
        )
      }
        
 
}

const mapStateToProps  = state => ({
    avatarList : state.avatar.avatarList
})



const mapDispatchToProps = { getAvatarList : getAvatarDetailedList, filterData : getFilteredData};
export default connect(mapStateToProps,mapDispatchToProps)(AvatarList);