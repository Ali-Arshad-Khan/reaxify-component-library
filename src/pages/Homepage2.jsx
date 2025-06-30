import '../styles/Homepage.css'
import reactIcon from '../assets/react.svg'
import cardIcon from "../assets/images/cardIcon.svg"
import { useState, useRef, useEffect } from 'react';
import Badge from '../components/Badge';
import Banner from '../components/Banner';
import Card from '../components/Card';
import Testimonial from '../components/Testimonial';
import Tooltip from '../components/Tooltip';
import Showcase from './Showcase';
import Toastpopup from '../components/Toastpopup';
import Loading from '../components/Loading';

export default function Homepage2() {

  const homeRightRef = useRef(null);
     
  const refs = {
    Badge: useRef(null),
    Banner: useRef(null),
    Testimonial: useRef(null),
    Tooltip: useRef(null),
    ToastPopup: useRef(null),
    Loading: useRef(null),
    Card: useRef(null)
  };

  const [activeIndex, setActiveIndex] = useState(null);
    // const [showCode, setShowCode] = useState(false)

  const scrollToSection = (ref, index) => {
    setActiveIndex(index);
    if (ref.current && homeRightRef.current) {
      const topOffset = ref.current.offsetTop;
      const offsetAdjustment = 80; // 👈 try 30–80 depending on heading height
      homeRightRef.current.scrollTo({
        top: topOffset - offsetAdjustment,
        behavior: 'smooth',
      });
    }
  };

  const [show, setShow] = useState(false)
  const [load, setLoad] = useState(false)

  const timeoutRef = useRef(null)
  const loadRef = useRef(null)
    
  function showToast() {
    if(timeoutRef.current){
      clearTimeout(timeoutRef.current)
    }
      setShow(true)
    timeoutRef.current = setTimeout(() => {
      setShow(false)
      timeoutRef.current = null;
    }, 3000)
  }
    
  function loadScreen() {
    if(loadRef.current){
        clearTimeout(loadRef.current)
    }
    setLoad(true)
    loadRef.current = setTimeout(() => {
        setLoad(false)
        loadRef.current = null;
    }, 5000)
  }

  const badgeCode = `<Badge type="square">React</Badge>
<Badge color="green" type="pill">Badge</Badge>
<Badge color="purple" type="square">Badge</Badge>
<Badge color="pink" type="pill">Badge</Badge>
<Badge color="blue" type="pill">CSS</Badge>
<Badge color="red" type="square">Figma</Badge>
<Badge color="yellow" type="square">JavaScript</Badge>
<Badge color="indigo" type="pill">Badge</Badge>`;

const badgeList = (
    <>
      <Badge type="square">React</Badge>
      <Badge color="green" type="pill">Badge</Badge>
      <Badge color="purple" type="square">Badge</Badge>
      <Badge color="pink" type="pill">Badge</Badge>
      <Badge color="blue" type="pill">CSS</Badge>
      <Badge color="red" type="square">Figma</Badge>
      <Badge color="yellow" type="square">JavaScript</Badge>
      <Badge color="indigo" type="pill">Badge</Badge>
    </>
  );

  const bannerCode = `<Banner status="success">Success message</Banner>
<Banner status="warning">Warning message</Banner>
<Banner status="error">Error message</Banner>`;

  const bannerList = (
    <>
      <Banner status="success">Success message</Banner>
      <Banner status="warning">Warning message</Banner>
      <Banner status="error">Error message</Banner>
    </>
  );

   const cardCode = `<Card icon = {reactIcon} title = 'Reusable' backgroundColor = 'pink'>
    Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. 
    Et magna sit morbi lobortis.
</Card>
<Card icon = {cardIcon}>
    Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. 
    Et magna sit morbi lobortis.
</Card>`;

    const cardList = (
    <>
      <Card icon = {reactIcon} title = 'Reusable' backgroundColor = 'pink'>
          Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
        </Card>
        <Card icon = {cardIcon}>
          Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
        </Card>
    </>
  );
 
    const testimonialCode = 
`<Testimonial name="May Andersons" company="Workcation" position="CTO">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Sed urna nulla vitae laoreet augue. 
    Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. 
</Testimonial>
<Testimonial company='Explorist' name='Ali Arshad Khan' position='CEO'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Sed urna nulla vitae laoreet augue. 
    Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. 
</Testimonial>`;
      
    const testimonialList = (
       <>
       <Testimonial name="May Andersons" company="Workcation" position="CTO">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Sed urna nulla vitae laoreet augue. 
        Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. 
    </Testimonial>

    <Testimonial company='Explorist' name='Ali Arshad Khan' position='CEO'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Sed urna nulla vitae laoreet augue. 
        Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. 
    </Testimonial>
       </>
    )   

    const tooltipCode = `<Tooltip 
color='blue' heading='This is real man' 
body='Things are getting serious — watch out. 
Our world is moving closer to World War III every day.'>
    <Badge color='blue'> 
        Hoverme Blue Bold
    </Badge>
</Tooltip>
<Tooltip color='blue' type='light'>
    <Badge color='blue'> 
        Hoverme Blue Light
    </Badge>
</Tooltip>
<Tooltip color='green' type='bold'>
    <Badge color='green' > 
        Hoverme Green Bold
    </Badge>
</Tooltip>
<Tooltip color='green' type='light'>
    <Badge color='green' > 
        Hoverme Green Light
    </Badge>
</Tooltip>
<Tooltip></Tooltip>
    `
      const tooltipList = (
        <>
        <Tooltip color='blue' heading='This is real man' body='Things are getting serious — watch out. Our world is moving closer to World War III every day.'>
            <Badge color='blue'> 
              Hoverme Blue Bold
            </Badge>
          </Tooltip>
          <Tooltip color='blue' type='light'>
            <Badge color='blue'> 
              Hoverme Blue Light
            </Badge>
          </Tooltip>
          <Tooltip color='green' type='bold'>
            <Badge color='green' > 
              Hoverme Green Bold
            </Badge>
          </Tooltip>
          <Tooltip color='green' type='light'>
            <Badge color='green' > 
              Hoverme Green Light
            </Badge>
          </Tooltip>
          <Tooltip></Tooltip>
        </>
    )

    const toastpopupCode = 
`const [show, setShow] = useState(false)
const timeoutRef = useRef(null)
function showToast() {
    if(timeoutRef.current){
        clearTimeout(timeoutRef.current)
    }
    setShow(true)
    timeoutRef.current = setTimeout(() => {
        setShow(false)
        timeoutRef.current = null;
    }, 3000)
}
return (    
<div className='tostPopContainer'>
    <button onClick={showToast}>Show me</button>
    {show && <Toastpopup type='success'></Toastpopup>}
</div>
)
    `
    const toastpopupList = (
        <>
        <div className='tostPopContainer'>
         <button onClick={showToast}>Show Toast</button>
         {show && <Toastpopup type='success'></Toastpopup>}
         
        </div>
        </>
    )

    const loadingCode = 
    `
const [load, setLoad] = useState(false)
const loadRef = useRef(null)
function loadScreen() {
    if(loadRef.current){
        clearTimeout(loadRef.current)
    }
    setLoad(true)
    loadRef.current = setTimeout(() => {
        setLoad(false)
        loadRef.current = null;
    }, 5000)
}
return (
<button onClick={loadScreen}>Show Loading</button>
{load && <Loading ></Loading>}
)
    `

  const loadingList = (
      <>
      <button onClick={loadScreen}>Show Loading</button>
      {load && <Loading ></Loading>}
      </>
  )

  const items = [
    { label: 'Badge', href: '#', ref: refs.Badge },
    { label: 'Banner', href: '#', ref: refs.Banner },
    { label: 'Tooltip', href: '#', ref: refs.Tooltip },
    {label: 'Card', href: '#', ref: refs.Card},
    { label: 'ToastPopup', href: '#', ref: refs.ToastPopup },
    { label: 'Loading', href: '#', ref: refs.Loading },
    { label: 'Testimonial', href: '#', ref: refs.Testimonial },
  ];
     
  useEffect(() => {
  const handleScroll = () => {
    if (!homeRightRef.current) return;

    const scrollTop = homeRightRef.current.scrollTop;

    let closestIndex = 0;
    let smallestDiff = Infinity;

    items.forEach((item, index) => {
      const ref = item.ref;
      if (ref.current) {
        const diff = Math.abs(ref.current.offsetTop - scrollTop);
        if (diff < smallestDiff) {
          smallestDiff = diff;
          closestIndex = index;
        }
      }
    });

    setActiveIndex(closestIndex);
  };

  const scrollContainer = homeRightRef.current;
  if (scrollContainer) {
    scrollContainer.addEventListener('scroll', handleScroll);
  }

  return () => {
    if (scrollContainer) {
      scrollContainer.removeEventListener('scroll', handleScroll);
      }
   };
  }, [items]);


  return (
    <div className="home" ref={homeRightRef}>
      <div className="home-left">
        <h1>Reaxify</h1>
        <div className="nav">
          <ul>
            {items.map((item, index) => (
              <li
              key={index}
              onClick={() => scrollToSection(item.ref, index)}
              style={{
                  backgroundColor: activeIndex === index ? 'rgba(255, 81, 255, 0.23)' : '',
                  color: activeIndex === index ? 'rgb(203,17,203)' : '',
              }}
              >
              {item.label}
              </li>
            ))}
          </ul>
        </div>
        <div className="home-left-bottom">
          
        <Badge>Start Using Guide</Badge>
        <a href="https://www.npmjs.com/package/reaxify-component-library" target="_blank">
        <Badge color='purple'>View on npm</Badge>
        </a>
        </div>
      </div>
      <div className="home-right">
        <div className="home-right-top">
        <h1>Welcome to the Reaxify Component Library</h1>
        <p>
          A lightweight and customizable React component library to help you build consistent and reusable UI components with ease. Built with scalability, usability, and clean design in mind.
        </p>
        </div>
        <div className="content-box-container"> 
        <div ref={refs.Badge}>                   
        <Showcase title="Badge" preview={badgeList} code={badgeCode} cc='badge-container'/>
        </div>
          <div ref={refs.Banner}>
        <Showcase title="Banner" preview={bannerList} code={bannerCode} cc='banner-container'/>
          </div>
          <div ref={refs.Tooltip}>
        <Showcase title="Tooltip" preview={tooltipList} code={tooltipCode} cc='tooltips-container2'/>
        </div>
        <div ref={refs.Card}>
        <Showcase title="Card" preview={cardList} code={cardCode} cc='cards-container'/>
        </div>
        <div ref={refs.ToastPopup}>
        <Showcase title="Toast Popup" preview={toastpopupList} code={toastpopupCode} cc='defaultContainer'/>
      </div>
      <div ref={refs.Loading}>
        <Showcase title="Loading Screen" preview={loadingList} code={loadingCode} cc='defaultContainer'/>
        </div>
      <div ref={refs.Testimonial}>
        <Showcase title="Testimonial" preview={testimonialList} code={testimonialCode} cc='testimonials-container2'/>
        </div>
        </div>
        <div className="nav-footer">
          <Badge>Start Using Guide</Badge>
          <a href="https://www.npmjs.com/package/reaxify-component-library" target="_blank">
          <Badge color='purple'>View on npm</Badge>
          </a>
        </div>
      </div>
    </div>
  );
}
