import React, { FC, ChangeEvent } from 'react';

interface Step2Props {
  nextStep: () => void;
  prevStep: () => void;
}

const Step2: FC<Step2Props> = ({ nextStep, prevStep }) => {
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    // Handle file change
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission
    // If successful, call nextStep()
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="border-2 border-dashed border-gray-500 p-4">
        <input type="file" onChange={handleFileChange} />
      </div>
      <div className="border-2 border-dashed border-gray-500 p-4 mt-4">
        <input type="file" onChange={handleFileChange} />
      </div>
      <textarea className="mt-4" placeholder="Bio"></textarea>
      <button type="button" onClick={prevStep}>Back</button>
      <input type="submit" value="Next" />
    </form>
  );
};

export default Step2;