import { useEffect } from 'react';
import styled from 'styled-components';

interface NotificationProps {
  message: string;
  type?: 'success' | 'error' | 'info';
  onClose: () => void;
  duration?: number; // в мс
  className?: string;
}

const backgroundByType = {
  success: '#d4edda',
  error: '#f8d7da',
  info: '#d1ecf1',
};

const borderByType = {
  success: '#28a745',
  error: '#dc3545',
  info: '#17a2b8',
};

const NotificationWrapper = styled.div<{
  $type: NotificationProps['type'];
}>`
  position: fixed;
  top: ${({ theme }) => theme.spacing(4)};
  right: ${({ theme }) => theme.spacing(4)};
  min-width: 280px;
  max-width: 400px;
  padding: ${({ theme }) => theme.spacing(4)};
  background-color: ${({ $type }) => backgroundByType[$type || 'info']};
  color: ${({ theme }) => theme.colors.text};
  border-left: 4px solid ${({ $type }) => borderByType[$type || 'info']};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  font-size: ${({ theme }) => theme.fontSizes.base};
  z-index: 1000;
  transition: opacity 0.3s ease-in-out;
`;

export const Notification = ({
  message,
  type = 'info',
  onClose,
  duration = 3000,
  className,
}: NotificationProps) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <NotificationWrapper className={className} $type={type} role='alert'>
      {message}
    </NotificationWrapper>
  );
};
