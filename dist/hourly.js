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
    _this.onHourChange = _this.onHourChange.bind(_assertThisInitialized(_this));
    _this.onAtHourChange = _this.onAtHourChange.bind(_assertThisInitialized(_this));
    _this.onAtMinuteChange = _this.onAtMinuteChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(CustomCron, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.state.value = this.props.value;

      if (this.state.value[2].search('0/') === 0 || this.state.value[2] === '*') {
        this.state.every = true;
      }
    }
  }, {
    key: "onHourChange",
    value: function onHourChange(e) {
      if (this.state.every && (e.target.value > 0 && e.target.value < 24 || e.target.value == '')) {
        var val = ['0', '0', '*', '*', '*', '?', '*'];

        if (e.target.value == '') {
          val[2] = '';
        } else {
          val[2] = "0/".concat(e.target.value);
        }

        this.props.onChange(val);
      }
    }
  }, {
    key: "onAtHourChange",
    value: function onAtHourChange(e) {
      var val = ['0', this.state.value[1], '*', '*', '*', '?', '*'];
      val[2] = "".concat(e.target.value, "/1");
      this.props.onChange(val);
    }
  }, {
    key: "onAtMinuteChange",
    value: function onAtMinuteChange(e) {
      var val = ['0', '*', this.state.value[2], '*', '*', '?', '*'];
      val[1] = "".concat(e.target.value);
      this.props.onChange(val);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      this.state.value = this.props.value;
      return /*#__PURE__*/React.createElement("div", {
        className: "tab-content"
      }, /*#__PURE__*/React.createElement("div", {
        className: "tab-pane active"
      }, /*#__PURE__*/React.createElement("div", {
        className: "well well-small"
      }, /*#__PURE__*/React.createElement("input", {
        type: "radio",
        onClick: function onClick(e) {
          _this2.setState({
            every: true
          });

          _this2.props.onChange(['0', '0', '0/1', '*', '*', '?', '*']);
        },
        checked: this.state.every ? true : false
      }), /*#__PURE__*/React.createElement("span", null, "\xA0Every \xA0"), /*#__PURE__*/React.createElement("input", {
        disabled: this.state.every ? false : true,
        type: "Number",
        onChange: this.onHourChange,
        value: this.state.value[2].split('/')[1] ? this.state.value[2].split('/')[1] : ''
      }), /*#__PURE__*/React.createElement("span", null, "\xA0hour(s)\xA0")), /*#__PURE__*/React.createElement("div", {
        className: "well row well-small margin-right-0 margin-left-0"
      }, /*#__PURE__*/React.createElement("div", {
        className: "col-md-offset-2 col-md-6 text_align_right"
      }, /*#__PURE__*/React.createElement("input", {
        type: "radio",
        onClick: function onClick(e) {
          _this2.setState({
            every: false
          });

          _this2.props.onChange();
        },
        checked: this.state.every ? false : true
      }), /*#__PURE__*/React.createElement("span", {
        className: "margin-right-10 "
      }, "\xA0At\xA0"), /*#__PURE__*/React.createElement("select", {
        className: "hours",
        disabled: this.state.every ? true : false,
        onChange: this.onAtHourChange,
        value: this.state.value[2].split('/')[0] ? this.state.value[2].split('/')[0] : '00'
      }, this.getHours()), "\xA0 : \xA0", /*#__PURE__*/React.createElement("select", {
        className: "minutes",
        disabled: this.state.every ? true : false,
        onChange: this.onAtMinuteChange,
        value: this.state.value[1]
      }, this.getMinutes())))));
    }
  }, {
    key: "getHours",
    value: function getHours() {
      var hours = [];
      var leap = parseInt(this.props.hours) || 1;

      for (var i = 0; i < 24; i = i + leap) {
        hours.push( /*#__PURE__*/React.createElement("option", {
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
          value: i < 10 ? "0".concat(i) : i
        }, i < 10 ? "0".concat(i) : i));
      }

      return minutes;
    }
  }]);

  return CustomCron;
}(Component);

export { CustomCron as default };