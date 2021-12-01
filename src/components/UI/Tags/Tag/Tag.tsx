import { FC } from 'react';
import { ITagProps } from '../../../../types/tagsTypes';
import { TagButton, TagText } from './TagStyled';

const Tag: FC<ITagProps> = ({ active, children }) => {
  return (
    <TagButton active={active}>
      <TagText>{children}</TagText>
    </TagButton>
  );
};

export default Tag;
