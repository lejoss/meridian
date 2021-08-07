import React from 'react'
import NumberFormat from 'react-number-format';
import './App.css';
import {
  AlertMessage,
  Button,
  Form,
  Table,
  Title,
  UserInput
 } from './components'
import { useEmployees, useForm, useTable } from './app/hooks';

function App() {
  const { employees } = useEmployees()
  const { employeeInput, setEmployeeInput, employeeInputRef } = useForm()
  const { tableData, setTableData, tableMessage, setTableMessage } = useTable()
  
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
      
      <Title>meridian test</Title>

      <Form onSubmit={handleOnSubmit}>
        <UserInput ref={employeeInputRef} value={employeeInput} onChange={handleOnChangeEmployeeInput} placeholder="type an employee id" />
        <Button>get employees</Button>
      </Form>

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
                    <td><NumberFormat value={hourly_salary} displayType={'text'} thousandSeparator={true} prefix={'$'} /></td>
                    <td><NumberFormat value={monthly_salary} displayType={'text'} thousandSeparator={true} prefix={'$'} /></td>
                    <td><NumberFormat value={annual_salary} displayType={'text'} thousandSeparator={true} prefix={'$'} /></td>
                  </tr>
                ))}
              </>
            )}
          </Table>
        )
        : <AlertMessage>{tableMessage}</AlertMessage>
      }
    </div>
  );
}

export default App;
