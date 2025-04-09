import React from 'react';

import { Button } from 'shared/ui/button';
import { ArrowIcon } from 'shared/icons';

interface Props {
  onClick: () => void;
  className?: string;
}

export const StartConstruction: React.FC<Props> = ({ className, onClick }) => {
  return (
    <Button
      name='arrow-down-icon'
      isRoundedFull
      variant='ghost'
      className={className}
      aria-label="Проскролить к старту"
      onClick={onClick}
    >
      <ArrowIcon />
    </Button>
  );
}
