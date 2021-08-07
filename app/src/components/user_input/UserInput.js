import React from 'react'
import styles from './UserInput.module.css'

const UserInput = React.forwardRef((props, ref) => (
	<label className={styles.label}>
		Employee ID
			<input data-testid="user-input" className={styles.user__input} ref={ref} {...props} />
	</label>
))

export default UserInput