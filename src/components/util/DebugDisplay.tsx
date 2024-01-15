import React, { ReactNode } from 'react';

interface DebugDisplayProps {
	label: string;
	data: string;
	children?: ReactNode;
}

const DebugDisplay: React.FC<DebugDisplayProps> = ({ label, data, children }: DebugDisplayProps) => {
	return (
		<>
			<details tabIndex={0} className="border collapse collapse-arrow border-base-300 bg-base-200">
				<summary className="text-xl font-medium collapse-title">DEBUG: {label}</summary>
				<div className="collapse-content">
					<p>{data}</p>
					{children}
				</div>
			</details>
		</>
	);
};

export default DebugDisplay;
