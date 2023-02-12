import React from 'react';

const SellModal = (props) => {
  return (
        <div>
            <input type="checkbox" id={ props.id } className="modal-toggle" />
            <div className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Are you sure you want to disenchant a { props.name } ?</h3>
                <p className="py-4">Be aware that disenchanting a { props.name } is equivalent to disassembling it and will result in not having a { props.name } anymore</p>
                <div className="modal-action">
                <label onClick={() => console.log('NAY Label clicked!')} htmlFor={props.name + "sell"} className="btn btn-accent">No</label>
                <label onClick={() => props.handleDisenchant(props.name)} htmlFor={props.name + "sell"} className="btn btn-accent">Yes</label>
                </div>
            </div>
            </div>
        </div>
  );
};

export default SellModal;