import React, { useState } from 'react';

import { TextField } from '@material-ui/core';

function App() {
	const [title, setTitle] = useState("")

	let val = localStorage["Test"];

	console.log(val);

	const getDynamicJson = async (page) => {
		const jsonFilePath = `./jsons/json${page}.json`
		const jsonFile = await require(`${jsonFilePath}`)
		setTitle(jsonFile.title);
	}

	return (
		<div className="container mt-2">
			<h1> Hello </h1>

			<TextField id="standard-basic" label="Standard" onChange={(e) => {
				localStorage["Test"] = e.target.value;
				val = localStorage["Test"];
				console.log(val);

				if (val === "hello1"){
					getDynamicJson(1)
				}

				if (val === "hello2"){
					getDynamicJson(2)
				}
			}}/>

			{title}

		</div>
	);
}

export default App;
