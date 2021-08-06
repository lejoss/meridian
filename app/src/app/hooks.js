import React from 'react'
import Axios from 'axios'

const apiUrl = 'https://610d315c48beae001747b746.mockapi.io/employees'

function useEmployees() {
	const [employees, setEmployees] = React.useState(undefined)
	
	async function fetchEmployees() {
		try {
			const { data } = await Axios.get(apiUrl)
			setEmployees(data)
		} catch (error) {
			throw new Error(error)
		}
	}

	React.useEffect(() => {
		fetchEmployees()
	}, [])

	return { employees }
}

export {
	useEmployees
}