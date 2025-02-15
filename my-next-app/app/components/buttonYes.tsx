'use client';
import React from 'react';

interface ButtonYesProps {
  onClick: () => void;
}

const ButtonYes: React.FC<ButtonYesProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className="btn btn-lg btn-wide btn-error">
      Yes
      
    </button>
  );
};

export default ButtonYes;