# React Calculator
A simple calculator app built with React that supports basic arithmetic operations such as addition, subtraction, multiplication, division, and clearing the screen.

## Features
- **Addition**: Perform addition operations.
- **Subtraction**: Perform subtraction operations.
- **Multiplication**: Perform multiplication operations.
- **Division**: Perform division operations.
- **Clear**: Reset the calculator screen.
- **Equals**: Evaluate and display the result of the current operation.

## Tech Stack
- **React** (Frontend)
- **CSS** (Styling)

## How to Run the Project

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/react-calculator.git
    ```

2. Install dependencies:
    ```bash
    cd react-calculator
    npm install
    ```

3. Run the app:
    ```bash
    npm start
    ```

The app will run on `http://localhost:3000`.

## Code Structure

The code is split into small, reusable components:
- **Calculator.jsx**: The main component that holds the logic for performing calculations.
- **Button.jsx**: A reusable component for rendering calculator buttons.

### Example Usage

In the **Calculator.jsx** component, the main logic for handling button clicks and performing calculations is managed. Here’s a quick overview of how the calculator operations are handled:

```js
const handleClick = (value) => {
  if (value === '=') {
    // Evaluate the current expression
    setResult(eval(expression));
  } else if (value === 'C') {
    // Clear the screen
    setExpression('');
  } else {
    // Add the clicked value to the expression
    setExpression(expression + value);
  }
};
```

### Button Component

The `Button.jsx` component is responsible for rendering individual calculator buttons:

```js
const Button = ({ value, onClick }) => {
  return (
    <button onClick={() => onClick(value)}>{value}</button>
  );
};
```

## Running Tests

If you have written tests for your application, you can run them with:

```bash
npm test
```

## How to Host the Project

To host the project, you can use services like [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/). Follow the instructions on their respective websites for deploying a React application.

## Contributions

If you want to contribute to this project, feel free to fork the repository and submit a pull request. Please make sure your code follows the project's style guide and includes appropriate tests.



