import { useMemo } from 'react';
import { createPortal } from 'react-dom';
import { node, object } from 'prop-types';

const Modal = ({ children, container }) => {
    const target = useMemo(
        () => {
            if (typeof window === 'undefined') {
                return null;
            } else {
                return container instanceof HTMLElement
                    ? container
                    : document.getElementById('root')
            }
        },
        [container]
    );

    return target ? createPortal(children, target) : null
};

export default Modal;

Modal.propTypes = {
    children: node,
    container: object
};
