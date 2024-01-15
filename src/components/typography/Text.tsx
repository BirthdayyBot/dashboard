import { BasicTypographyProps } from '@lib/types/components/basic';
import { ReactNode } from 'react';

interface TextProps extends BasicTypographyProps {
	children: string | ReactNode;
}

const Text = ({ children: text, className = '' }: TextProps) => {
	return <p className={`${className}`}>{text}</p>;
};

export default Text;
