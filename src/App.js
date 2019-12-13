import React from 'react';
import logo from './logo.svg';
import './App.css';
import BarChart from './components/BarChart'


//数据
const data = {
  "桔子":[1000,1050,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000],
  "苹果":[900,910,920,930,940,950,960,970,980,990,1000,1050,1050,1050,1050,1050,1050,1050,1050,1050],
  "桃子":[800,800,800,800,800,800,800,800,800,800,800,800,800,800,800,800,800,800,800,800],
  "雪花梨":[700,700,700,700,700,700,700,700,700,700,700,700,700,700,700,700,700,700,700,700],
  "西瓜":[600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600],
  "猕猴桃":[500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500],
  "香蕉":[400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400],
  "葡萄":[400,500,600,700,800,900,1000,1100,1200,1300,1400,1500,1600,1700,1800,1900,2000,2100,2200,2300]
}

//时间线长度
const len = data[Object.keys(data)[0]].length;
//时间线数值
const time = [2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019];

//Bar颜色
const colors = {
  "桔子":"#5B8FF9",
  "苹果":"#5AD8A6",
  "桃子":"#5D7092", 
  "西瓜":"#F6BD16",
  "香蕉":"#E86452",
  "葡萄":"#6DC8EC",
  "雪花梨":"#945FB9",
  "猕猴桃":"#FF9845"
}

//长条图名称标签
const labels = {
  "桔子":<div style={{ textAlign: "center"}}><div>桔子</div></div>,
  "苹果":<div style={{ textAlign: "center"}}><div>苹果</div></div>,
  "桃子":<div style={{ textAlign: "center"}}><div>桃子</div></div>,
  "西瓜":<div style={{ textAlign: "center"}}><div>西瓜</div></div>,
  "香蕉":<div style={{ textAlign: "center"}}><div>香蕉</div></div>,
  "葡萄":<div style={{ textAlign: "center"}}><div>葡萄</div></div>,
  "雪花梨":<div style={{ textAlign: "center"}}><div>雪花梨</div></div>,
  "猕猴桃":<div style={{ textAlign: "center"}}><div>猕猴桃</div></div>,
}


class App extends React.Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="bar">
        <BarChart
            start={true}
            data={data}
            timeline={time}
            labels={labels}
            colors={colors}
            len={len}
            timeout={400}
            delay={100}
            timelineStyle={{
              textAlign: "center",
              fontSize: "40px",
              color: "rgb(148, 148, 148)",
              marginTop: "20px",
              marginBottom: "20px"
            }}
            textBoxStyle={{
              textAlign: "right",
              color: "rgb(133, 131, 131)",
              fontSize: "20px",
            }}
            barStyle={{
              height: "30px",
              marginTop: "30px",
              borderRadius: "10px",
            }}
            width={[20, 70, 10]}
            maxItems={8}
          />

        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    )
  }

}


export default App;
