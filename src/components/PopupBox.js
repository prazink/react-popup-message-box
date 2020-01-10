import React from 'react';

const PopupBox = props => {
  const { showPopupBox, closePopupBox } = props;
  // Add active class onClick button
  let modalClass = ['modal-box'];
  if (showPopupBox) {
    modalClass.push('active');
  }
  return (
    <>
      {showPopupBox && (
        <div className={modalClass.join(' ')}>
          <div className='modal-body'>
            <button className='close-button' onClick={closePopupBox}>
              &times;
            </button>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
              vitae quod optio atque, nisi, earum sunt accusantium labore
              exercitationem animi corrupti totam. Labore commodi perferendis
              temporibus ullam perspiciatis voluptas iusto.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupBox;
