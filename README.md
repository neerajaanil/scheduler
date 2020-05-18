# custom-react-cron

Simple customizable react component to generate cron expression

## Getting Started

Package helps to build linux customized scheduler cron expression.
Make sure you have include bootstrap in your project

```
data = '* * * * * * *'
```
```
npm install ziplabs-custom-react-cron

```
## demo
[Live demo](https://glivne-chewy.github.io/custom-react-cron/)

![alt text](https://raw.githubusercontent.com/sojinantony01/react-cron-generator/master/public/images/Screenshot%20from%202019-06-08%2000-31-31.png)

![alt text](https://raw.githubusercontent.com/sojinantony01/react-cron-generator/master/public/images/Screenshot%20from%202019-06-08%2000-31-57.png)


```
import React, { Component } from 'react'
import CustomCron from 'ziplabs-custom-react-cron'
import 'ziplabs-custom-react-cron/dist/cron-builder.css'


class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
       
      };
      this.cronStyle = `
        .cron_builder {
          width: 90%;
        }

        .cron_builder_bordering {
          text-align: left;
        }

        .nav-tabs {
          border-bottom: 1px solid #ddd;
        }

        .tab-content>.active {
          display: block;
        }

        .row {
          margin-right: -15px;
          margin-left: -15px;
        }
      `
  }

  render() {
    return (<div>
      <CustomCron
        onChange={(e)=> {this.setState({value:e}); console.log(e)}}
        value={this.state.value}
        tabs={['Daily','Weekly', 'Monthly']}
        hours={2}
        minutes={15}
        style={this.cronStyle}
        showResultText={true}
        showResultCron={true}
        />
                            
    </div>)
  }
}

export default App;

```
## props

| Prop | Description | Default
| --- | --- | -- |
| value | cron expression  |  |
| onChange |  |  |
| tabs | set tabs list | ['Once', 'Minutes','Hourly','Daily','Weekly', 'Monthly'] |
| style | change style use existing classes: cron_builder, cron_builder_bordering, nav, nav-tabs, row, well, tab-content, active, col-md-6, col-sm-6 |  |
| hours | set hours leaps | 1 |
| minutes | set minutes leaps | 1 |
| showResultText | show in readable text format | false |
| showResultCron | show cron expression | false | 
## Acknowledgments
*cronstrue
*viswanath lakshmanan
*Guy Livne
https://github.com/glivne-chwy/custom-react-cron
