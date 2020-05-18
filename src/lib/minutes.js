import React, { Component } from 'react';


export default class CustomCron extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
        };
    }
    onChange(e) {
        if((e.target.value > 0 && e.target.value < 60) || e.target.value == '') {
            let val = ['0','*','*','*','*','?','*']
            
            if(e.target.value == '') {
                val[1] = '';
            } else {
                val[1] = `0/${e.target.value}`;
            }
            this.props.onChange(val)
        } 
    }
    getMinutes() {
        let minutes = [];
        let leap = parseInt(this.props.minutes) || 1;
        for(let i = 0 ; i<60 ; i = i + leap) {
            minutes.push(<option value={i < 10 ? `0${i}` : i}>{i < 10 ? `0${i}` : i}</option>)
        }
        return minutes;
    }

    render() {
        this.state.value = this.props.value
        return (
            <div className="well row well-small margin-right-0 margin-left-0">
                <div className="col-md-offset-2 col-md-6 text_align_right">
                    <span className="margin-right-10 ">&nbsp;At&nbsp;</span>
                    <select  className="minutes" disabled={this.state.every ? true: false} onChange={this.onAtMinuteChange} value={this.state.value[1]}>
                        {this.getMinutes()}
                    </select>
                </div>
            </div>)
    }
}
