import React, { useEffect } from 'react';
import { CheckboxTypes } from './Checkbox.types';

function Checkbox(ownerState, ref) {
    const {
        className = '',
        size,
        indeterminate,
        icon,
        checkedIcon,
        indeterminateIcon,
        label,
        type = 'checkbox',
        ...props
    } = ownerState;

    const defaultRef = React.useRef();
    const resolvedRef = ref || defaultRef;

    useEffect(() => {
        resolvedRef.current.indeterminate = indeterminate;
    }, [indeterminate]);

    const checkboxSize =
        size === 'extra_small'
            ? {
                  size: 'w-3 h-3 rounded-[2px]',
                  fontSize: 'text-[12px]',
              }
            : size === 'small'
            ? {
                  size: 'w-[14px] h-[14px] rounded-[2px]',
                  fontSize: 'text-[13px]',
              }
            : size === 'large'
            ? {
                  size: 'w-5 h-5 rounded-[4px]',
                  fontSize: 'text-[16px]',
              }
            : {
                  size: 'w-4 h-4 rounded-[3px]',
                  fontSize: 'text-[14px]',
              };

    const checkboxCommonClasses = `${checkboxSize.size} ${className} ring-primary-200 dark:ring-primary-400 peer-focus:ring-1 peer-focus:border-primary-500 overflow-hidden peer-disabled:opacity-40 peer-disabled:pointer-events-none
    border-[1.5px] peer-checked:border-0 peer-indeterminate:border-0 border-slate-300 peer-hover:border-slate-400`;

    return (
        <label
            className={`flex items-center gap-2 cursor-pointer w-max ${
                props.disabled ? 'opacity-40 pointer-events-none' : ''
            }`}
        >
            <div>
                <input
                    ref={resolvedRef}
                    type={'checkbox'}
                    className='peer sr-only _tw_checkbox'
                    {...props}
                />
                <div className={checkboxCommonClasses}>
                    <div
                        className={`default ${
                            !icon
                                ? `peer-disabled:peer-hover:border-slate-300`
                                : 'peer-focus:scale-105'
                        }`}
                    >
                        {icon}
                    </div>

                    <div className={`checked ${!checkedIcon ? `bg-primary-500 px-[3px]` : ''}`}>
                        {checkedIcon || (
                            <svg
                                stroke='#fff'
                                fill='#fff'
                                strokeWidth='1.5'
                                viewBox='0 0 16 16'
                                height='100%'
                                width='100%'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path d='M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z'></path>
                            </svg>
                        )}
                    </div>

                    <div
                        className={`indeterminate ${
                            !indeterminateIcon ? `bg-primary-500 px-0.5` : ''
                        }`}
                    >
                        {indeterminateIcon || (
                            <svg
                                stroke='#fff'
                                fill='none'
                                strokeWidth='3'
                                viewBox='0 0 24 24'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                height='100%'
                                width='100%'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <line x1='5' y1='12' x2='19' y2='12'></line>
                            </svg>
                        )}
                    </div>
                </div>
            </div>
            {label && (
                <span
                    className={`text-slate-600 font-medium dark:text-slate-200 ${checkboxSize.fontSize}`}
                >
                    {label}
                </span>
            )}
        </label>
    );
}

export default React.forwardRef<HTMLInputElement, CheckboxTypes>(Checkbox);
