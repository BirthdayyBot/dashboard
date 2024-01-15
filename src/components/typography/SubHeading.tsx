import { BasicTypographyProps } from '@lib/types/components/basic';
import { ReactNode } from 'react';

interface SubHeadingProps extends BasicTypographyProps {
	children: string | ReactNode;
}

const SubHeading = ({ children: text, className }: SubHeadingProps) => {
	return <h1 className={`text-l font-light font-sub-heading  ${className}`}>{text}</h1>;
};

export default SubHeading;
