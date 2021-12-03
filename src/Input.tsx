import React from "react";

interface IInputProps {
    value: string;
    onChange: (e:React.SyntheticEvent<HTMLInputElement>) => void;
}

export function Input({value, onChange}:IInputProps) {
    return <input type="text" placeholder="name" value={value} onChange={onChange}/>;
}

interface IChildren {
    children: JSX.Element[];
    onSubmit: (e:React.SyntheticEvent<HTMLFormElement>) => void;
}

export function Form({children, onSubmit}:IChildren) {
    return <form onSubmit={onSubmit}>{children}</form>
}

