import styles from './AlertMessage.module.css'
export default function AlertMessage({ children, variant }) {
	return <h1 className={styles.alert__message}>{children}</h1>
}