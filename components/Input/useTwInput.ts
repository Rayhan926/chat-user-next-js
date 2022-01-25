import { useMemo } from "react";
import { UseTwInputProps } from "./Input.types";

export const useTwInput = (options = {} as UseTwInputProps): string => {

    const { varient = 'outlined', size = "medium", rounded = 'md' } = options

    const inputVarient = useMemo(() => varient === 'contained' ?
        'border-transparent focus:border-primary-500 bg-slate-50 focus:bg-white dark:bg-slate-600/20 focus:dark:bg-slate-800' :
        varient === 'standard' ?
            'border-0 border-b' :
            'bg-white border-slate-300 hover:border-slate-400 focus:border-primary-500 dark:focus:border-primary-500 dark:bg-slate-800 dark:hover:border-slate-500 dark:border-slate-600', [varient])


    const inputSize = useMemo(() =>
        size === 'extra_small' ?
            'px-2 py-1 text-[11px]' :
            size === 'small' ?
                'px-[10px] py-1.5 text-[12px]' :
                size === 'large' ?
                    'px-4 py-2.5 text-base' :
                    'px-3 py-2 text-[14px]', [size])

    const inputRounded = useMemo(() => {
        return rounded === 'sm' ?
            'rounded-sm' :
            (rounded === 'md' || rounded === true) ?
                'rounded-md' :
                rounded === 'lg' ?
                    'rounded-lg' :
                    rounded === 'full' ?
                        'rounded-full' :
                        '!rounded-none';
    }, [rounded])




    const inputClasses = `${inputVarient} ${inputSize} ${inputRounded} duration-200 ease-in-out font-medium focus:ring-1 ring-primary-100 dark:ring-primary-400 border outline-none inline-block disabled:opacity-50 disabled:pointer-events-none text-slate-700 dark:text-slate-300 placeholder:text-slate-400 w-full`

    return inputClasses;

}