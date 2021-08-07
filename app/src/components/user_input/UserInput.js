import React from 'react'

import styles from './UserInput.module.css'
const UserInput = React.forwardRef((props, ref) => (
	<label>
		Employee ID
		<input style={styles.user__input} ref={ref} {...props} />
	</label>
))

export default UserInput