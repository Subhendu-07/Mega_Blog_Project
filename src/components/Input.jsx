// forwardRef is a hook used for passing the ref to the child component. It is used to pass the ref to the input element in the Input component.
import { forwardRef, useId } from "react";

// Wrap the function with forwardRef to pass the ref to the Input element
const Input = forwardRef(function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref) {
    const id = useId();  // To generate a unique id for the input element
    
    return (
        <div className="w-full">
            {label && <label
                className="inline-block mb-1 pl-1"
                htmlFor={id}>
                {label}
            </label>}

            <input type={type}
                className={`${className} px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full`}
                ref={ref}
                {...props}
                id={id}
            />
        </div>
    )
})

export default Input;