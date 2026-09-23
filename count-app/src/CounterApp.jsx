import { useState } from "react";

function CountApp() {

	const [count, setCount] = useState(0);
	return (
		<>
			<div className="card">
				<h1>Counter App</h1>
				<form>
					<label>{count}</label>
					<button type="button" onClick={() => setCount(count + 1)} className="addBtn">Add</button>

					<button type="button" onClick={() => count === 0 ? null : setCount(count - 1)} className="subBtn">Subtract</button>
				</form>
			</div>
		</>
	);

}

export default CountApp