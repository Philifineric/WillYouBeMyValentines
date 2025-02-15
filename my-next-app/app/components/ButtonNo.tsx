'use client';
import React from 'react';

interface ButtonNoProps {
  onClick: () => void;
}

const ButtonNo: React.FC<ButtonNoProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className="btn btn-xs glass">
      No
    </button>
  );
};

export default ButtonNo;