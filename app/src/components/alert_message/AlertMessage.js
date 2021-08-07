import styles from './AlertMessage.module.css'
export default function AlertMessage({ children, variant }) {
	return (
		<>
			{children && <h2 className={styles.alert__message}>{children}</h2>}
		</>
	)
}