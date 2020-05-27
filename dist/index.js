import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _createSuper from "@babel/runtime/helpers/esm/createSuper";
import React, { Component } from 'react';
import cronstrue from 'cronstrue';
import Once from './once';
import Minutes from './minutes';
import Daily from './daily';
import Hourly from './hourly';
import Weekly from './weekly';
import Monthly from './monthly';
import Yearly from './yearly'; // import './cron-builder.css';

var defaultTabs = ['Once', 'Minutes', 'Hourly', 'Daily', 'Weekly', 'Monthly']; //,'Yearly'

var date = new Date();
var defaultTabsVal = {
  Once: [//Now
  '0', '0', (date.getHours() < 23 ? date.getHours() + 1 : 23).toString(), date.getDate().toString(), (date.getMonth() + 1).toString(), '?', date.getFullYear().toString()],
  Minutes: ['0', '0/1', '*', '*', '*', '?', '*'],
  Hourly: ['0', '0', '0/1', '*', '*', '?', '*'],
  Daily: ['0', '0', '00', '1/1', '*', '?', '*'],
  Weekly: ['0', '0', '00', '?', '*', '*', '*'],
  Monthly: ['0', '0', '00', '1', '1/1', '?', '*']
};
var tabs = [];

var CustomCron = /*#__PURE__*/function (_Component) {
  _inherits(CustomCron, _Component);

  var _super = _createSuper(CustomCron);

  function CustomCron(props) {
    var _this;

    _classCallCheck(this, CustomCron);

    _this = _super.call(this, props);
    _this.state = {//    selectedTab: tabs[0],
    };
    tabs = props.tabs || defaultTabs;
    return _this;
  }

  _createClass(CustomCron, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      if (!this.props.value || this.props.value.split(' ').length !== 7) {
        this.state.value = defaultTabsVal[tabs[3]];
        this.state.selectedTab = tabs[3];
        this.parentChange(this.state.value);
      } else {
        this.state.value = this.props.value.replace(/,/g, '!').split(' ');
      }

      var val = this.state.value;

      if (val[6] !== '*') {
        this.state.selectedTab = defaultTabs[0];
      } else if (val[1].search('/') !== -1 && val[2] == '*' && val[3] == '1/1') {
        this.state.selectedTab = defaultTabs[1];
      } else if (val[2].search('/') !== -1) {
        this.state.selectedTab = defaultTabs[2];
      } else if (val[3].search('/') !== -1 || val[5] == 'MON-FRI') {
        this.state.selectedTab = defaultTabs[3];
      } else if (val[3] === '?') {
        this.state.selectedTab = defaultTabs[4];
      } else if (val[3].startsWith('L') || val[5] === '1/1') {
        this.state.selectedTab = defaultTabs[5];
      } else {
        this.state.selectedTab = tabs[0];
      }
    }
  }, {
    key: "defaultValue",
    value: function defaultValue(tab) {
      return defaultTabsVal[tab];
    }
  }, {
    key: "tabChanged",
    value: function tabChanged(tab) {
      this.setState({
        selectedTab: tab,
        value: this.defaultValue(tab)
      });
      this.parentChange(this.defaultValue(tab));
    }
  }, {
    key: "getHeaders",
    value: function getHeaders() {
      var _this2 = this;

      return tabs.map(function (d) {
        return /*#__PURE__*/React.createElement("li", {
          className: _this2.state.selectedTab === d ? 'active' : ''
        }, /*#__PURE__*/React.createElement("a", {
          onClick: _this2.tabChanged.bind(_this2, d)
        }, d));
      });
    }
  }, {
    key: "onValueChange",
    value: function onValueChange(val) {
      if (val && val.length) {
        this.setState({
          value: val
        });
      } else {
        this.setState({
          value: ['0', '0', '00', '*', '*', '?', '*']
        });
        val = ['0', '0', '00', '*', '*', '?', '*'];
      }

      this.parentChange(val);
    }
  }, {
    key: "parentChange",
    value: function parentChange(val) {
      var newVal = '';
      newVal = val.toString().replace(/,/g, ' ');
      newVal = newVal.replace(/!/g, ',');
      console.log(newVal);
      this.props.onChange(newVal);
    }
  }, {
    key: "getVal",
    value: function getVal() {
      var val = cronstrue.toString(this.state.value.toString().replace(/,/g, ' ').replace(/!/g, ','));

      if (val.search('undefined') === -1) {
        return val;
      }

      return '-';
    }
  }, {
    key: "getComponent",
    value: function getComponent(tab) {
      switch (tab) {
        case defaultTabs[0]:
          return /*#__PURE__*/React.createElement(Once, {
            value: this.state.value,
            hours: this.props.hours,
            minutes: this.props.minutes,
            onChange: this.onValueChange.bind(this)
          });
          break;

        case defaultTabs[1]:
          return /*#__PURE__*/React.createElement(Minutes, {
            value: this.state.value,
            onChange: this.onValueChange.bind(this)
          });
          break;

        case defaultTabs[2]:
          return /*#__PURE__*/React.createElement(Hourly, {
            value: this.state.value,
            hours: this.props.hours,
            minutes: this.props.minutes,
            onChange: this.onValueChange.bind(this)
          });
          break;

        case defaultTabs[3]:
          return /*#__PURE__*/React.createElement(Daily, {
            value: this.state.value,
            hours: this.props.hours,
            minutes: this.props.minutes,
            onChange: this.onValueChange.bind(this)
          });
          break;

        case defaultTabs[4]:
          return /*#__PURE__*/React.createElement(Weekly, {
            value: this.state.value,
            hours: this.props.hours,
            minutes: this.props.minutes,
            onChange: this.onValueChange.bind(this)
          });
          break;

        case defaultTabs[5]:
          return /*#__PURE__*/React.createElement(Monthly, {
            value: this.state.value,
            hours: this.props.hours,
            minutes: this.props.minutes,
            onChange: this.onValueChange.bind(this)
          });
          break;

        case defaultTabs[6]:
          return /*#__PURE__*/React.createElement(Yearly, {
            value: this.state.value,
            hours: this.props.hours,
            minutes: this.props.minutes,
            onChange: this.onValueChange.bind(this)
          });
          break;

        default:
          return;
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, this.props.style && /*#__PURE__*/React.createElement("style", null, this.props.style), /*#__PURE__*/React.createElement("div", {
        className: "cron_builder"
      }, /*#__PURE__*/React.createElement("ul", {
        className: "nav nav-tabs"
      }, this.getHeaders()), /*#__PURE__*/React.createElement("div", {
        className: "cron_builder_bordering"
      }, this.getComponent(this.state.selectedTab)), this.props.showResultText && /*#__PURE__*/React.createElement("div", {
        className: "cron-builder-bg"
      }, this.getVal()), this.props.showResultCron && /*#__PURE__*/React.createElement("div", {
        className: "cron-builder-bg"
      }, this.state.value.toString().replace(/,/g, ' ').replace(/!/g, ','))));
    }
  }]);

  return CustomCron;
}(Component);

export { CustomCron as default };