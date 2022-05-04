import React from 'react'

export function useOnMount(onMount: () => any) {
    return React.useEffect(() => {
        if (onMount) {
            onMount()
        }
    }, [])
}

export function useOnUnmount(onUnmount: () => any) {
    return React.useEffect(() => {
        return () => onUnmount && onUnmount()
    }, [])
}