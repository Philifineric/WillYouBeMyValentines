'use client';
import React from 'react';

interface ButtonYesProps {
  onClick: () => void;
}

const ButtonYes: React.FC<ButtonYesProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className="btn btn-success">
      Yes
    </button>
  );
};

export default ButtonYes;