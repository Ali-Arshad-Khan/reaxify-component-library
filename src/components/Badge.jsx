import '../App.css';
export default function Badge({children, type="square", color="blue"}) {
    return (
        <>
        <div className={`badge ${color} ${type}`}>
            <p>{children || 'Badge'}</p>
        </div>
        </>
    )
}