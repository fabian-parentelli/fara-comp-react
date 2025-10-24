import './print.css';
import { Icons } from "../../Icons/Icons";
import { Tooltip } from "../Tooltips/Tooltips";

const Print = ({ color = 'gray', size = '30px', position = 'top', useRef, bodyClass }) => {

    const handlePrint = () => {
        
        if (!useRef?.current) {
            window.print();
            return;
        };

        const originalContent = document.body.innerHTML;
        document.body.innerHTML = `<div class="${bodyClass || ''}">${useRef.current.outerHTML}</div>`;
        window.print();
        document.body.innerHTML = originalContent;
        window.location.reload();
    };

    return (
        <div className='print' onClick={handlePrint}>
            <Tooltip text='Imprimir' backgroundColor={color} position={position} cursor={'pointer'}>
                <Icons type="print" color={color} size={size} />
            </Tooltip>
        </div>
    );
};

export { Print };