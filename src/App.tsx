import React, { FC, useState } from "react";

const messages: string[] = [
  "Learn React",
  "Apply for jobs",
  "Invest your new income",
];

const App: FC = () => {
  const [step, setStep] = useState<number>(1);
  const [isOpen, setIsOpen] = useState<boolean>(true);

  function handleNext(e: React.FormEvent) {
    e.preventDefault();
    if (step < 3) setStep((prevStep) => prevStep + 1);
  }

  function handlePrevious(e: React.FormEvent) {
    e.preventDefault();
    if (step > 1) setStep((prevStep) => prevStep - 1);
  }

  function handleClose() {
    setIsOpen((prev) => !prev);
  }

  return (
    <>
      <button className="close" onClick={handleClose}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
