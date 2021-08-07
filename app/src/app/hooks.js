import React from 'react'
import Axios from 'axios'

function useEmployees() {
	const [employees, setEmployees] = React.useState(undefined)

	const apiUrl = 'https://610d315c48beae001747b746.mockapi.io/employees'

	function buildEmployee(employee) {
		let annual_salary
		if (employee.hourly_salary) {
			annual_salary = 120 * parseInt(employee.hourly_salary) * 12
		} else if (employee.monthly_salary) {
			annual_salary = parseInt(employee.monthly_salary) * 12
		}
		
		return { ...employee, annual_salary }
	}

	const fetchEmployees = React.useCallback(async () => {
		try {
			const { data } = await Axios.get(apiUrl)
			const dataWithAnnualSalary = data && data.length && data.map(e => buildEmployee(e))

			setEmployees(dataWithAnnualSalary)
		} catch (error) {
			// throw new Error(error)
		}
	}, [])

	React.useEffect(() => {
		fetchEmployees()
	}, [fetchEmployees])

	return { employees }
}

function useTable() {
	const [tableData, setTableData] = React.useState(null)
  const [tableMessage, setTableMessage] = React.useState('')

	return { tableData, setTableData, tableMessage, setTableMessage }
}

function useForm() {
	const [employeeInput, setEmployeeInput] = React.useState('')
	const employeeInputRef = React.useRef(null)

	React.useEffect(() => {
    employeeInputRef.current.focus()
	}, [])
	
	return { 
		employeeInput,
		setEmployeeInput,
		employeeInputRef
	}
}

export {
	useEmployees,
	useForm,
	useTable,
}