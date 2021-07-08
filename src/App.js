import { TextField } from '@material-ui/core';

function App() {
	let val = localStorage["Test"];

	console.log(val);

	const getDynamicJson = async (page) => {
		const jsonFilePath = `./jsons/json${page}.json`
		const jsonFile = await require(`${jsonFilePath}`)
		return jsonFile
	}

	const json1 = getDynamicJson(1);
	const json2 = getDynamicJson(2);

	return (
		<div className="container mt-2">
			<h1> Hello </h1>

			<TextField id="standard-basic" label="Standard" onChange={(e) => {
				localStorage["Test"] = e.target.value;
				val = localStorage["Test"];
				console.log(val);
			}}/>

			{json1}
			{json2}

		</div>
	);
}

export default App;
