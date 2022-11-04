import React from 'react';

interface InputProps {
  placeholder?: string;
}

export default function Input(props: InputProps) {
  return <input placeholder={props?.placeholder} />;
}
