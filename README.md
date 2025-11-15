# Faradays Components

**Version:** 0.0.2

## Installation

```bash
$ npm install fara-comp-react
```
<br><br>


## Icons

**Version:** 0.0.1


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
lock, email, bike, clip, phone, like, truk, search, icon, arrowright, arrowleft, eye, eyeclosed

<br><br>

## Tooltip

**Version:** 0.0.1

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

<br><br>

## AutoComplete

**Version:** 0.0.1

The AutoComplete component allows the user to interactively type and select a value. It filters the available options based on what is entered and updates the selected value using an external function (setData). It can be customized with styles and preselected using selectedId.

```jsx
import { useState } from 'react';
import { AutoComplete } from 'fara-comp-react';

const App = () => {

    const [data, setData] = useState({ _id: 2 });

    const options = [
        { _id: 1, label: 'item 1' },
        { _id: 2, label: 'item 2' },
        { _id: 3, label: 'item 3' },
    ];

    return (
        <div className="app">

            <AutoComplete
                options={options}
                labelKey='label'
                setData={setData}
                style={{
                    width: '200px',
                    height: '30px',
                    placeholder: 'Texto del input cerrado'
                }}
                selectedId={data?._id || null}
            />

        </div>
    );
};

export default App;
```

#### Props:

- **`options`** (array): The options prop is an array of objects representing the selectable elements; each object must have an _id and can include properties such as label, name, or text, depending on which one matches the labelKey prop, which defaults to 'label'.

- **`labelKey`** (string): Indicates which property of each object in the options array will be used as the visible text in the component. The default is 'label', but it can be set to other properties such as 'name' or 'text', as long as it matches one of the properties present in the objects in the options array. 

- **`setData`** (string): It's a function that executes when the user selects an element in the component. It receives the selected object as an argument, allowing the parent component to update its state or perform actions based on the selection.

- **`style`** (object): It's a custom object that allows you to define the width and height of the input, as well as the text to display as a placeholder when the input is empty. Only these three properties are valid, and they're used to control the input's size and text.

- **`selectedId`** (_id_): It is recommended to pass the data state to the selectedId prop like this: `selectedId={data?._id || null}`. This allows the component to have a preselected item when needed, and if data is changed or deleted from an external button, the AutoComplete is automatically reset, reflecting the change and keeping it in sync with the external state.

<br><br>

## Badge

**Version:** 0.0.1

Displays a visual indicator consisting of text and an icon. You can customize the displayed name, text background color, and icon type and size. Additionally, the text background is automatically softened from the provided color for a more visually pleasing effect, while the icon maintains its original color.

```jsx
import { Badge } from 'fara-comp-react';

const App = () => {

    return (
        <div className="app">

            <Badge
                type='truck'
                name={3}
                backgroundColor='#333'
                size={36}
            />

        </div>
    );
};

export default App;
```

#### Props:

- **`options`** (string): Determines the type of icon to display within the Badge component. The default is 'app', but it can be set to any value recognized by the Icons component, thus defining the appearance and visual meaning of the icon that accompanies the badge text.

- **`options`** (string || number): Defines the content to be displayed within the badge and can be either a number or text. If no value is provided, the component displays '0' by default.

- **`backgroundColor`** (string): Defines the base color to be used in the component. The icon remains this color, while the text background (the "bubble") is generated from this color but in a softer version, creating a pleasing visual contrast and maintaining harmony between the icon and the badge.

- **`size`** (number): Determines the size of the icon within the badge in pixels. The default is 30, but it can be set to any numeric value to make the icon larger or smaller as needed.

<br><br>

## CharacterCounter

**Version:** 0.0.1

Displays information about the length of a text, indicating the minimum and maximum number of characters allowed and the current number of characters typed. It changes the color of the counter to warn if the text exceeds the established limits.

```jsx
import { CharacterCounter } from 'fara-comp-react';

const App = () => {

    return (
        <div className="app">

            <CharacterCounter
                min={5}
                max={10}
                text={'text'}
            />

        </div>
    );
};

export default App;
```

#### Props:

- **`min`** (number): Defines the minimum number of characters that the text must have to be considered valid

- **`max`** (number): Sets the maximum amount allowed.

- **`text`** (string): Is the content to be evaluated, and the component displays its current length compared to the min and max values, visually indicating whether or not it meets the established limits.

<br><br>

## CheckBoxes

**Version:** 0.0.1

The component displays a set of customizable checkboxes that can operate in single- or multi-select mode. It takes an array of labels with names and identifiers, internally maintains the state of the selected items, and updates the external value via the provided function. It also allows you to define the layout direction of the checkboxes and apply a custom accent color to them.

```jsx
import { useState } from 'react';
import { CheckBoxes } from 'fara-comp-react';

const App = () => {

    const [type, setType] = useState(null);

    const labels = [
        { _id: 1, name: 'item1' },
        { _id: 2, name: 'item2' },
        { _id: 3, name: 'item3' },
    ];

    return (
        <div className="app">

            <CheckBoxes
                labels={labels}
                selecteds={[{ _id: 2, name: 'item2' }]}
                multiSelect={true}
                direction='row'
                setType={setType}
                accentColor='red'
            />

        </div>
    );
};

export default App;
```

#### Props:

- **`labels`** (array): It's an array of objects that defines all the available checkboxes. Each object must have a unique _id and a name, which will be the text displayed next to the checkbox.

- **`selecteds`** (array): It works the same as labels and allows you to initialize the component with some checkboxes already selected. This ensures that the internal state correctly reflects the preselected elements when the component is rendered.

- **`multiSelect`** (boolean): Indicates whether multiple checkboxes can be selected at the same time. If false, only one checkbox can be selected, and any previous selections are automatically deselected.

- **`direction`** (string): Defines the layout of the boxes: 'row' to place them in a horizontal row or 'column' to arrange them in a vertical column.

- **`setType`** (function): It's the React state function that runs whenever the selection changes. It allows the parent component to receive the selected elements and react to changes.

- **`accentColor`** (string): Determines the color of the checkboxes. This color affects the mark that appears when the box is selected, allowing you to customize the component's appearance.

<br><br>

## CloudFile

**Version:** 0.0.1

The CloudFile component allows users to upload files interactively, displaying an immediate image preview and a representative icon for PDF files. It internally manages the state of the selected files and generates a FormData object containing the files and metadata such as the folder name or an optional identifier, sending it to the parent component via the onChange function. It also provides a clickable area that activates the file picker and visually organizes previews by number and file type.

```jsx
import { useState } from 'react';
import { CloudFile } from 'fara-comp-react';

const App = () => {

    const [formdata, setFormdata] = useState(new FormData());

    const handleFileChange = (data) => setFormdata(data);

    return (
        <div className="app">

            <CloudFile
                onChange={handleFileChange}
                folderName='avatars'
                contClass='cfCircle'
                id={'123456789'}
            />

        </div>
    );
};

export default App;
```

**Important:** It is important that each project includes the logo.png and pdf.png files in the public folder, as they are used as default icons for previewing file uploads.

#### Props:

- **`labels`** (function): It's a function that runs every time the user selects files. It receives as an argument a FormData object containing the selected files along with additional information such as the folder name and an optional identifier, allowing the parent component to process or submit this data.

- **`folderName`** (string): Defines the name of the folder where uploaded files will be associated. This value is added to FormData and can be used by the backend or project logic to organize files by destination or category.

- **`contClass`** (string): Allows you to apply a custom CSS class to the component's container, thereby defining its shape or visual style. For example, values ​​like cfRect, cfCircle, cfTicket, or cfSmall allow you to modify the loading area's appearance to match your interface design.

- **`id`** (string): It's an optional identifier added to FormData along with files. It can be used to associate files with a specific record, user, or entity within the application, making them easier to manage and store.

<br><br>

## Copy

**Version:** 0.0.1

The Copy component allows the user to interactively copy text to the clipboard. When clicked, the text specified in the text prop is automatically copied, and its appearance can be customized using the size and color props. Additionally, it offers the option to define the duration of a visual cue that confirms that the text was copied successfully, improving the user experience.

```jsx
import { Copy } from 'fara-comp-react';

const App = () => {

    return (
        <div className="app">

            <Copy
                text={'Texto para ser copiado'}
                size={12}
                color='red'
                duration={4000}
            />

        </div>
    );
};

export default App;
```

#### Props:

- **`text`** (string): Defines the content that will be copied to the clipboard when the user clicks the component. This can be any text string you want to share or reuse.

- **`size`** (number): Determines the visual size of the icon or interactive element that represents the copy action. Expressed in pixels, it allows you to adjust the component's visibility within the interface.

- **`color`** (string): Specifies the color of the icon or element the user clicks to copy. Allows you to customize the appearance and maintain consistency with the application's design.

- **`duration`** (number): Determines the length of time, in milliseconds, that the icon remains in the success state after copying the text. Initially, the copy icon is displayed, and when clicked, it changes to a success icon. After the time defined by duration is reached, the icon automatically returns to its original copy state.

<br><br>

## Downpdf

**Version:** 0.0.1

The `Downpdf` component allows you to download a PDF file from a provided URL interactively. Clicking the icon automatically downloads the file with a predetermined name, while a tooltip informs the user that the action is to download the PDF. It is designed to be easily integrated into the interface, displaying a PDF icon that improves the user's visual and functional experience.

```jsx
import { Downpdf } from 'fara-comp-react';

const App = () => {

    return (
        <div className="app">

            <Downpdf
                url={'Url del archivo a descargar'}
                position='top'
                color='blue'
            />

        </div>
    );
};

export default App;
```

#### Props:

- **`url`** (string): This is the address from which the PDF file will be downloaded. It must be a valid link pointing to an accessible file, as the component performs a fetch request to obtain the content and generate the download.

- **`position`** (string): Defines the position of the tooltip that appears when the cursor hovers over the icon. The default is 'top,' but it can be adjusted according to the design's needs to make the message more visible and clear to the user.

- **`color`** (string): Allows you to customize the color of the icon representing the PDF. This facilitates the visual integration of the component with the rest of the interface, although if not provided, the component uses a default color.

<br><br>

## ImgHover

**Version:** 0.0.1

The ImgHover component displays an image that generates a visual hover effect. It allows you to control whether the image has a rounded edge or not, adjust how the content scales using ObjectFit, and define whether the cursor changes to a pointer when hovering over the image. Interacting with the image activates an additional container that creates the hover effect, enhancing the visual presentation without affecting the original image.

```jsx
import { ImgHover } from 'fara-comp-react';

const App = () => {

    return (
        <div className="app">

            <ImgHover
                img={'/logo.png'}
                border={true}
                objectFit='contain'
                pointer={true}
            />

        </div>
    );
};

export default App;
```

#### Props:

- **`img`** (string): Defines the URL or path of the image to be displayed. This is the main content of the component and is used for both the visible image and the hover version.

- **`border`** (boolean): Determines whether the image will have rounded edges. If true, the image will be displayed with a circular edge; if false, the edges will be square.

- **`objectFit`** (string): Controls how the image fits within the container, allowing it to maintain proportions or crop as needed. For example, values ​​like 'cover' or 'contain' define how the image is scaled.

- **`pointer`** (boolean): This is a Boolean value that indicates whether the cursor changes to a pointer when hovering over the image. This improves visual interaction, indicating that the element is clickable or interactive.

<br><br>

## Loader

**Version:** 0.0.1

The Loader component displays a visual loading indicator when an action or process is in progress. It uses the Spinner component to graphically represent the wait and can optionally display descriptive text below the spinner. The spinner's color can be customized and provides a clear way to inform the user that the application is processing information.

```jsx
import { Loader } from 'fara-comp-react';

const App = () => {

    return (
        <div className="app">

            <Loader
                loading={true}
                color='red'
                text={'Texto opcional'}
            />

        </div>
    );
};

export default App;
```

#### Props:

- **`loading`** (boolean): This is a Boolean value that indicates whether the loader should be displayed. If true, the spinner and optional text are rendered; if false, nothing is displayed.

- **`color`** (string): Defines the color of the spinner that indicates loading. Allows you to customize the component's appearance to blend in with the interface design.

- **`text`** (string): This is optional text displayed below the spinner, useful for providing additional information to the user about the action being processed or for more descriptive wait messages.

<br><br>

## Modal

**Version:** 0.0.1

The Modal component renders an overlay popup window that displays custom content (children) when the open property is true. It allows the window to be closed by clicking outside the content or using a configurable button. Its layout and colors can be customized using the button's props, providing a reusable structure for displaying messages, forms, or other elements within a modal layer.

```jsx
import { useState } from 'react';
import { Modal } from 'fara-comp-react';

const App = () => {

    const [open, setOpen] = useState(false);

    return (
        <div className="app">

            <button onClick={() => setOpen(!open)} >Abrir modal</button>

            <Modal
                open={open}
                onClose={() => setOpen(false)}
                btn={true}
                btnName='Cerrar modal'
                btnBackColor='#333'
                btnColor='#EAEBEF'
            >
                <p>Contenido del modal</p>
            </Modal>

        </div>
    );
};

export default App;
```

#### Props:

- **`children`** (react node): Content to be displayed within the modal. This can be text, HTML elements, components, or other React nodes. This is what is placed between the component's opening and closing tags.

- **`open`** (boolean): Controls whether the modal is rendered in the DOM. When open is true, the component returns the modal structure and overlay; when false, the component returns null and doesn't exist in the DOM. This allows visibility to be managed from the parent component while keeping the modal completely unmounted when not needed.

- **`onClose`** (Function): is the function called to close the modal. It must be supplied by the parent component and will typically update the state controlled by open. The modal invokes onClose in two situations: when a user clicks outside the content section (detected by the 'modal' class) and when the close button is pressed (if visible). This separates the presentation logic from the control logic, allowing the parent component to decide exactly what to do upon closing.

- **`btn`** (boolean): Determines whether the modal displays an internal close button. If true, the configurable button is rendered; if false, the modal relies solely on clicks outside the content (or other external logic) to close. This is useful when you need a purely informational modal (no actions) or when managing closures from custom controls within children.

- **`btnName`** (string): Allows you to customize the text of the internal button. Instead of the default "Close" text, you can add more context-specific labels (e.g., "OK," "Cancel," "Save"). It's simply a presentational prop to improve the UX without altering the closing logic.

- **`btnBackColor`** (string): Defines the button's background color using any valid CSS value (hex, RGB, color name). This makes it easy to match the button to the app's color palette without having to touch the component's CSS classes.

- **`btnColor`** (string): Sets the color of the button text. Like btnBackColor, it accepts any CSS color format and is used to ensure contrast and visual consistency based on the theme or design you're using.

<br><br>

## Pager

**Version:** 0.0.1

Displays the current page and, if present, the previous and next page numbers. It allows page switching by updating the external state using the setQuery function, and optionally automatically scrolls to the top of the screen when changing pages. Its layout and background color can be customized, offering a lightweight and reusable way to navigate between paginated results pages.

```jsx
import { useState } from 'react';
import { Pager } from 'fara-comp-react';

const App = () => {

    const [query, setQuery] = useState(null);

    const response = {
        docs: [],
        totalDocs: 42,
        limit: 10,
        totalPages: 5,
        page: 3,
        pagingCounter: 21,
        hasPrevPage: true,
        hasNextPage: true,
        prevPage: 2,
        nextPage: 4
    };

    return (
        <div className="app">
            
            <Pager
                docs={response}
                setQuery={setQuery}
                backgroundColor='#2c3e50'
                top={true}
            />

        </div>
    );
};

export default App;
```

#### Props:

- **`docs`** (object): This is the object that contains the pagination data generated by mongoose-paginate-v2. It includes information such as the current page (page), whether there are previous or next pages (hasPrevPage and hasNextPage), and the page numbers of those pages (prevPage and nextPage). The component uses these values ​​to display the navigation buttons and determine whether they should be active.

- **`setQuery`** (functions): Is a function that allows you to update the query state in the parent component. When the user clicks on a previous or next page, setQuery is called to change the current page, which typically triggers a reload of the data for that page.

- **`backgroundColor`** (string): Is a string that defines the background color of the current page indicator. This allows you to customize the pager style and maintain consistency with the application's color palette. If not passed, it assumes a default value (#2c3e50).

- **`top`** (boolean): top es un boolean que determina si, al cambiar de página, la ventana debe desplazarse automáticamente hacia la parte superior. Si top es true, se ejecuta window.scrollTo con un desplazamiento suave al inicio de la página, mejorando la experiencia del usuario al navegar por resultados paginados.

<br><br>

## Print

**Version:** 0.0.1

The Print component is an interactive button that allows you to print only a specific section of the page, defined by a reference (ref) passed from the parent component.

```jsx
import { useRef } from 'react';
import { Print } from 'fara-comp-react';

const App = () => {

    const ref = useRef();

    return (
        <div className='app'>
            <p>componente padre</p>

            <section ref={ref}>
                Solo esta sección será impresa
            </section>

            <Print 
                color='gray'
                size='30px'
                position='top'
                useRef={ref}
                bodyClass='divPrint'
            />

        </div>
    );
};

export default App;
```

#### Props:

- **`color`** (string): Defines the color of the print icon and associated tooltip, allowing you to match it to the application theme or visually highlight the button.

- **`size`** (string): Sets the size of the print icon, accepting CSS values ​​like '30px', '2rem', etc., to fit different designs and layouts.

- **`position`** (string): Determines the position of the tooltip relative to the print icon, for example 'top', 'bottom', 'left' or 'right'.

- **`useRef`** (ref object): Reference to a DOM element you want to print. The contents of useRef.current are what will be displayed in the printout, allowing only that specific section to be printed.

- **`bodyClass`** (string): Optional CSS class applied to the container of printed content, allowing specific styles to be added to the printed section without affecting the main page.

<br><br>

## ProgressBar

**Version:** 0.0.1

The ProgressBar component is a dynamic progress bar that visually displays the progress of an operation or process. It is controlled by the progress prop, which indicates whether the bar is active (open) and can include a custom color (background). While the bar is active, the progress automatically increases randomly up to about 95%, simulating an ongoing process. When the progress bar ends or closes, the bar reaches 100% and then gently hides. The bar includes a central numeric indicator that shows the current percentage of completion, providing a clear and modern visual and quantitative representation of progress.

```jsx
import { ProgressBar } from 'fara-comp-react';

const App = () => {

    return (
        <div className='app'>

            <ProgressBar 
                open={true}
                background='#333'
            />

        </div>
    );
};

export default App;
```

#### Props:

- **`open`** (boolean): Indicates whether the progress bar should be active or visible. When true, the bar begins filling and displays progress; when false, the bar automatically fills to 100% and then hides.

- **`background`** (string): Allows you to define a custom color for the progress bar's fill. If not provided, a default color (#333) is used. This prop helps adapt the bar to the app's design or theme.

<br><br>

## ScrollToTop

**Version:** 0.0.1

The ScrollToTop component is a container that ensures the browser window automatically scrolls to the top whenever the application path changes. It works by intercepting changes to the browser history—whether through pushState, replaceState, or navigation with the back and forward buttons—and sets the document scroll position to zero. This ensures that, regardless of how the user navigates between pages, the user always sees the beginning of the content, improving the navigation experience in single-page applications.

```jsx
import { ScrollToTop } from 'fara-comp-react';

const App = () => {

    return (
        <div className='app'>
            <ScrollToTop>
                Páginas afectadas ....
            </ScrollToTop>
        </div>
    );
};

export default App;
```

#### Props:

- **`children`** (react node): Represents any React content or elements you want to wrap with this functionality. Essentially, ScrollToTop doesn't render anything visible; it simply acts as a functional container that applies scrolling behavior to the top of the page whenever the route changes.

    Therefore, children can be any valid JSX, such as pages, sections, components, or even an entire layout, and will be displayed normally on the frontend, while ScrollToTop handles scrolling automatically behind the scenes.

<br><br>

## Snackbar

**Version:** 0.0.1

The Snackbar component is a temporary notification that appears on the screen to inform the user about important events, such as errors, warnings, information, or success confirmations. Its visibility is controlled by the snack prop, which defines whether it is open (open), the message to display (message), and the notification type (status). When activated, the component is displayed for a specified duration (duration) and then automatically hides. It includes an icon corresponding to the notification type and a text message, providing a clear and visually distinctive way to communicate information to the user in a concise and prominent manner.

```jsx
import { Snackbar } from 'fara-comp-react';

const App = () => {

    const snack = {
        open: true,
        status: 'success',
        message: 'Snackbar success'
    };

    return (
        <div className='app'>

            <Snackbar
                snack={snack}
                duration={4000}
            />

        </div>
    );
};

export default App;
```

#### Props:

- **`snack.open`** (object.booelan): Indicates whether the notification should be displayed on the screen. When true, the Snackbar appears and begins counting down the time defined by duration before automatically hiding.

- **`snack.status`** (object.string): Defines the notification type and determines the icon to be displayed. Possible values ​​are typically 'success', 'error', 'info', or 'warning', allowing each type to have a distinct visual style to differentiate the importance or nature of the message.

- **`snack.message`** (object.string): Contains the text that will be displayed in the notification. This is the message you want to communicate to the user in a concise and clear manner.

- **`duration`** (number): Time in milliseconds during which the notification will remain visible before automatically disappearing. The default is 4000 ms, but it can be adjusted as needed.

<br><br>

## Spinner

**Version:** 0.0.1

The Spinner component is a visual loading indicator used to inform the user that an operation or process is running. It is rendered as a spinning circle whose appearance can be customized using the color and size props. The top border color is set using the color prop, while the size of the spinner is defined by the size prop.

```jsx
import { Spinner } from 'fara-comp-react';

const App = () => {

    return (
        <div className='app'>

            <Spinner
                color='blue'
                size='36px'
            />

        </div>
    );
};

export default App;
```

#### Props:

- **`color`** (string): Defines the color of the spinner's top border, allowing it to match the app's theme or style. If not provided, a default color (#f39468) is used.

- **`size`** (string): Sets the spinner's width and height, determining its visual size. It can take CSS values ​​like '36px', '2rem', etc. If not provided, the default size is '36px'.

<br><br>

## SpinnerH

**Version:** 0.0.1

The SpinnerH component is a horizontal loading indicator composed of five animated bars that move sequentially, creating a dynamic visual effect of waiting or a running process. The color prop allows you to customize the color of the bars to match the application's theme or style, and by default, it uses a gray color. This type of spinner is useful for showing that an action is in progress in a visually appealing way, especially in interfaces where linear or less intrusive animations than a circular spinner are preferred.

```jsx
import { SpinnerH } from 'fara-comp-react';

const App = () => {

    return (
        <div className='app'>

            <SpinnerH
                color='blue'
            />

        </div>
    );
};

export default App;
```

#### Props:

- **`color`** (string): It allows you to customize the color of the bars, adapting it to the theme or style of the application, and by default it uses a gray color.

<br><br>

## Switch

**Version:** 0.0.1

The Switch component is an interactive switch that allows you to toggle between two states, typically representing "yes/no" or "active/inactive" options. It functions as a stylized checkbox that visually reflects the current state using an activation color (activeColor) and customizable labels (statusTrue and statusFalse).

The component integrates with an external values ​​object (values) using setValues, automatically updating the corresponding property when the user changes the switch's state. It also allows you to define an initial value with pre and execute an optional setChange function when the state changes.

Additionally, it includes an optional label displayed next to the switch and uses a visual design that clearly highlights which option is active, providing a clean and modern user experience for binary controls in forms or configurations.

```jsx
import { useState } from 'react';
import { Switch } from 'fara-comp-react';

const App = () => {

    const [values, setValues] = useState({ active: true });
    const [change, setChange] = useState(false);

    return (
        <div className='app'>

            <Switch
                values={values}
                setValues={setValues}
                pre={true}
                name='active'
                activeColor='green'
                setChange={setChange}
                label='Estado activo'
                statusFalse='Inactivo'
                statusTrue='Activo'
            />

        </div>
    );
};

export default App;
```

#### Props:

- **`values`** (object): An object containing the current state of multiple fields, including the switch. The switch reads its initial value from values[name].

- **`setValues`** (function): Function that updates the values ​​object when the user changes the state of the switch, ensuring that the current value remains synchronized with the interface.

- **`pre`** (boolean): Initial value of the switch if no entry exists in values[name]. Defines whether the switch starts on (true) or off (false).

- **`name`** (string): Name that identifies the property within values ​​that controls the state of the switch.

- **`acvtiveColor`** (string): Color applied to the switch when activated, visually highlighting the selected option.

- **`setChange`** (function): Optional function that runs when the switch state changes, useful for handling side effects or marking forms as modified.

- **`label`** (string): Text displayed next to the switch to describe its purpose or function.

- **`statusFalse`** (string): Text representing the disabled state of the switch, usually displayed to the left of the switch.

- **`statusTrue`** (string): Text representing the activated state of the switch, usually displayed to the right of the switch.