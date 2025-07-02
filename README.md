# Reaxify Component Library

**reaxify** is a lightweight and customizable React component library designed to help developers quickly build beautiful and reusable UI components. It includes components like `Badge`, `Banner`, `Testimonial`, `Tooltip`,  `ToastPopup` , `Card` and `Loading Screen`



## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Badge](#badge)
  - [Banner](#banner)
  - [Testimonial](#testimonial)
  - [Tooltip](#tooltip)
  - [Card](#card)
  - [Toast](#toast)
  - [Loading](#loading)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install **Rexify Component Library**, run the following command in your terminal:

```bash
npm install reaxify-component-library

```

## 🚀 Demo Page

Check out the live demo: [Rexify Component Library Demo](https://reaxify-component-library.netlify.app/)


## Usage 

### Badge

```jsx

import { Badge } from 'reaxify-component-library';
import 'reaxify-component-library/dist/reaxify-component-library.css';

function App(){
return(
 <>
   <Badge color = "yellow" type = "square"> Badge </Badge>
   <Badge color = "green" type = "pill"> Badge </Badge>   
   <Badge > Badge </Badge>
 </>
)
}

```

### Here are the available color schemes and types you can use for the `<Badge />` component:

#### ✅ Types:
- `pill`
- `square` <!-- Do not add anything for this -->


#### 🎨 Colors:
- `blue` <!-- Do not add anything for this -->
- `black` 
- `red`
- `yellow`
- `green`
- `indigo`
- `purple`
- `pink`


### Banner

```jsx
import { Banner } from 'reaxify-component-library';
import "reaxify-component-library/dist/reaxify-component-library.css";

function App(){
return(
 <>
   <Banner type="neutral" /> 

   <Banner status="success" title="This is custom title" >
      This text could be changed. adipisicing elit. Nihil velit praes entium ex? 
      Dolor, quidem!
   </Banner> 
</>
)
}

```

## 📢 Banner Variants
The `<Banner />` component supports the following `status` props for different contextual messages:

#### ✅Available Variants:
- `success` — For positive confirmations or successful actions  
- `warning` — For cautionary or alert messages  
- `error` — For error or failure states  
- `neutral` — For general information or neutral content


### Testimonial
```jsx

import { Testimonial } from 'reaxify-component-library';
import "reaxify-component-library/dist/reaxify-component-library.css";

function App() {
  return (
    <>
    <!-- Default Testimonial with image  -->
    <Testimonial image={profile}></Testimonial>

    <!-- Default Testimonial without image  -->
    <Testimonial></Testimonial>

    <!-- Custom Testimonial with image and all the props  -->
    <Testimonial 
    image={profile} 
    name='Ali Arshad Khan' 
    company='Netcamp' 
    position='CEO' bgColor='grey'>
    This text could be changed. adipisicing elit. Nihil velit praes entium ex? 
    Dolor, quidem!
    </Testimonial>
    </>
  );
}

```
## 📢 Testimonial Variants
The `<Testimonial />` use `<Testimonial>any thing</Testimonial>`  `children` as a body text of testimonial component and also supports the following `image` , `name` , `company` , `position` , `bgColor` props for different contextual messages:



### Tooltip

```jsx

import { Tooltip, Badge } from 'reaxify-component-library';
import "reaxify-component-library/dist/reaxify-component-library.css";

function App() {
  return (
    <>

      <!-- Default Tooltip with  wraping a Badge  -->
      <Tooltip>
        <Badge type='pill'>Ali</Badge>
      </Tooltip>

      <!--  Tooltip with custom heading and body text wrapping a Badge  -->
      <Tooltip color='green' type='light'        heading='Aliens are real' body='Lorem, ipsum  dolor sit amet consectetur adipisicing elit.'>
      </Tooltip>
    </>
  );
}


```

### The `<Tooltip />` component supports various `color` and `type` values to match different design themes:

#### ✅Available Types:
- `bold`
- `light`

#### 🎨 Available Colors:
- `blue`
- `purple`
- `green`
- `black`
- `white`



### Toast

```jsx

import { useState, useRef} from 'react'
import { Toastpopup } from 'reaxify-component-library';
import "reaxify-component-library/dist/reaxify-component-library.css";

function App() {
  const [show, setShow] = useState(false)
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
    <>
      <button
        onClick={handleShowToast}
      >
        Show Toast
      </button>

      {show && <Toastpopup></Toastpopup>}
    </>

  <!--  !IMPORTANT  -->

   <!--  Add this code in index.html to make toast work otherwise your app will crash  -->
     
    <div id="toast-root"></div> 
   
   <!-- Add the above code in index.html inside body right below <div id="root"></div> -->

  )
}


```

### The `<Toastpopup />` component supports the following `type` props for different contextual messages:

#### ✅ Available Types:
- `success` — For positive confirmations or successful actions  
- `warning` — For cautionary or alert messages  
- `error` — For error or failure states  
- `neutral` — For general information or neutral content


### Card

```jsx
 
import { Card } from 'reaxify-component-library';
import "reaxify-component-library/dist/reaxify-component-library.css";

function App() {
  return (

    <!-- Default Card -->
    <Card icon={reactLogo}>
    </Card>

    <!-- Custome Card Card -->
    <Card icon={reactLogo} backgroundColor='grey' title='Recycle'>
       Cards Icon could be changed, Title is customizable and also these body text. A click event also can be added.
    </Card>
  );
}

```

### Loading 

```jsx

import { useState, useRef} from 'react'
import { Loading } from 'reaxify-component-library';
import "reaxify-component-library/dist/reaxify-component-library.css";

function App() {
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
    <>
      <button 
      onClick={loadScreen}>
      Show Loading
      </button>

      {load && <Loading ></Loading>}
    </>

  )
}


```


## 🙌 Contributing

Contributions are most welcome!  
Feel free to open issues, suggest new features, or submit pull requests to help improve the library.

---

## 👨‍💻 Author

**Ali Arshad Khan**  
Frontend Developer ✨  
[Potfolio](https://portfolio-ali-arshad-khan.netlify.app/) • [Twitter](https://x.com/its_arshad01) • [LinkedIn](https://www.linkedin.com/in/ali-arshad-khan/) • [GitHub](https://github.com/Ali-Arshad-Khan)

---

## 🙏 Acknowledgments

- Inspired by modern design systems and reusable UI practices.
- Thanks to the open-source community for all the awesome tools and resources.