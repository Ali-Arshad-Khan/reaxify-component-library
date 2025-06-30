import toastSuccess from "../assets/images/toastSuccess.svg"
import warningToast from "../assets/images/warningToast.svg"
import informationToast from "../assets/images/infoToast.svg"
import errorToast from "../assets/images/errorToast.svg"
import ReactDOM from 'react-dom';
import '../App.css';
    const tostType = {
        success: {
            bgColor : '#ECFDF5',
            headingColor : '#065F46',
            textColor : '#047857',
            icon : `${toastSuccess}`,
            headingText : 'Success',
            bodyText : 'Your work has been saved'
        },
        warning: {
            bgColor : '#FFFBEB',
            headingColor : '#92400E',
            textColor : '#B45309',
            icon : `${warningToast}`,
            headingText : 'Warning',
            bodyText : 'A network error was detected'
        },
        information: {
            bgColor : '#EFF6FF',
            headingColor : '#1E40AF',
            textColor : '#1C51B9',
            icon : `${informationToast}`,
            headingText : 'Information',
            bodyText : 'Please read updated information'
        },
        error: {
            bgColor : '#FEF2F2',
            headingColor : '#92400E',
            textColor : '#B45309',
            icon : `${errorToast}`,
            headingText : 'Error',
            bodyText : 'Please re-save your work again'
        }
    }

export default function Toastpopup({type='success', heading, body}) {

   const {bgColor, headingColor, textColor, icon, headingText, bodyText} = tostType[type]
    return ReactDOM.createPortal(
        <div className="toast-popup-container">
         <div className="tostpopup" style={{backgroundColor:`${bgColor}`}}>
            <div className="toastpopup-left">
                <img src={icon} alt="" className="icon"/>
            </div>
            <div className="toastpopup-right">
                <p className="top-text" style={{color:`${headingColor}`}}>{heading || headingText}</p>
                <p className="bottom-text" style={{color:`${textColor}`}}>{body || bodyText}</p>
            </div>
        </div>
        </div>,
       
        document.getElementById('toast-root')
    )
}