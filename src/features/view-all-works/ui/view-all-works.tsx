import React from 'react';

import { Button } from 'shared/ui/button';

interface Props {
  title: string;
  onClick: () => void;
  className?: string;
}

export const ViewAllWorks: React.FC<Props> = ({ title, className, onClick }) => {
  return (
    <Button
      isRoundedFull
      size='large'
      color='yellow'
      className={className}
      onClick={onClick}
    >
      {title}
    </Button>
  );
};
