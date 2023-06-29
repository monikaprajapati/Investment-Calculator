import * as React from "react";
import styles from './InvestmentForm.module.css';

type InvestmentFormProps = {
  submitHandler: Function;
};

const INITIAL_INVESTMENT_DATA = {
  'current-savings': "",
  'yearly-contribution': "",
  'expected-return': "",
  duration: "",
}

const InvestmentForm: React.FC<InvestmentFormProps> = (
  props: InvestmentFormProps
) => {
  const [userInput, setUserInput] = React.useState(INITIAL_INVESTMENT_DATA);
  
  const submitHandler = (event: any) => {
    props.submitHandler(userInput);
    event.preventDefault();
  }
  const changeHandler = (source: string, value: string) => {
      setUserInput((prevState) => {
        return { ...prevState, [source]: value };
      });
  }
  function resetHandler(event: any) {
    setUserInput(INITIAL_INVESTMENT_DATA);
  }

  return (
    <>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles["input-group"]}>
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              type="number"
              id="current-savings"
              value={userInput['current-savings']}
              onChange={(event) => changeHandler("current-savings", event.target.value)}
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              type="number"
              id="yearly-contribution"
              value={userInput['yearly-contribution']}
              onChange={(event) => changeHandler("yearly-contribution", event.target.value)}
            />
          </p>
        </div>
        <div className={styles["input-group"]}>
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input
              type="number"
              id="expected-return"
              value={userInput['expected-return']}
              onChange={(event) => changeHandler("expected-return", event.target.value)}
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              type="number"
              id="duration"
              value={userInput.duration}
              onChange={(event) => changeHandler("duration", event.target.value)}
            />
          </p>
        </div>
        <p className={styles.actions}>
          <button type="reset" className={styles.buttonAlt} onClick={resetHandler}>
            Reset
          </button>
          <button type="submit" className={styles.button}>
            Calculate
          </button>
        </p>
      </form>
    </>
  );
};

export default InvestmentForm;
