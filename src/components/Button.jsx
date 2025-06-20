// This file is a simple button component that can be used in the project.

// A separate Button component is created to make the code more readable and reusable.
function Button({
    children,
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    className = '',
    ...props
}){

    return(
        <button className={`px-4 py-2 rounded-lg ${className} ${bgColor} ${textColor}`} {...props}>
            {children}
        </button>
    )
}


export default Button;