import React, { Component } from 'react';
import { getFilteredData } from '../actions/HomeActions';
import { connect } from 'react-redux';

class AvatarFilter extends Component {
    FilterFunc = (val) => {
        const values = Array
            .from(document.querySelectorAll('input[type="checkbox"]:checked'))
            .map((checkbox) => checkbox.value);
        this.props.filteredData(values);
    }
    render() {
        return (
            <div className="mt-4 ">
                <div className="card">
                    <div className="card-body">
                        <h6>SPECIES</h6>
                        <div className="form-check">
                            <input type="checkbox" value="Human" className="form-check-input" id="Human" onClick={() => { this.FilterFunc() }} />
                            <label className="form-check-label" htmlFor="Human">Human</label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" value="Mytholog" className="form-check-input" id="Mytholog" onClick={() => { this.FilterFunc() }} />
                            <label className="form-check-label" htmlFor="Mytholog">Mytholog</label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" value="Others" className="form-check-input" id="Others" onClick={() => { this.FilterFunc() }} />
                            <label className="form-check-label" htmlFor="Others">Other</label>
                        </div>
                    </div>
                </div>
                <div className="card mt-4">
                    <div className="card-body">
                        <h6>GENDER</h6>
                        <div className="form-check">
                            <input type="checkbox" value="Male" className="form-check-input" id="Male" onClick={() => { this.FilterFunc() }} />
                            <label className="form-check-label" htmlFor="Male">Male</label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" value="Female" className="form-check-input" id="Female" onClick={() => { this.FilterFunc() }} />
                            <label className="form-check-label" htmlFor="Female">Female</label>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = {
    filteredData: getFilteredData
}
export default connect(null, mapDispatchToProps)(AvatarFilter);