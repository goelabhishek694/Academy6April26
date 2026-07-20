import {useState, useCallback} from 'react';

function useVisibility(initialValue = false) {
    const [isVisible, setIsVisible] = useState(initialValue);

    const show = useCallback(() => {
        setIsVisible(true);
    }, []);

    const hide = useCallback(() => {
        setIsVisible(false);
    }, []);

    const toggle = useCallback(() => {
        setIsVisible((prev) => !prev)
    }, []);

    return {isVisible, show, hide, toggle};

}

export default useVisibility;

