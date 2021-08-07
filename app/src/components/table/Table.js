export default function Table({ data, headers, children, className }) {
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