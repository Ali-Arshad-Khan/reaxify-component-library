import testimonialIcon from "../assets/images/testimonialIcon.svg"
import '../App.css';
export default function Testimonial({
    children, 
    image , 
    name, 
    company, 
    position,
    bgColor = '#1C51B9',
}) {
    return (
        <div className="pp">
        {image?
        <div className="testimonial" style={{backgroundColor:`${bgColor}`}}>
            <img src={image} alt="" className="testimonial-img" />
            <div className="right">
                <img src={testimonialIcon} alt="zz" className="testimonial-icon" />
                <p>{children || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.'}</p>
                <div className="footer">
                    <p><span>{name || "May Andersons"}</span><br /> {company || 'Workcation'}, {position || 'CTO'}</p>
                </div>
            </div>
        </div>
        :
         <div className="testimonialw">
           <h1>{company || 'Workcation'}</h1>
           <p>“{children || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.'}”</p>
            <div className="bottom">
                <p>{name || "May Andersons"} /<span> {company || 'Workcation'}, {position || 'CTO'}</span></p>
            </div>
            
        </div>
        }
        </div>
    )
}