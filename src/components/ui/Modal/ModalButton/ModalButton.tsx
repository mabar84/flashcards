import { ComponentPropsWithoutRef, ReactNode } from 'react';

import { Button2 } from '@/components/ui/Button';
import { Typography } from '@/components/ui/Typography';
import { Close } from '@radix-ui/react-dialog';

type Props = {
  children: ReactNode;
} & ComponentPropsWithoutRef<typeof Button2>;

export const ModalButton = (props: Props) => {
  const { children, ...restProps } = props;

  return (
    <Close asChild>
      <Button2 {...restProps}>
        <Typography.Subtitle2>{children}</Typography.Subtitle2>
      </Button2>
    </Close>
  );
};
