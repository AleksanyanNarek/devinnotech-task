import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { useCallback, useRef } from "react";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export const useDebounce = <T extends (...args: any[]) => void>(callback: T, delay: number) => {
    const timeoutId = useRef<NodeJS.Timeout | null>(null);

    const debouncedCallback = useCallback((...args: Parameters<T>) => {
        if (timeoutId.current) {
            clearTimeout(timeoutId.current);
        }

        timeoutId.current = setTimeout(() => {
            callback(...args);
        }, delay);
    }, [callback, delay]);

    return debouncedCallback;
};