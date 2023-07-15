import Client from './client';
import NestedServer from './server';

export default function MixMatchPage() {
	console.log('MixMatchPage rendering');
	return (
		<div>
			<h1>Server Page</h1>
			<div className="box">
				<Client message="A message from server">
					<NestedServer />
				</Client>
			</div>
		</div>
	);
}
