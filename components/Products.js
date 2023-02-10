import React from 'react';

const Products = ({ data }) => {
  return (
    <div>
        {data.map(({ name, articles }) => (
        <div key={name}>
            <h3 className="mt-3 text-2xl">{name}</h3>
            {articles.map(({ art_id, amount_of }) => (
            <p key={art_id}>Art ID: {art_id}, Amount: {amount_of}</p>
            ))}
        </div>
    ))}
    </div>
  );
};

export default Products;
