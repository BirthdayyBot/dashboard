export default function InputGroup({ title, children }: { title?: string; children: React.ReactNode }) {
	return (
		<div className="InputGroup">
			<h1 className="text-2xl font-bold">{title}</h1>
			<div className=" dropdown-open bg-base-200 rounded-xl shadow-md p-3 mb-3">
				<div className="columns-2">{children}</div>
			</div>
		</div>
	);
}
