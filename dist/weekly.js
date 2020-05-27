import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
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
    _this.onAtHourChange = _this.onAtHourChange.bind(_assertThisInitialized(_this));
    _this.onAtMinuteChange = _this.onAtMinuteChange.bind(_assertThisInitialized(_this));
    _this.onCheck = _this.onCheck.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(CustomCron, [{
    key: "onAtHourChange",
    value: function onAtHourChange(e) {
      var val = this.state.value;
      val[0] = '0';
      val[2] = "".concat(e.target.value);
      this.props.onChange(val);
    }
  }, {
    key: "onAtMinuteChange",
    value: function onAtMinuteChange(e) {
      var val = this.state.value;
      val[0] = '0';
      val[1] = "".concat(e.target.value);
      this.props.onChange(val);
    }
  }, {
    key: "onCheck",
    value: function onCheck(e) {
      var val = this.state.value;
      val[0] = '0';

      if (e.target.checked) {
        val[2] = "".concat(val[2]).split('/').length > 1 ? '0' : val[2].toString();
        val[3] = '?';
        val[4] = '*';

        if (val[5] === '*' || val[5] === '?' || val[5] === 'MON-FRI') {
          val[5] = e.target.value;
        } else {
          val[5] = val[5] + '!' + e.target.value;
        }
      } else {
        val[5] = val[5].split('!');

        if (val[5].length > 1) {
          val[5].splice(val[5].indexOf(e.target.value), 1);
          val[5] = val[5].toString().replace(/,/g, '!');
        } else {
          val[5] = '*';
        }
      }

      this.props.onChange(val);
    }
  }, {
    key: "render",
    value: function render() {
      this.state.value = this.props.value;
      return /*#__PURE__*/React.createElement("div", {
        className: "container-fluid"
      }, /*#__PURE__*/React.createElement("div", {
        className: "well well-small row"
      }, /*#__PURE__*/React.createElement("div", {
        className: "span6 col-sm-6"
      }, /*#__PURE__*/React.createElement("div", {
        className: "text_align_left"
      }, /*#__PURE__*/React.createElement("input", {
        type: "checkbox",
        value: "MON",
        onChange: this.onCheck,
        checked: this.state.value[5].search('MON') !== -1 ? true : false
      }), "\xA0Monday", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
        type: "checkbox",
        value: "WED",
        onChange: this.onCheck,
        checked: this.state.value[5].search('WED') !== -1 ? true : false
      }), "\xA0Wednesday", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
        type: "checkbox",
        value: "FRI",
        onChange: this.onCheck,
        checked: this.state.value[5].search('FRI') !== -1 ? true : false
      }), "\xA0Friday", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
        type: "checkbox",
        value: "SUN",
        onChange: this.onCheck,
        checked: this.state.value[5].search('SUN') !== -1 ? true : false
      }), "\xA0Sunday")), /*#__PURE__*/React.createElement("div", {
        className: "span6 col-sm-6"
      }, /*#__PURE__*/React.createElement("div", {
        className: "text_align_left"
      }, /*#__PURE__*/React.createElement("input", {
        type: "checkbox",
        value: "TUE",
        onChange: this.onCheck,
        checked: this.state.value[5].search('TUE') !== -1 ? true : false
      }), "\xA0Tuesday", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
        type: "checkbox",
        value: "THU",
        onChange: this.onCheck,
        checked: this.state.value[5].search('THU') !== -1 ? true : false
      }), "\xA0Thursday", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
        type: "checkbox",
        value: "SAT",
        onChange: this.onCheck,
        checked: this.state.value[5].search('SAT') !== -1 ? true : false
      }), "\xA0Saturday"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null))), "\xA0 Start time \xA0", /*#__PURE__*/React.createElement("select", {
        className: "hours",
        onChange: this.onAtHourChange,
        value: this.state.value[2]
      }, this.getHours()), "\xA0 : \xA0", /*#__PURE__*/React.createElement("select", _defineProperty({
        value: "DailyMinutes",
        className: "minutes",
        onChange: this.onAtMinuteChange
      }, "value", this.state.value[1]), this.getMinutes()));
    }
  }, {
    key: "getHours",
    value: function getHours() {
      var hours = [];
      var leap = parseInt(this.props.hours) || 1;

      for (var i = 0; i < 24; i = i + leap) {
        hours.push( /*#__PURE__*/React.createElement("option", {
          id: i,
          value: i < 10 ? "0".concat(i) : i
        }, i < 10 ? "0".concat(i) : i));
      }

      return hours;
    }
  }, {
    key: "getMinutes",
    value: function getMinutes() {
      var minutes = [];
      var leap = parseInt(this.props.minutes) || 1;

      for (var i = 0; i < 60; i = i + leap) {
        minutes.push( /*#__PURE__*/React.createElement("option", {
          id: i,
          value: i < 10 ? "0".concat(i) : i
        }, i < 10 ? "0".concat(i) : i));
      }

      return minutes;
    }
  }]);

  return CustomCron;
}(Component);

export { CustomCron as default };