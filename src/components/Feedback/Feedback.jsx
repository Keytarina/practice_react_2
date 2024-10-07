export default function Feedback({ good, neutral, bad, positiveFeedback }) {
	return (
		<div>
			<p>Good: {good}</p>
			<p>Neutral: {neutral}</p>
			<p>Bad: {bad}</p>
			<p>Positive: {positiveFeedback}%</p>
		</div>
	);
}
