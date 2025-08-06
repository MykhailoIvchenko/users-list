import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { IUserMainData } from '../utils/types';
import { Card } from './ui/Card';
import { InfoRow } from './ui/InfoRow';
import { AppRoutes } from '../utils/enums';

interface UserCardProps {
  user: IUserMainData;
  className?: string;
}

export const UserCard = memo(({ user, className }: UserCardProps) => {
  const navigate = useNavigate();

  const { id, firstName, lastName, image } = user;

  const handleDetailsClick = useCallback(() => {
    navigate(`${AppRoutes.USERS}/${id}`);
  }, [navigate, id]);

  return (
    <Card
      className={className}
      imageUrl={image}
      imageAlt={`User ${firstName} ${lastName} avatar`}
      onDetailsClick={handleDetailsClick}
    >
      <InfoRow label={'First name'} value={firstName} />
      <InfoRow label={'Last name'} value={lastName} />
    </Card>
  );
});
