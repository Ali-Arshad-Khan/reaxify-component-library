import '../App.css';
export default function Card({
    children, 
    icon, 
    backgroundColor = 'blue', 
    title
}) {
    return (
        <div className="card">
            <img src={icon} alt="" className="card-icon" style={{backgroundColor:`${backgroundColor}`}}/>
            <div className="card-bottom">
            <h1>
                {title || 'Easy Deployment'}
            </h1>
            <p>
                {children || 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.'}
            </p>
            </div>
        </div>
    )
}