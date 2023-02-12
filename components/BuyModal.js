import React from 'react';

const BuyModal = (props) => {
  return (
        <div>
            <input type="checkbox" id={ props.id } className="modal-toggle" />
            <div className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Are you sure you want to buy a { props.name } ?</h3>
                <p className="py-4">Be aware that buying a { props.name } is equivalent to adding it to your warehouse</p>
                <div className="modal-action">
                <label onClick={() => console.log('NAY Label clicked!')} htmlFor={props.name + "buy"} className="btn btn-accent">No</label>
                <label onClick={() => props.handleBuy(props.name)} htmlFor={props.name + "buy"} className="btn btn-accent">Yes</label>
                </div>
            </div>
            </div>
        </div>
  );
};

export default BuyModal;