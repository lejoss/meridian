import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../../App'

test('user can submit a valid form', () => {
	render(<App />)

	const inputValue = '1'

	const inputEl = screen.getByTestId(/user-input/i)
	const submitButtonEl = screen.getByTestId(/submit-button/i)
	let formEl = screen.getByTestId(/user-form/i)

	formEl.onsubmit = jest.fn();
	const onSubmit = formEl.onsubmit

	userEvent.type(inputEl, inputValue)
	expect(inputEl).toHaveValue(inputValue)

	userEvent.click(submitButtonEl)
	expect(onSubmit).toHaveBeenCalledTimes(1)
})