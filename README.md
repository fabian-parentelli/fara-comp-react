# Faradays Components

**Versión:** 0.0.0



---
---



## Icons

**Versión:** 0.0.0


The component `Icons....` displays an icon that can be customized in color, size, and adding an action when clicked.

```jsx
import { Icons } from "fara_comp_react";

const App = () => {
    return (
        <div>
            <Icons 
                color="black" 
                size="50px" 
                onClick={()=> console.log('hace click')}
                backCol='green'
                bold={1}
                type='user'
                hover={true}
            />;
        </div>
    );
};

export default App;
```

#### Props:

- **`color`** (string): Defines the icon's color. It should be a valid CSS value, such as a color name (`"red"`), a hexadecimal value (`"#3498db"`), or any other compatible color format.
  
- **`size`** (number): Defines the size of the icon in pixels. The value should be a string that includes the size followed by the units, such as "50px" or "2rem".

- **`onClick`** (function): Defines the function to execute when the icon is clicked.

- **`backCol`** (string): Some icons have a background color, but not all of them.

- **`bold`** (number): Allows adjusting the thickness of the strokes or outlines of the vector.

- **`type`** (string): A single component is used to select different types of icons.

- **`hover`** (boolean): When hovering over the icon, a soft background is displayed.


---

facebook  x  instagram  youtube  github  user  info  app  error  warning  success  dashboard  

star  message  bell  run  door  ticket  shirt  computer  clipboard  report  userCircle  image  

delete  square  padlock  carrot  copy  calendar  map  credit  publicity  cart  down  tickets  

pdf  notimage  notcredit  event  video  arrows  qr  scan  print  setting  activity  menu  bookUser  

book  css  html  js  node  react  mongo  npm  spotify  whatsapp  store  camera  cash  chart  

check  clock  cloud  database  analytic  direction  sendfile  house  id  lock  email  bike  clip  

phone  like  truk  search  

     
---
---