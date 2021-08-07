import styles from './Form.module.css'
export default function Form({ children, onSubmit }) {
	return <form data-testid="user-form" className={styles.form} onSubmit={onSubmit}>{children}</form>
}