import React from 'react'

const InputFeild = ({
    label = '',
    name = '',
    type = 'text',
    className = '',
    isRequired = false,
    placeholder = '' }) => {

    return (
        <div className='w-1/2'>
            <label for={name} className='block  text-sm font-medium'>{label}</label>
            <input type={type} id={name} className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${className}`}
                placeholder={placeholder} required={isRequired} />
        </div>
    )
}

export default InputFeild