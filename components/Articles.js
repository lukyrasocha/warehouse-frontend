import React from 'react';

const Articles = ({ data }) => {
  return (
    <div>
    {data.map(({ art_id, name, stock }) => (
        <div key={art_id}>
        <h3 className="mt-3 text-2xl">{name}</h3>
        <p>Art ID: {art_id}, Stock: {stock}</p>
        </div>
    ))}
    </div>
  );
};

export default Articles;