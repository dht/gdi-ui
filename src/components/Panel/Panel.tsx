import classnames from 'classnames';
import { useRef } from 'react';
import Draggable, { DraggableData, DraggableEvent } from 'react-draggable';
import { useLocalStorage } from 'react-use';
import { IPoint } from '../../types';
import Icon from '../Icon/Icon';
import { Actions, Content, Header, Title, Wrapper } from './Panel.style';

const PANEL_POSITION_LOCAL_STORAGE_KEY = 'PANEL_POSITION';

export type PanelProps = {
  id: string;
  title: string;
  children: JSX.Element | JSX.Element[];
  onClose: () => void;
  transparent?: boolean;
  x?: number;
  y?: number;
};

export function Panel(props: PanelProps) {
  const { id, title, transparent, x = 0, y = 0 } = props;
  const draggableRef = useRef(null);

  const [delta, setDelta] = useLocalStorage<IPoint>(`${PANEL_POSITION_LOCAL_STORAGE_KEY}_${id}`, {
    x,
    y,
  });

  function onStopDragging(_e: DraggableEvent, data: DraggableData) {
    const { x, y } = data;
    setDelta({ x, y });
  }

  const Cmp: any = Draggable;

  const className = classnames('Panel-wrapper', {
    transparent,
  });

  const classNameContent = classnames('content', {
    transparent,
  });

  return (
    <Cmp nodeRef={draggableRef} onStop={onStopDragging} defaultPosition={delta} handle='.header'>
      <Wrapper className={className} data-testid='Panel-wrapper' ref={draggableRef}>
        <Header className='header'>
          <Title>{title}</Title>
          <Actions>
            <Icon name='cancel' onClick={props.onClose} />
          </Actions>
        </Header>
        <Content className={classNameContent}>{props.children}</Content>
      </Wrapper>
    </Cmp>
  );
}

export default Panel;
