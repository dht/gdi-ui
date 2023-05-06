import React, { ForwardedRef, forwardRef } from 'react';
import { sendButtonClickAnalytics } from '../../analytics';
import { Wrapper } from './Button.style';
import classnames from 'classnames';

export type ButtonProps = {
  color: 'primary' | 'secondary';
  testId?: string;
  analyticsId?: string;
  analyticsSelectorId?: string;
  analyticsParams?: Json;
  onClick?: (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children?: React.ReactNode;
  link?: boolean;
};

export const Button = forwardRef((props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
  const { color, analyticsId, analyticsSelectorId, analyticsParams, testId, link, ...rest } = props;

  function onClick(ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if (!props.onClick) {
      return;
    }

    if (analyticsId) {
      sendButtonClickAnalytics(ev, {
        testId,
        analyticsId,
        analyticsSelectorId,
        analyticsParams,
      });
    }

    return props.onClick(ev);
  }

  delete (rest as any)['testId'];

  const className = classnames('Button-wrapper', color, {
    link,
  });

  return (
    <Wrapper className={className} data-testid={testId} ref={ref} {...rest} onClick={onClick}>
      {props.children}
    </Wrapper>
  );
});

export default Button;
