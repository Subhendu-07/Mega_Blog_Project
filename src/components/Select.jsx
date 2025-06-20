import { forwardRef, useId } from "react";

function Select({
    options,
    label,
    className='',
    ...props
},ref){
    const id = useId(); // To generate a unique id for the select element

    return (
        <div className="w-full">
            {label && <label htmlFor={id} className=""></label>}
            <select {...props}
            id={id}
            ref={ref}
            className={`${className} px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full`}>
                {options?.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default forwardRef(Select);