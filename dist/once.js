import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _createSuper from "@babel/runtime/helpers/esm/createSuper";
import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

var CustomCron = /*#__PURE__*/function (_Component) {
  _inherits(CustomCron, _Component);

  var _super = _createSuper(CustomCron);

  function CustomCron(props) {
    var _this;

    _classCallCheck(this, CustomCron);

    _this = _super.call(this, props);

    var startDate = _this.getStartDate(props);

    _this.state = {
      startDate: startDate
    };
    _this.onDayChange = _this.onDayChange.bind(_assertThisInitialized(_this));
    _this.onAtHourChange = _this.onAtHourChange.bind(_assertThisInitialized(_this));
    _this.onAtMinuteChange = _this.onAtMinuteChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(CustomCron, [{
    key: "getStartDate",
    value: function getStartDate(props) {
      if (props.value && props.value.length) {
        return new Date("".concat(props.value[4], "/").concat(props.value[3], "/").concat(props.value[6]));
      }

      return new Date();
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      this.state.value = this.props.value;
    }
  }, {
    key: "onDayChange",
    value: function onDayChange(date) {
      var val = _toConsumableArray(this.state.value);

      val[3] = date.getDate().toString();
      val[4] = (date.getMonth() + 1).toString();
      this.setState({
        startDate: date,
        value: val
      });
      this.props.onChange(val);
    }
  }, {
    key: "onAtHourChange",
    value: function onAtHourChange(e) {
      var val = this.state.value;
      val[2] = "".concat(e.target.value);
      this.props.onChange(val);
    }
  }, {
    key: "onAtMinuteChange",
    value: function onAtMinuteChange(e) {
      var val = this.state.value;
      val[1] = "".concat(e.target.value);
      this.props.onChange(val);
    }
  }, {
    key: "render",
    value: function render() {
      this.state.value = this.props.value;
      return /*#__PURE__*/React.createElement("div", {
        className: "tab-pane"
      }, /*#__PURE__*/React.createElement("div", {
        className: "well well-small"
      }, "\xA0 In: \xA0", /*#__PURE__*/React.createElement(DatePicker, {
        selected: this.state.startDate,
        onChange: this.onDayChange,
        minDate: new Date()
      })), "\xA0 At: \xA0", /*#__PURE__*/React.createElement("select", {
        id: "DailyHours",
        className: "hours",
        onChange: this.onAtHourChange,
        value: this.state.value[2]
      }, this.getHours()), "\xA0 : \xA0", /*#__PURE__*/React.createElement("select", {
        id: "DailyMinutes",
        className: "minutes",
        onChange: this.onAtMinuteChange,
        value: this.state.value[1]
      }, this.getMinutes()));
    }
  }, {
    key: "getHours",
    value: function getHours() {
      var hours = [];
      var leap = parseInt(this.props.hours) || 1;
      var startHour = this.isToday() ? this.getNextHour() : 0;

      for (var i = startHour; i < 24; i = i + leap) {
        hours.push( /*#__PURE__*/React.createElement("option", {
          id: i,
          value: i < 10 ? "0".concat(i) : i
        }, i < 10 ? "0".concat(i) : i));
      }

      return hours;
    }
  }, {
    key: "isToday",
    value: function isToday() {
      var today = new Date();
      return this.state.startDate.getDate() == today.getDate() && this.state.startDate.getMonth() == today.getMonth() && this.state.startDate.getFullYear() == today.getFullYear();
    }
  }, {
    key: "getNextHour",
    value: function getNextHour() {
      var hourNow = this.state.startDate.getHours();
      return hourNow < 23 ? hourNow + 1 : 23;
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