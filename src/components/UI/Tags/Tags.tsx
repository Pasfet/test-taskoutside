import { FC } from 'react';
import { ITagsProps } from '../../../types/tagsTypes';
import { TagsWrapper } from './TagsStyled';

const Tags: FC<ITagsProps> = ({ children }) => {
  return <TagsWrapper>{children}</TagsWrapper>;
};

export default Tags;
