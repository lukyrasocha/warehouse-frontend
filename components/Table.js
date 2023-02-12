import React from 'react';

const Table = ({ data }) => {
  return (
    <div className="overflow-x-auto w-full">
    <table className="table w-full">
        <thead>
        <tr>
            <th>Name</th>
            <th>Stock</th>
        </tr>
        </thead>

        <tbody>
        {data.map(({ art_id, name, stock }) => (
            <tr key={name}>
            <td>
                <div className="flex items-center space-x-3">
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                    <img src={name + ".jpeg"} alt={`Avatar of ${name}`} />
                    </div>
                </div>
                <div>
                    <div className="font-bold">{name}</div>
                </div>
                </div>
            </td>
            <td>{stock}</td>
            </tr>
        ))}
        </tbody>
    </table>
    </div>
  );
};

export default Table;


