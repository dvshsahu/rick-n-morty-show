import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { getAvatarDetailedList, getsortedData } from '../actions/HomeActions';
import Avatars from './Avatars';
import AvatarFilter from "./AvatarFilter";
import FilterCards from './Filtercards';

class AvatarList extends Component {

  getData = () => {
    this.props.getAvatarList();
  }

  FilterData = (val) => {
    this.props.sortedData(val);
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
          <div>
          
          <FilterCards />
            <div className="dropdown mb-2">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Sort By ID
                      </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" onClick={() => this.FilterData("ASC")}>Ascending</a>
                <a className="dropdown-item" onClick={() => this.FilterData("DSC")}>Descending</a>
              </div>
            </div>
          
          </div>

             <div className="row mx-0 app-avatar-list">
              <Avatars avatarList={this.props.avatarList} />
            </div>
          </div>
        </div>
      </Fragment>

    )
  }


}

const mapStateToProps = (state) => ({
  avatarList: state.avatar.avatarList
})

const mapDispatchToProps = { 
  getAvatarList: getAvatarDetailedList, sortedData: getsortedData 
};

export default connect(mapStateToProps, mapDispatchToProps)(AvatarList);