import '../App.css';
export default function Loading({loaderBgColor = '#444' , loaderColor = 'blue', loaderTextColor ='#aaa', loaderText='Loading'}) {
    return (
        <div class="loader-wrapper" style={{'--loaderBgColor':loaderBgColor,'--loaderTextColor':loaderTextColor,'--loaderColor':loaderColor}}>
        <div class="spinner"></div>
        <p class="loading-text">{`${loaderText}...`}</p>
        </div>
    )
}