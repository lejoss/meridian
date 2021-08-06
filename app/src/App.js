import React from 'react'
import './App.css';
import { Table } from './components/table/Table'
import { useEmployees } from './app/hooks';

function App() {
  const { employees } = useEmployees()
  const [employeeInput, setEmployeeInput] = React.useState('')
  const [tableData, setTableData] = React.useState(null)
  const [tableMessage, setTableMessage] = React.useState('')

  const employeeInputRef = React.useRef(null)

  React.useEffect(() => {
    employeeInputRef.current.focus()
  }, [])

  function handleOnSubmit(event) {
    event.preventDefault()
    if (employeeInput !== '') {
      handleGetEmployeeById(employeeInput)
    } else {
      handleGetEmployees()
    }
  }

  function handleGetEmployees() {
    setTableData(employees)
  }

  function handleGetEmployeeById(employeeId) {
    const employee = employees.filter(e => e.id === employeeId)
    if (!employee.length) {
      setTableMessage('employee not found')
      setTableData(null)
      setEmployeeInput('')
      employeeInputRef.current.focus()
    } else {
      setTableData(employee)
    }
  }

  function handleOnChangeEmployeeInput(event) {
    const { value } = event.target
    setEmployeeInput(value)
  }

  return (
    <div className="App">
      <h2>
        meridian test
      </h2>

      <form onSubmit={handleOnSubmit}>
        <label>
          Employee Id
          <input ref={employeeInputRef} value={employeeInput} onChange={handleOnChangeEmployeeInput} type="text" placeholder="type an employee id" />
        </label>
        <button type="submit" >GET EMPLOYEES</button>
      </form>

      {tableData
        ? (
          <Table data={tableData} headers={['ID', 'NAME', 'CONTRACT', 'HOURLY SALARY', 'MONTHLY SALARY', 'ANNUAL SALARIES']}>
            {rows => (
              <>
                {rows && rows.length && rows.map(({ id, name, contract_type, hourly_salary, monthly_salary, annual_salary }) => (
                  <tr style={{ cursor: 'pointer', color: 'gray' }} key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{contract_type}</td>
                    <td>{hourly_salary}</td>
                    <td>{monthly_salary}</td>
                    <td>{annual_salary}</td>
                  </tr>
                ))}
              </>
            )}
          </Table>
        )
        : <h3>{tableMessage}</h3>
      }
    </div>
  );
}

export default App;
