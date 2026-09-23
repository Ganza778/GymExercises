import { useState } from "react"

function Input (){

	const [myText, setMyText] = useState("");

	function handleChange(e){
		setMyText(e.target.value)
	}

	return(
		<>
			<form className="card">
				<label>Write here: 
					<textarea value={myText} onChange={handleChange}></textarea>
				</label>
				<p>Current Value: {myText}</p>
			</form>
		</>
	)
}

export default Input