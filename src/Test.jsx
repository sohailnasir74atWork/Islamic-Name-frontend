import React, { useState, useEffect } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import "./test.scss"

const Test = () => {

  const generateData = () => {
    ///chart one 
    const skipped = Math.floor(Math.random() * (2 - 0) + 0); // random value between 0 and 1
    const passed = Math.floor(Math.random() * (91 - 30) + 30); // random value between 30 and 90
    const failed = Math.floor(Math.random() * (2 - 0) + 0); // random value between 0 and 1
    const undefinedValue = Math.floor(Math.random() * (2 - 0) + 0); // random value between 0 and 1
    const pending = Math.floor(Math.random() * (2 - 0) + 0); // random value between 0 and 1
    const chartOneTotal = skipped + passed + failed + undefinedValue + pending; // total of chart one

    ///chart two 
    const scrnriopassed = Math.floor(Math.random() * (2 - 0) + 0); // random value between 30 and 90
    const scenriofailfailed = Math.floor(Math.random() * (2 - 0) + 0); // random value between 0 and 1
    const chartTwoTotal = scenriofailfailed + scrnriopassed; // total of chart two

    // chart 3
    const duration = Math.floor(Math.random() * (300 - 30) + 30); // random duration between 30 and 300
    const passFailChart = duration >= 100 ? 'pass' : 'fail'; // if total is greater than or equal to 100, then pass, otherwise fail


    return { skipped, passed, failed, undefinedValue, pending, duration, scrnriopassed, scenriofailfailed };
  }
  const [data, setData] = useState(Array.from({ length: 10 }, () => generateData()));
  const handleClick = () => {
    const newChartData = Array.from({ length: 10 }, () => generateData());
    setData(newChartData);
  }
  const generateName = () => {
    const names = [
      'Ahmed',
      'Ali',
      'Amir',
      'Asad',
      'Bilal',
      'Hamza',
      'Imran',
      'Kashif',
      'Nadeem',
      'Qasim',
      'Saad',
      'Sajjad',
      'Sami',
      'Saqib',
      'Shahid',
      'Tariq',
      'Umar',
      'Usman',
      'Waqar',
      'Yasin',
      'Zafar',
    ];

    const randomIndex = Math.floor(Math.random() * names.length);
    const name = names[randomIndex];
    return name.charAt(0).toUpperCase() + name.slice(1);
  };



  // const data = Array.from({ length: 10 }, () => generateData());
  useEffect(() => {
    generateData()
  }, [])
  console.log(data)
  let totalSkipped = 0;
  let totalPassed = 0;
  let totalFailed = 0;
  let totalUndefined = 0;
  let totalPending = 0;
  let totalScreenioPassed = 0;
  let totalScenarioFailFailed = 0;
  let countDurationLessThan100 = 0;
  let countDurationGreaterThan100 = 0;



  data.forEach((obj) => {
    totalSkipped += obj.skipped;
    totalPassed += obj.passed;
    totalFailed += obj.failed;
    totalUndefined += obj.undefinedValue;
    totalPending += obj.pending;
    if (obj.duration < 100) {
      countDurationLessThan100++;
    }
    if (obj.duration > 100) {
      countDurationGreaterThan100++;
    }
    totalScreenioPassed += obj.scrnriopassed;
    totalScenarioFailFailed += obj.scenriofailfailed;
  });

  return (
    <div className='page-container_test container'>
      <div className='chart-cont d-flex tac'>
        <div>
          <PieChart
            data={[
              { title: 'Skipped', value: totalSkipped, color: 'lightblue' },
              { title: 'Passed', value: totalPassed, color: 'lightgreen' },
              { title: 'Failed', value: totalFailed, color: 'lightcoral' },
              { title: 'Undefined', value: totalUndefined, color: 'lightcoral' },
              { title: 'Pending', value: totalPending, color: 'yellow' },
            ]}
          />
          <h3>STEPS</h3></div>
        <div>
          <PieChart
            data={[
              { title: 'Passed', value: totalScenarioFailFailed, color: 'lightgreen' },
              { title: 'Failed', value: totalScreenioPassed, color: 'lightcoral' },
            ]}
          />
          <h3>SCENARIO</h3></div>
        <div>
          <PieChart
            data={[
              { title: 'Passed', value: countDurationLessThan100, color: 'lightgreen' },
              { title: 'Failed', value: countDurationGreaterThan100, color: 'lightcoral' },
            ]}
          />
          <h3>FWATURES</h3></div>
      </div>
      <div className='d-flex space-between container'>
        <div>
          <h2 className='section-title element'>My Data</h2></div>
        <div>
          <button className='btn-primary' onClick={handleClick}>UPDATE DATA</button>
        </div>
      </div>
      <table className='container'>
        <thead>
          <tr className='row'>
            <th className='col-4 tac primary-c'>&nbsp;</th>
            <th className='col-4 tac primary-c'>STEPS</th>
            <th className='col-2 tac primary-c'>SCENARIO</th>
            <th className='col-2 tac primary-c'>FEATURES</th>
          </tr>
        </thead>
        <tbody>
          <tr className='row secondary-c'>
            <td className='col-4 d-flex tac'>
              <div className='cw tac'> Playes Names</div>
            </td>
            <td className='col-4 d-flex'>
              <div className='col tac cg'>Passed</div>
              <div className='col tac cc'>Failed</div>
              <div className='col tac cb'>Skipped</div>
              <div className='col tac cy'>Pending</div>
              <div className='col tac cc'>Undefined</div>
              <div className='col tac cgr'>Total</div>
            </td>
            <td className='col-2 d-flex'>
              <div className='col tac'>Passed</div>
              <div className='col tac'>Failed</div>
              <div className='col tac'>Total</div>
            </td>
            <td className='col-2 d-flex'>
              <div className='col tac'>Duration</div>
              <div className='col tac'>Status</div>
            </td>
          </tr>
        </tbody>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className='row secondary-c'>
              <td className='col-4 d-flex'>
                <div className='cw'>{generateName()}</div>
              </td>
              <td className='col-4 d-flex'>
                <div className={`col tac ${item.passed > 0 ? "cg" : "cw"}`}>{item.passed}</div>

                <div className={`col tac ${item.failed > 0 ? "cc" : "cw"}`}>{item.failed}</div>
                <div className={`col tac ${item.skipped > 0 ? "cb" : "cw"}`}>{item.skipped}</div>
                <div className={`col tac ${item.pending > 0 ? "cy" : "cw"}`}>{item.pending}</div>
                <div className={`col tac ${item.undefinedValue > 0 ? "cc" : "cw"}`}>{item.undefinedValue}</div>
                <div className='col tac cgr'>{item.passed + (item.pending + item.skipped + item.failed)}</div>
              </td>
              <td className='col-2 d-flex'>
                <div className={`col tac ${item.scrnriopassed > 0 ? "cg" : "cw"}`}>{item.scrnriopassed}</div>
                <div className={`col tac ${item.scenriofailfailed > 0 ? "cc" : "cw"}`}>{item.scenriofailfailed}</div>
                <div className='col tac cgr'>{item.scenriofailfailed + item.scenriofailfailed}</div>
              </td>
              <td className='col-2 d-flex'>
                <div className='col tac'>{item.duration}ms</div>
                <div className={`col tac ${item.duration < 100 ? "cl" : "cg"}`}>{item.duration < 100 ? "Failed" : "Passed"}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Test;
