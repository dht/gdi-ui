import { Wrapper } from './Icon.style';
import { IconNames } from './Icon.types';
import classnames from 'classnames';

export type IconProps = {
  name: IconNames;
  onClick?: (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
};

export function Icon(props: IconProps) {
  const { name } = props;

  const className = classnames('Icon-wrapper material-symbols-outlined', props.className, {
    clickable: props.onClick,
  });

  return (
    <Wrapper className={className} data-testid='Icon-wrapper' onClick={props.onClick}>
      {name}
    </Wrapper>
  );
}

export default Icon;
