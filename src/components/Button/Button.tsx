import React from 'react';

interface ButtonProps extends React.PropsWithChildren {
  label: string;
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <button>
      {props.children}
    </button>
  );
};

export default Button;
