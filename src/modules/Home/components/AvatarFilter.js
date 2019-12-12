import React, { Component} from 'react';

class AvatarFilter extends Component {
    FilterFunc = (val) => {
        let val2 = document.getElementById(val).checked;
        
        alert('called' + val2);
    }
    render() {
        return(
            <div className="mt-4 ">
                <div className="card">
                    <div className="card-body">
                      <h6>SPECIES</h6>
                      <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="Human" onClick={() => {this.FilterFunc('Human')}} />
                            <label class="form-check-label" for="Human">Human</label>
                     </div>
                     <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="Mytholog"  onClick={() => {this.FilterFunc('Mytholog')}} />
                            <label class="form-check-label" for="Mytholog">Mytholog</label>
                     </div>
                     <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="Others"  onClick={() => {this.FilterFunc('Others')}} />
                            <label class="form-check-label" for="Others">Other</label>
                     </div>
                    </div>                                  
                </div>
            </div>
        )
    }
}

export default AvatarFilter;