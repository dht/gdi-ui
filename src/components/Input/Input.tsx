import { Wrapper } from './Input.style';
import TextArea from '../TextArea/TextArea';
import React, { forwardRef } from 'react';
import { useMount } from 'react-use';

export type InputProps = {
  placeholder?: string;
  value?: string;
  label?: string;
  onChange: (ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void; // prettier-ignore
  onBlur?: () => void;
  onKeyDown?: (ev: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  rows?: number;
  multiline?: boolean;
  isNumeric?: boolean;
  isPassword?: boolean;
  autoFocus?: boolean;
  preventArrows?: boolean;
  width?: string | number;
};

export const Input = forwardRef((props: InputProps, forwardRef: any) => {
  const ref = forwardRef || React.createRef<HTMLInputElement>();

  const {
    placeholder,
    value = '',
    multiline,
    autoFocus,
    isNumeric,
    isPassword,
    preventArrows,
    width,
  } = props;

  let type = 'text';

  useMount(() => {
    if (autoFocus && ref.current) {
      ref.current.focus();
    }
  });

  if (multiline) {
    return <TextArea {...props} ref={ref} />;
  }

  if (isNumeric) {
    type = 'number';
  }

  if (isPassword) {
    type = 'password';
  }

  function onKeyDown(ev: React.KeyboardEvent<HTMLInputElement>) {
    if (isArrowKey(ev.key) && preventArrows) {
      ev.preventDefault();
    }
    if (props.onKeyDown) {
      props.onKeyDown(ev);
    }
  }

  function onChange(event: React.FormEvent<HTMLInputElement>, _newValue?: string) {
    props.onChange(event);
  }

  const style: React.CSSProperties = {};

  if (width) {
    style.width = width + 'rem';
  }

  return (
    <Wrapper
      className='Input-wrapper'
      data-testid='Input-wrapper'
      ref={ref}
      auto-complete='off'
      type={type}
      placeholder={placeholder}
      value={value}
      style={style}
      onBlur={props.onBlur}
      onKeyDown={onKeyDown}
      onChange={onChange}
    />
  );
});

export default Input;

const isArrowKey = (key: string) => {
  return key === 'ArrowUp' || key === 'ArrowRight' || key === 'ArrowDown' || key === 'ArrowLeft';
};
