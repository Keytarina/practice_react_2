export default function Options({
	options,
	totalFeedback,
	updateFeedback,
	onReset,
}) {
	return (
		<div>
			{options.map((option) => {
				return (
					<button
						// className={css.btn}
						type="button"
						key={option}
						name={option}
						onClick={updateFeedback}
					>
						{option}
					</button>
				);
			})}
			{totalFeedback ? <button onClick={onReset}>Reset</button> : ""}
		</div>
	);
}
