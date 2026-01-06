import './downpdf.css';
import { Icons } from "../../Icons/Icons";
import { Tooltip } from "../Tooltips/Tooltips";

const Downpdf = ({ url, position = 'top', color = '#B71C1C' }) => {

    const handleDownload = async () => {
        const link = document.createElement("a");
        link.href = url;
        link.download = "ticket.pdf";
        link.target = "_blank";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <Tooltip text="Descargar pdf" position={position} backgroundColor={color}>
            <div className="downpdf" onClick={handleDownload}>
                <Icons type='pdf' color={color} />
            </div>
        </Tooltip>
    );
};

export { Downpdf };