import '../App.css';
export default function Tooltip({children, color="blue",  type="bold", heading, body}) {
   
    const boldColors = {
        blue: "#1E40AF",
        purple: "#A9229B",
        green: "#47AA5D",
        black: "#262626",
        white: "#FFFFFF"
    };

    const thinColors = {
        blue: "#E0E7FF",
        purple: "#FFF3FC",
        green: "#E7FFF3",
        black: "#F3F3F3",
        white: "#FAFAFA"
    };

    const boldTextColors = {
        blue : "#FFFFFF" ,
        black : "#FFFFFF" ,
        purple : "#FFFFFF" ,
        green : "#FFFFFF" ,
        white: "#111827" ,
    }

    const thinTextColors = {
        blue : "#1E40AF" ,
        black : "#FFFFFF" ,
        purple : "#A9229B" ,
        green : "#137A2A" ,
        white: "#111827" ,
    }

     const boldBodyColors = {
        blue : "#E8EDFF" ,
        black : "#C7C7C7" ,
        purple : "#FFE9FD" ,
        green : "#E3FFE9" ,
        white: "#6B7280" ,
    }

    const thinBodyColors = {
        blue : "#1C51B9" ,
        black : "#C7C7C7" ,
        purple : "#C7369E" ,
        green : "#3C8C4E" ,
        white: "#6B7280" ,
    }

    const boldIconColors = {
        blue : "#7EA6F2" ,
        black : "#C7C7C7" ,
        purple : "#F462E6" ,
        green : "#C1FFCF" ,
        white: "#6B7280" ,
    }

    const thinIconColors = {
        blue : "#1C51B9" ,
        black : "#C7C7C7" ,
        purple : "#C7369E" ,
        green : "#41A557" ,
        white: "#6B7280" ,
    }

    // Select the right color map based on type
    const colorMap = type === "bold" ? boldColors : thinColors;

    const colorMapText = type === "bold" ? boldTextColors : thinTextColors;

    const colorMapBody = type === "bold" ? boldBodyColors : thinBodyColors;

    const colorMapIcon = type === "bold" ? boldIconColors : thinIconColors;


    // Get the actual color code
    const colorClass2 = colorMap[color] || "";
    
    const textColor2 = colorMapText[color] || "";

    const bodyColor2 = colorMapBody[color] || "";

    const iconColor2 = colorMapIcon[color] || "";



    return (
        <>
        <div className="tooltip-wrapper">
        {children || <button>Hover me</button>}
        <div className="tooltip-text-wrapper" style={{ "--tooltip-bg": colorClass2,
          "--tooltip-textColor": textColor2,"--tooltip-bodyTextColor": bodyColor2}}>
            <div className="tooltip-icon-div">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 10V3C17 1.89543 16.1046 1 15 1H3C1.89543 1 1 1.89543 1 3V10M17 10V15C17 16.1046 16.1046 17 15 17H3C1.89543 17 1 16.1046 1 15V10M17 10H14.4142C14.149 10 13.8946 10.1054 13.7071 10.2929L11.2929 12.7071C11.1054 12.8946 10.851 13 10.5858 13H7.41421C7.149 13 6.89464 12.8946 6.70711 12.7071L4.29289 10.2929C4.10536 10.1054 3.851 10 3.58579 10H1" stroke={iconColor2 || '#7EA6F2'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            </div>
            <span className="tooltip-text">
                <p className="title">{heading || 'Archive notes'}</p>
                <p className="text">{body || 'Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.'}</p>
            </span>
            <div className="tooltip-arrow"></div>
        </div>
        </div>
        </>
    )
}