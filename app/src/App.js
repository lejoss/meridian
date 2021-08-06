import React from 'react'
import './App.css';
import { Table } from './components/table/Table'
import { useEmployees } from './app/hooks';

function App() {
  const { employees } = useEmployees()
  const [employeeInput, setEmployeeInput] = React.useState('')

  const employeeInputRef = React.useRef(null)

  React.useEffect(() => {
    employeeInputRef.current.focus()
  }, [])

  function handleGetEmployees() {

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

      <form>
        <label>
          Employee Id
          <input ref={employeeInputRef} value={employeeInput} onChange={handleOnChangeEmployeeInput} type="text" placeholder="type an employee id" />
        </label>
        <button onClick={handleGetEmployees}>GET EMPLOYEES</button>
      </form>

      {
        employees && (
          <Table data={employees} headers={['ID', 'NAME', 'CONTRACT', 'HOURLY RATE', 'MONTHLY RATE']}>
            {rows => (
              <>
                {rows && rows.map(({ id, name, contract_type, hourly_salary, monthly_salary }) => (
                  <tr style={{ cursor: 'pointer', color: 'gray' }} key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{contract_type}</td>
                    <td>{hourly_salary}</td>
                    <td>{monthly_salary}</td>
                  </tr>
                ))}
              </>
            )}
          </Table>
        )
      }
    </div>
  );
}

export default App;
