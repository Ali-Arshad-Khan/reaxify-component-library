import sucessIcon from "../assets/images/success.svg"
import warningIcon from "../assets/images/warning.svg"
import errorIcon from "../assets/images/error.svg"
import neutralIcon from "../assets/images/neutral.svg"
import '../App.css';
const bannerConfig = {
    success : {
        type : "green",
        icon : sucessIcon,
        Bannertitle : "Congratulations!",
    },
    warning : {
        type : "yellow",
        icon : warningIcon,
        Bannertitle : "Attention",
    },
    error : {
        type : "red",
        icon : errorIcon,
        Bannertitle : "There is a problem with your application",
    },
    neutral : {
        type : "blue",
        icon : neutralIcon,
        Bannertitle : "Update available",
    }
    
}

export default function Banner({children, status = "neutral", title}) {

    const {type,Bannertitle, icon} = bannerConfig[status] || bannerConfig.neutral
    
    return (
        <>
        <div className={`banner ${type} square`}>
            <div className="banner-left">
            <img src={icon} alt={`${status} icon`} className="icon" />
            </div>
            <div className="banner-right">
            <p>{title?title:Bannertitle}</p>
            {children && <p className={status}>{children}</p>}
            </div>
        </div>
        </>
    )
}