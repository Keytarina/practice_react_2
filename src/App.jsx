import { useState } from "react";
import "./App.css";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";

function App() {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const updateFeedback = (event) => {
		switch (event.target.name) {
			case "good":
				setGood((prevState) => prevState + 1);
				break;
			case "neutral":
				setNeutral((prevState) => prevState + 1);
				break;
			case "bad":
				setBad((prevState) => prevState + 1);
				break;
		}
	};
	const onReset = () => {
		setGood(0);
		setNeutral(0);
		setBad(0);
	};

	const options = ["good", "neutral", "bad"];
	const totalFeedback = good + neutral + bad;
	const positiveFeedback = Math.round((good / totalFeedback) * 100);

	return (
		<>
			<h1>Sip Happens Café</h1>
			<p>
				Please leave your feedback about our service by selecting one of the
				options below.
			</p>

			<Options
				options={options}
				totalFeedback={totalFeedback}
				updateFeedback={updateFeedback}
				onReset={onReset}
			/>

			{totalFeedback ? (
				<Feedback
					good={good}
					neutral={neutral}
					bad={bad}
					positiveFeedback={positiveFeedback}
				/>
			) : (
				"No feedback yet"
			)}
		</>
	);
}

export default App;
