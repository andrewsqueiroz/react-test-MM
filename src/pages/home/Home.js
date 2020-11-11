import React from 'react';

import CountDays from '../../components/countDays/CountDays'

function Home() {
  return (
    <div className="container">
      <div className='row'>
        <div className="col-sm-12">
          <div className="textBox">
            <span>
              We are <strong>square</strong> <br/>
              and we are <strong>coming soon</strong>
            </span>
          </div>
        </div>
        <div className="col-sm-12">
          <CountDays />
        </div>
      </div>
    </div>
  );
}

export default Home;
