import React, { useEffect, useState } from 'react';

//components
import OtpSingleOtpInput from './OtpSingleInput';

interface OtpProps {
  autoFocus?: boolean;
  invalid?: boolean;
  isSecure?: boolean;
  isNum?: boolean;
  numOfFields?: number;
  onChange?: (e: any) => void;
  separator?: string[];
  customSeparator?: string;
  disabled?: boolean;
  type?: "text" | "password";
  defaultValue?: string,
  testId?: string
}

//Constants
//KeyCodes
const BACKSPACE = 8;
const LEFT_ARROW = 37;
const RIGHT_ARROW = 39;
const DELETE = 46;
const SPACEBAR = 32;

//Fields
const MAX_NUM_FIELDS = 12;
const MIN_NUM_FIELDS = 2;
const DEFAULT_FIELDS = 4;

const Otp = ({ invalid,
  isSecure,
  isNum = false,
  numOfFields = DEFAULT_FIELDS,
  onChange = () => { },
  separator = [],
  customSeparator,
  autoFocus = false,
  disabled = false,
  type = 'text',
  defaultValue,
  testId = 'otp-test-id',
  ...props }: OtpProps) => {
  //States
  const [activeInput, setActiveInput] = useState(0);
  const [value, setValue] = useState(
    defaultValue ? defaultValue.split("") : []
  );

  useEffect(() => {
    defaultValue ? setValue(defaultValue.split("")) : []
  }, [defaultValue])

  //Validation
  //isInputValueValid - if expected input is number to strip all strings and accepts only numbers else accept string
  const isInputValueValid = (value: any) => {
    const isTypeValid = isNum
      ? !isNaN(parseInt(value, 10))
      : typeof value === "string";
    return isTypeValid && value.trim().length === 1;
  };

  //Validation if passed value is number whether data is string or int
  const IsNumeric = (value: any) => {
    return !isNaN(parseFloat(value)) && isFinite(value);
  };
  //max number of fields is set to 12
  const num = IsNumeric(numOfFields)
    ? numOfFields > MAX_NUM_FIELDS
      ? MAX_NUM_FIELDS
      : numOfFields < MIN_NUM_FIELDS
        ? MIN_NUM_FIELDS
        : numOfFields
    : DEFAULT_FIELDS;

  // Focus on next input
  const focusNextInput = (inputIndex: any) => {
    setActiveInput(inputIndex + 1);
  };

  // Focus on previous input
  const focusPrevInput = (inputIndex: any) => {
    setActiveInput(inputIndex - 1);
  };

  //Handlers
  //Input change handler
  const handleOnInput = (e: any, index: number) => {
    let stateValues = [...value];
    const inputValue = e.target.value;

    if (isInputValueValid(inputValue)) {
      stateValues[index] = inputValue;
      setValue(stateValues);
      focusNextInput(index);
    } else {
      if (!isNum) {
        const { nativeEvent } = e;

        if (
          nativeEvent.data === null &&
          nativeEvent.inputType === "deleteContentBackward"
        ) {
          e.preventDefault();
          focusPrevInput(activeInput);
        }
      }
    }
    handleOnChange(stateValues);
  };

  //Handeling callback onchange method
  const handleOnChange = (value: any) => {
    onChange(value.join(""));
  };

  // Handeling on paste
  const handleOnPaste = (e: any) => {
    //storing clipboard words into an array
    e.preventDefault();
    let pastedVal = e.clipboardData.getData("Text");
    const pastedValLength = pastedVal.length;
    pastedVal = pastedVal.split(" ").map((pastedVal: string) => pastedVal.split(""));

    let newValue = [];
    for (let index = 0; index < num; index++) {
      newValue[index] = pastedVal[0][index];
    }
    setValue(newValue);
    handleOnChange(newValue);
    setActiveInput(
      pastedValLength >= numOfFields ? numOfFields - 1 : pastedValLength
    );
  };

  // Handle cases of backspace, delete, left arrow, right arrow, space
  const handleOnKeyDown = (e: any) => {
    if (e.keyCode === BACKSPACE || e.key === "Backspace") {
      e.preventDefault();
      let oldVal = [...value];
      oldVal[activeInput >= numOfFields ? numOfFields - 1 : activeInput] = "";
      setValue(oldVal);
      focusPrevInput(activeInput);
      handleOnChange(oldVal);
    } else if (e.keyCode === DELETE || e.key === "Delete") {
      e.preventDefault();
    } else if (e.keyCode === LEFT_ARROW || e.key === "ArrowLeft") {
      e.preventDefault();
      activeInput > 0 && focusPrevInput(activeInput);
    } else if (e.keyCode === RIGHT_ARROW || e.key === "ArrowRight") {
      e.preventDefault();
      activeInput + 1 < numOfFields && focusNextInput(activeInput);
    } else if (
      e.keyCode === SPACEBAR ||
      e.key === " " ||
      e.key === "Spacebar" ||
      e.key === "Space"
    ) {
      e.preventDefault();
    }
  };

  //renderer method taking in number of fields and passing props to each field with an index number as a reference
  const renderInputs = () => {
    //storing fields into array
    const inputs = [];

    for (let index: any = 0; index < num; index++) {
      let isSep =
        Array.isArray(separator) && separator
          ? separator.includes(index)
          : false;

      inputs.push(
        <OtpSingleOtpInput
          key={index}
          index={index}
          focus={activeInput === index}
          isNum={isNum}
          value={value[index]}
          onInput={(e: any) => handleOnInput(e, index)}
          separator={isSep}
          customSeparator={customSeparator}
          autoFocus={autoFocus}
          onKeyDown={handleOnKeyDown}
          onFocus={(e: any) => {
            setActiveInput(index);
            e.target.select();
          }}
          autoComplete="off"
          onBlur={() => setActiveInput(index)}
          disabled={disabled}
          type={type}
          onPaste={handleOnPaste}
          {...props}
        />
      );
    }

    return inputs;
  };

  return <div data-testid={testId}>{renderInputs()}</div>;
}

export default Otp