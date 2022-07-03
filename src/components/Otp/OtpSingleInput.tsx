import React, { useEffect, useRef } from "react"

interface SingleOtpProps {
    isInvalid?: boolean;
    autoFocus?: boolean;
    value?: string
    type?: "text" | "password";
    isNum?: boolean;
    index?: number;
    focus?: boolean;
    onInput: (e: any) => void;
    separator: boolean;
    customSeparator?: string;
    onKeyDown: (e: any) => void;
    onFocus: (e: any) => void;
    onBlur: () => void;
    disabled?: boolean;
    onPaste: (e: any) => void
    autoComplete: 'off' | 'on'
}

const SingleOtpInput = ({
    isInvalid = false,
    value,
    type,
    isNum = false,
    focus = false,
    separator = false,
    customSeparator,
    onFocus,
    autoFocus,
    onInput,
    onKeyDown,
    onBlur,
    disabled,
    onPaste,
    autoComplete = 'off',
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
                autoComplete={autoComplete}
                maxLength={1}
                type={type}
                inputMode={isNum ? "numeric" : "text"}
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
