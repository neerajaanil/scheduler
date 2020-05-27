import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _createSuper from "@babel/runtime/helpers/esm/createSuper";
import React, { Component } from 'react';

var CustomCron = /*#__PURE__*/function (_Component) {
  _inherits(CustomCron, _Component);

  var _super = _createSuper(CustomCron);

  function CustomCron(props) {
    var _this;

    _classCallCheck(this, CustomCron);

    _this = _super.call(this, props);
    _this.state = {};
    return _this;
  }

  _createClass(CustomCron, [{
    key: "onChange",
    value: function onChange(e) {
      if (e.target.value > 0 && e.target.value < 60 || e.target.value == '') {
        var val = ['0', '*', '*', '*', '*', '?', '*'];

        if (e.target.value == '') {
          val[1] = '';
        } else {
          val[1] = "0/".concat(e.target.value);
        }

        this.props.onChange(val);
      }
    } // getMinutes() {
    //     let minutes = [];
    //     let leap = parseInt(this.props.minutes) || 1;
    //     for(let i = 0 ; i<60 ; i = i + leap) {
    //         minutes.push(<option value={i < 10 ? `0${i}` : i}>{i < 10 ? `0${i}` : i}</option>)
    //     }
    //     return minutes;
    // }

  }, {
    key: "render",
    value: function render() {
      this.state.value = this.props.value;
      return /*#__PURE__*/React.createElement("div", {
        className: "well"
      }, "Every ", /*#__PURE__*/React.createElement("input", {
        type: "Number",
        onChange: this.onChange.bind(this),
        value: this.state.value[1].split('/')[1],
        min: 1,
        max: 60
      }), " minute(s)'"); // return (
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
  }]);

  return CustomCron;
}(Component);

export { CustomCron as default };