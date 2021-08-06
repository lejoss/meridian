export function Table({ data, headers, children, className }) {
	console.log(data)
	return (
		<table className={className}>
			<thead>
				<tr>
					{headers && headers.map((h, i) => <th style={{ color: 'steelblue' }} key={i}>{h}</th>)}
				</tr>
			</thead>
			<tbody>
				{children(data)}
			</tbody>
		</table>
	)
}