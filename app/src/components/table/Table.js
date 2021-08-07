import styles from './Table.module.css'
export default function Table({ data, headers, children, className }) {
	return (
		<div className={styles.table__container}>
			<table className={styles.table}>
				<thead>
					<tr>
						{headers && headers.map((h, i) => <th className={styles.th} key={i}>{h}</th>)}
					</tr>
				</thead>
				<tbody>
					{children(data)}
				</tbody>
			</table>
		</div>
	)
}