import styles from './Title.module.css'
export default function Title({ children }) {
	return <h1 className={styles.h1}>{children}</h1>
}