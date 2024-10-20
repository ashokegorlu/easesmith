import React from 'react';

const AddToCartModal = ({ product, isOpen, closeModal }) => {
  if (!isOpen) return null;

  return (
    <>
    {/* // <div className="modal-overlay">
    //   <div className="modal">
    //     <h2>{product.name}</h2>
    //     <p>Price: ₹{product.price}</p>
    //     <button onClick={closeModal}>Close</button>
    //   </div>
    // </div> */}
    <input type="checkbox" id="my_modal_6" className="modal-toggle" />
<div className="modal" role="dialog">
  <div className="modal-box">
    <h3 className="text-lg font-bold">Hello!</h3>
    <p className="py-4">This modal works with a hidden checkbox!</p>
    <div className="modal-action">
      <label htmlFor="my_modal_6" className="btn">Close!</label>
    </div>
  </div>
</div>
    </>
  );
};

export default AddToCartModal;
