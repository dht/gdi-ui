import { ToastContainer, toast } from 'react-toastify';
import styled from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

type ToastBarContainerProps = {};

export function Toast(_props: ToastBarContainerProps) {
  return <StyledToastContainer position={toast.POSITION.BOTTOM_LEFT} theme='light' />;
}

const StyledToastContainer = styled(ToastContainer)`
  bottom: 54rem;
  font-size: 16rem;
  z-index: 9;
`;
