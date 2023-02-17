import React from 'react';
import SellModal from './SellModal';
import BuyModal from './BuyModal';

const Card = (props) => {

  return (
    <div className="card w-96 bg-base-100 shadow-xl my-8 mx-4">
    <figure><img src={ props.image } alt="Shoes" /></figure>
    <div className="card-body">
        <h2 className="card-title">{ props.name } </h2>
        <span className="badge badge-lg">Furniture</span> 
        <div className="card-actions justify-end">
        <label htmlFor={props.name+ "buy"} className="btn btn-accent">buy</label>
        <label htmlFor={props.name + "sell"} className="btn btn-accent">sell</label>
        <BuyModal id={props.name + "buy"} name ={ props.name } handleBuy = {props.handleBuy} />
        <SellModal id={props.name + "sell"} name ={ props.name } handleDisenchant = {props.handleDisenchant} />
    </div>
    </div>
    </div>

  );
};

export default Card;