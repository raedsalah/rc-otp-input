import React, { useEffect, useRef } from "react";

const inputTypeNames = ['password', 'text'] as const;

interface SingleOtpProps {
    isInvalid: boolean;
    autoFocus: boolean;
    value: string
    type: "passowrd" | "text";
    isNum: boolean;
    index: number;
    focus: boolean;
    onChange: () => void;
    onInput: () => void;
    separator: boolean;
    customSeparator: string;
    onKeyDown: () => void;
    onFocus: () => void;
    onBlur: () => void;
    disabled: boolean;
    onPaste: () => void
}

const SingleOtpInput = ({
    isInvalid = false,
    value,
    type,
    isNum = false,
    focus = false,
    onChange,
    separator = false,
    customSeparator,
    onFocus,
    autoFocus,
    onInput,
    onKeyDown,
    onBlur,
    disabled,
    onPaste,
    ...props
}: SingleOtpProps) => {
    //input ref
    const textInput = useRef<HTMLInputElement>(null);

    useEffect(() => {
        //Parent state (ActiveInputs) controls the focus prop.
        focus && textInput?.current?.focus();
    }, [focus]);

    return (
        <>
            <input
                value={value ? value : ""}
                autoComplete="off"
                maxLength={1}
                type={type}
                inputMode={isNum ? "numeric" : "text"}
                onChange={onChange}
                onInput={onInput}
                onFocus={onFocus}
                autoFocus={autoFocus}
                onKeyDown={onKeyDown}
                onBlur={onBlur}
                ref={textInput}
                disabled={disabled}
                onPaste={onPaste}
                {...props}
            />
            {separator && customSeparator && customSeparator}
        </>
    );
};

export default SingleOtpInput;
