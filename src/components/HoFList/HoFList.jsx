import React from 'react';

const HoFList = (props) => {

  return (
    <table className='table table-striped table-bordered'>
      <thead>
        <tr>
          <th>Player</th>
          <th className='text-center'>points</th>
        </tr>
      </thead>
      <tbody>
        {props.HoFList.map(score => 
          <tr key={score.player}>
            <td>{score.player}</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default HoFList;