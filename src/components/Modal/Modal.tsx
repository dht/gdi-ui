import { useRef } from 'react';
import { createPortal } from 'react-dom';
import { useKey } from 'react-use';
import { invokeEvent } from 'shared-base';
import { Icon } from '../Icon/Icon';
import { useFocusOn } from './Modal.hooks';
import './Modal.scss';
import { Content, Header, HeaderActions, ModalBody, Title, Wrapper } from './Modal.style';

export type ModalProps = {
  title?: string;
  children: JSX.Element[] | JSX.Element;
  open?: boolean;
  onClose: () => void;
  focusOnClassName?: string;
  header?: JSX.Element[] | JSX.Element;
  hideBackdrop?: boolean;
  dataTestId?: string;
};

export function Modal(props: ModalProps) {
  const { open = false, title, focusOnClassName, dataTestId } = props;
  const ref = useRef<HTMLDivElement>(null);

  useFocusOn(ref, focusOnClassName);

  function onClose() {
    if (!props.onClose) {
      return;
    }
    props.onClose();
  }

  function onWrapperClick(ev: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (!ev.target || !(ev.target as Element).classList.contains('modal-root')) {
      return;
    }

    onClose();
  }

  if (!open) {
    return null;
  }

  useKey('Escape', onClose);

  function renderTitle() {
    if (props.header) {
      return props.header;
    }

    return <Title variant='h6'>{title}</Title>;
  }

  function toggleFullscreen() {
    invokeEvent('toggleFullscreen');
  }

  function renderModal() {
    return (
      <Wrapper className='modal-root' data-testid={dataTestId} ref={ref} onClick={onWrapperClick}>
        <ModalBody>
          <Header className='header' onClick={toggleFullscreen}>
            {renderTitle()}
            <HeaderActions>
              <Icon onClick={onClose} data-testid='close-dialog-btn' name='close' />
            </HeaderActions>
          </Header>
          <Content>{props.children}</Content>
        </ModalBody>
      </Wrapper>
    );
  }

  const domNode = document.body;

  return createPortal(renderModal(), domNode, 'modal');
}

export default Modal;
