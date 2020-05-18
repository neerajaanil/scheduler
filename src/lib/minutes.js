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
    // getMinutes() {
    //     let minutes = [];
    //     let leap = parseInt(this.props.minutes) || 1;
    //     for(let i = 0 ; i<60 ; i = i + leap) {
    //         minutes.push(<option value={i < 10 ? `0${i}` : i}>{i < 10 ? `0${i}` : i}</option>)
    //     }
    //     return minutes;
    // }

    render() {
        this.state.value = this.props.value
        return (<div className="well">   
            Every <input type="Number" onChange={this.onChange.bind(this)} value={this.state.value[1].split('/')[1]} min={1} max={60}/> minute(s)'
        </div>)
        // return (
        //     <div classname="well">
        //         <div>
        //             <span classname="margin-right-10 ">&nbsp;Every&nbsp;</span>
        //             <select classname="minutes" onchange={this.onAtMinuteChange} value={this.state.value[1]}>
        //             {this.getMinutes()}
        //             </select>
        //             <span classname="margin-right-10 ">&nbsp;minutes'&nbsp;</span>

        //         </div>
        //     </div>)
    }
}
