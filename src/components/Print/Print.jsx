import './print.css';
import { Icons } from "../../Icons/Icons";
import { Tooltip } from "../Tooltips/Tooltips";

const Print = ({ color = 'gray', size = '30px', position = 'top', printRef: refProp, useRef: useRefAlias, bodyClass, title = 'Imprimir' }) => {

    const handlePrint = () => {

        const targetRef = refProp ?? useRefAlias;
        const content = targetRef?.current?.outerHTML;

        if (!content) {
            window.print();
            return;
        };

        const printWindow = window.open('', '_blank', 'width=900,height=700');

        if (!printWindow) {
            window.print();
            return;
        };

        const styles = Array.from(
            document.querySelectorAll('link[rel="stylesheet"], style')
        ).map((tag) => tag.outerHTML).join('');

        printWindow.document.open();
        printWindow.document.write(
            `<!DOCTYPE html>
            <html>
                <head>
                    <title>${title}</title>
                    ${styles}
                </head>
                <body>
                    <div class="${bodyClass || ''}">${content}</div>
                </body>
            </html>`
        );
        printWindow.document.close();
        printWindow.focus();
        printWindow.onafterprint = () => printWindow.close();
        printWindow.print();
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