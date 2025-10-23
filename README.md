# Faradays Components

**Versión:** 0.0.2

## Installation

```bash
$ npm install fara-comp-react
```
<br><br>


## Icons

**Versión:** 0.0.1


The component `Icons....` displays an icon that can be customized in color, size, and adding an action when clicked.

```jsx
import { Icons } from "fara-comp-react";

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
<br><br>
---
<br>

facebook, x, instagram, youtube, github, user, info, app, error, warning, success, dashboard  
star, message, bell, run, door, ticket, shirt, computer, clipboard, report, userCircle, image  
delete, square, padlock, carrot, copy, calendar, map, credit, publicity, cart, down, tickets  
pdf, notimage, notcredit, event, video, arrows, qr, scan, print, setting, activity, menu  
bookUser, book, css, html, js, node, react, mongo, npm, spotify, whatsapp, store  
camera, cash, chart, check, clock, cloud, database, analytic, direction, sendfile, house, id  
lock, email, bike, clip, phone, like, truk, search, icon, arrowright, arrowleft

<br><br>

## Tooltip

**Versión:** 0.0.1

A tooltip is a small pop-up box that appears when the user hovers over an element, such as a button, icon, or link. Its purpose is to provide additional or clarifying information without permanently taking up visible space in the interface.

```jsx
import { Tooltip } from "fara-comp-react";

const App = () => {
    return (
        <div>
            <Tooltip 
                text='message'
                position='rigth'
                backgroundColor='red'
                color='green'
                cursor='pointer'
            >        
                <p>word || icon</p>
            </Tooltip>
        </div>
    );
};

export default App;
```

#### Props:

- **`text`** (string): is the text to be displayed within the tooltip. If not specified, the default is (`tooltip`).

- **`position`** (string): Defines the position of the tooltip relative to its child element. It can be `top`, `bottom`, `left`, `right`, or `none`. The default value is `top`.

- **`backgroundColor`** (string): Allows you to customize the tooltip background color using any valid CSS value (e.g., #333, red, rgba(0,0,0,0.8), etc.). The default value is #333.

- **`color`** (string): Specifies the color of the text displayed within the tooltip. The default is #D9D9D9.

- **`cursor`** (string): Determines the type of cursor that appears when the mouse hovers over the tooltip area. The default is 'default', but it can be any valid CSS value, such as 'pointer', 'help', 'move', etc.