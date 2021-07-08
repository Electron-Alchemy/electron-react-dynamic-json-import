import { TextField } from '@material-ui/core';

function App() {
	let val = localStorage["Test"];

	console.log(val);

	return (
		<div className="container mt-2">
			<h1> Hello </h1>

			<TextField id="standard-basic" label="Standard" onChange={(e) => {
				localStorage["Test"] = e.target.value;
				val = localStorage["Test"];
				console.log(val);
			}}/>
		</div>
	);
}

export default App;
