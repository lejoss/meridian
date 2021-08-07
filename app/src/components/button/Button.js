import styles from './Button.module.css'
export default function Button({ children }) {
	return <button data-testid='submit-button' className={styles.submit__button} type="submit">{children}</button>
}