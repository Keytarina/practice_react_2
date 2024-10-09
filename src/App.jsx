import { useEffect, useState } from "react";
import "./App.css";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";

function App() {
	const [good, setGood] = useState(() => {
		// Зчитуємо значення за ключем
		const savedGood = window.localStorage.getItem("good");
		// Якщо там щось є, повертаємо це значення як початкове значення стану
		if (savedGood !== null) {
			return JSON.parse(savedGood);
		}
		// У протилежному випадку повертаємо яке-небудь значення за замовчуванням
		return 0;
	});
	const [neutral, setNeutral] = useState(() => {
		// Зчитуємо значення за ключем
		const savedNeutral = window.localStorage.getItem("neutral");
		// Якщо там щось є, повертаємо це значення як початкове значення стану
		if (savedNeutral !== null) {
			return JSON.parse(savedNeutral);
		}
		// У протилежному випадку повертаємо яке-небудь значення за замовчуванням
		return 0;
	});
	const [bad, setBad] = useState(() => {
		// Зчитуємо значення за ключем
		const savedBad = window.localStorage.getItem("bad");
		// Якщо там щось є, повертаємо це значення як початкове значення стану
		if (savedBad !== null) {
			return JSON.parse(savedBad);
		}
		// У протилежному випадку повертаємо яке-небудь значення за замовчуванням
		return 0;
	});
	useEffect(() => {
		window.localStorage.setItem("good", good);
		window.localStorage.setItem("neutral", neutral);
		window.localStorage.setItem("bad", bad);
	}, [good, neutral, bad]);

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
