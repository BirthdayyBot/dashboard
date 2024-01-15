import { BasicTypographyProps } from '@lib/types/components/basic';
import { ReactNode } from 'react';

interface HeadingProps extends BasicTypographyProps {
	children: string | ReactNode;
	heading: 1 | 2 | 3 | 4;
}

const Heading = ({ children: text, heading, className = '' }: HeadingProps) => {
	if (heading === 1) return <h1 className={`text-4xl font-bold font-heading ${className}`}>{text}</h1>;
	if (heading === 2) return <h2 className={`text-3xl font-heading ${className}`}>{text}</h2>;
	if (heading === 3) return <h3 className={`text-2xl font-heading ${className}`}>{text}</h3>;
	if (heading === 4) return <h4 className={`text-xl font-heading ${className}`}>{text}</h4>;
	return <>HEADING</>;
};

export default Heading;
