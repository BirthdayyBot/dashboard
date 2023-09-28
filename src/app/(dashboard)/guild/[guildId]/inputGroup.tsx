export default function InputGroup({ title, children }: { title: string; children: React.ReactNode }) {
	return (
		<div className="InputGroup bg-base-300 rounded-xl shadow-md p-2 mb-3">
			<h1 className="text-2xl font-bold">{title}</h1>
			<div className="columns-2">{children}</div>
		</div>
	);
}
