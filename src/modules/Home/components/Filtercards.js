import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getFilteredData } from "../actions/HomeActions";

class FilterCards extends Component {

    handleClick = (value) => {
        document.getElementById(value).checked = false;
        const values = Array
            .from(document.querySelectorAll('input[type="checkbox"]:checked'))
            .map((checkbox) => checkbox.value);
        this.props.filteredData(values);
    }
    render() {
        return (
            <Fragment>
                {
                    this.props.selectedFilter.map((filter, index) =>
                        <button key={index} className="btn btn-secondary m-2">{filter} <span onClick={(e) => this.handleClick(filter)}> X</span></button>
                    )
                }

            </Fragment>
        )
    }
}

const mapStatesToProps = (state) => ({
    selectedFilter: state.avatar.selectedFilter
})

const mapDispatchToProps = {
    filteredData: getFilteredData
}
export default connect(mapStatesToProps, mapDispatchToProps)(FilterCards);

