import React from 'react';

const DataDisplay = ({ data }) => {
  return (
    <div className="data-display">
      <h2>Data Display</h2>
      {data.length ? (
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      ) : (
        <p>No data to display.</p>
      )}
    </div>
  );
};

export default DataDisplay;
