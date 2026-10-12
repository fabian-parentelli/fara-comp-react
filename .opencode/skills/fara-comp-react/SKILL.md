---
name: fara-comp-react
description: Use when working with the fara-comp-react npm package. Provides 22 reusable React components (Icons, Tooltip, Loader, Spinner, Snackbar, ProgressBar, ScrollToTop, AutoComplete, Badge, CheckBoxes, CloudFile, Copy, Downpdf, ImgHover, Modal, Pager, Print, SpinnerH, Switch, CharacterCounter, Accordion, Popup) plus 100+ SVG icons. Covers installation, all props, and usage examples.
---

# fara-comp-react

React component library with 22 reusable components and 100+ SVG icons.

## Installation

```bash
npm install fara-comp-react
```

Peer dependencies: `react >= 16.8.0`, `react-dom >= 16.8.0`.

Import: `import { ComponentName } from 'fara-comp-react'`

---

## Components

### Icons

Renders an SVG icon from 100+ available types.

```jsx
import { Icons } from 'fara-comp-react';

<Icons color="black" size="50px" onClick={() => console.log('click')}
  backCol="green" bold={1} type="user" hover={true}
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `color` | string | `'#2c3e50'` | Stroke color (CSS value) |
| `size` | string | `'30px'` | Width/height (CSS value) |
| `onClick` | function | - | Click handler |
| `backCol` | string | `'none'` | SVG fill color |
| `bold` | number | `2` | Stroke width |
| `type` | string | `'app'` | Icon type (see list below) |
| `hover` | boolean | `false` | Show hover background effect |

Available icon types:
`facebook`, `x`, `instagram`, `youtube`, `github`, `users`, `info`, `app`, `error`, `warning`, `success`, `dashboard`, `star`, `message`, `bell`, `run`, `door`, `ticket`, `shirt`, `computer`, `clipboard`, `report`, `userCircle`, `image`, `delete`, `square`, `padlock`, `carrot`, `copy`, `calendar`, `map`, `credit`, `publicity`, `cart`, `down`, `tickets`, `pdf`, `notimage`, `notcredit`, `event`, `video`, `arrows`, `qr`, `scan`, `print`, `setting`, `activity`, `menu`, `bookUser`, `book`, `css`, `html`, `js`, `node`, `react`, `mongo`, `npm`, `spotify`, `whatsapp`, `store`, `camera`, `cash`, `chart`, `check`, `clock`, `cloud`, `database`, `analytic`, `direction`, `sendfile`, `house`, `id`, `lock`, `email`, `bike`, `clip`, `phone`, `like`, `truck`, `search`, `icon`, `arrowright`, `arrowleft`, `notuser`, `notmap`, `browser`, `question`, `boxPack`, `bank`, `return`, `onoff`, `radio`, `play`, `pause`, `playback`, `playnext`, `volume`, `volumenot`, `playlist`, `eye`, `eyeclosed`, `browserplus`, `browserdel`, `cashregister`, `dothor`, `dotver`, `pencil`, `signature`, `certificate`, `chevron`, `replace`, `folder`, `paint`, `bag`, `bottle`, `coffee`, `glass`, `send`, `emailopen`, `heart`, `user`, `exchange`, `filemusic`, `music`, `playlistad`, `ejection`, `volumen2`, `album`, `arrowres`, `arrowsend`, `article`, `articleoff`, `reload`, `upload`, `zoom`

### Tooltip

Shows a tooltip on hover.

```jsx
import { Tooltip } from 'fara-comp-react';

<Tooltip text="message" position="top" backgroundColor="red" color="green" cursor="pointer">
  <p>Hover me</p>
</Tooltip>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | string | `'tooltip'` | Tooltip text |
| `children` | ReactNode | required | Trigger element |
| `position` | string | `'top'` | `top`, `bottom`, `left`, `right`, `none` |
| `backgroundColor` | string | `'#333'` | Tooltip background |
| `color` | string | `'#D9D9D9'` | Tooltip text color |
| `cursor` | string | `'default'` | CSS cursor value |

### Loader

Full-screen loading overlay with spinner.

```jsx
import { Loader } from 'fara-comp-react';

<Loader loading={true} color="red" text="Loading..." />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `loading` | boolean | - | Show/hide loader |
| `color` | string | `'gray'` | Spinner color |
| `text` | string | - | Optional text below spinner |

### Spinner

Circular rotating spinner.

```jsx
import { Spinner } from 'fara-comp-react';

<Spinner color="blue" size="36px" />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `color` | string | `'#f39468'` | Border-top color |
| `size` | string | `'36px'` | Width/height |

### SpinnerH

Horizontal bar loading animation (5 bars).

```jsx
import { SpinnerH } from 'fara-comp-react';

<SpinnerH color="blue" />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `color` | string | `'gray'` | Bar background color |

### Snackbar

Temporary notification bar at bottom-left.

```jsx
import { Snackbar } from 'fara-comp-react';

const snack = { open: true, status: 'success', message: 'Done!' };
<Snackbar snack={snack} duration={4000} />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `snack` | object | required | `{ open: bool, status: 'error'\|'success'\|'info'\|'warning', message: string }` |
| `duration` | number | `4000` | Auto-hide timeout (ms) |

### ProgressBar

Animated progress bar. Auto-fills to ~95% while open; jumps to 100% on close.

```jsx
import { ProgressBar } from 'fara-comp-react';

<ProgressBar open={true} background="#333" />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | boolean | required | Active/inactive |
| `background` | string | `'#333'` | Fill color |

### ScrollToTop

Auto-scrolls to top on route change. Wraps children; overrides `pushState`/`replaceState`.

```jsx
import { ScrollToTop } from 'fara-comp-react';

<ScrollToTop>
  <App />
</ScrollToTop>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | ReactNode | required | Content to wrap |

### AutoComplete

Filterable dropdown with keyboard navigation.

```jsx
import { AutoComplete } from 'fara-comp-react';

const options = [{ _id: 1, label: 'item 1' }, { _id: 2, label: 'item 2' }];

<AutoComplete
  options={options} labelKey="label" setData={setData}
  style={{ width: '200px', height: '30px', placeholder: 'Search...' }}
  selectedId={data?._id || null}
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `options` | array | `[]` | Objects with `_id` + `labelKey` field |
| `labelKey` | string | `'label'` | Property for display text |
| `setData` | function | - | Called with selected object |
| `style` | object | `{}` | `{ width?, height?, placeholder? }` |
| `selectedId` | string/number | `null` | Pre-select by `_id` |

### Badge

Icon with a numeric/text badge bubble. The bubble uses a lightened version of `backgroundColor`.

```jsx
import { Badge } from 'fara-comp-react';

<Badge type="truck" name={3} backgroundColor="#333" size={36} />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | string | `'app'` | Icon type |
| `name` | string/number | `'0'` | Badge content |
| `backgroundColor` | string | `'#333'` | Icon color (bubble is lightened) |
| `size` | number | `30` | Icon size in px |

### CheckBoxes

Checkbox group supporting single/multi select.

```jsx
import { CheckBoxes } from 'fara-comp-react';

const labels = [{ _id: 1, name: 'item1' }, { _id: 2, name: 'item2' }];

<CheckBoxes
  labels={labels} selecteds={[{ _id: 2, name: 'item2' }]}
  multiSelect={true} direction="row" setType={setType} accentColor="red"
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `labels` | array | `[]` | `[{ _id: string\|number, name: string }]` |
| `selecteds` | array | `[]` | Pre-selected items (same shape as labels) |
| `multiSelect` | boolean | `false` | Allow multiple selection |
| `direction` | string | `'row'` | `'row'` or `'column'` |
| `setType` | function | - | Called with selected item(s) |
| `accentColor` | string | `'#1a73e8'` | Checkbox highlight color |

### CloudFile

File upload with image preview / PDF icon display. Accepts images and PDFs.

```jsx
import { CloudFile } from 'fara-comp-react';

<CloudFile onChange={handleFileChange} folderName="avatars"
  contClass="cfCircle" id="123" preImg="/avatar.png"
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `onChange` | function | - | Called with `FormData` (files + folderName + pid) |
| `folderName` | string | - | Folder identifier appended to FormData |
| `contClass` | string | - | CSS class: `cfRect`, `cfCircle`, `cfTicket`, `cfSmall` |
| `id` | string | - | Optional ID appended as `pid` to FormData |
| `preImg` | string | - | Default image URL (fallback: `/logo.png`) |

> **Note:** Place `logo.png` and `pdf.png` in your project's `public/` folder.

### Copy

Click-to-copy text to clipboard.

```jsx
import { Copy } from 'fara-comp-react';

<Copy text="Text to copy" size={12} color="red" duration={4000} />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | string | - | Text to copy |
| `size` | number | `12` | Font/icon size in px |
| `color` | string | `'black'` | Icon/text color |
| `duration` | number | `2000` | Success state duration (ms) |

### Downpdf

Downloads a PDF from a URL with tooltip.

```jsx
import { Downpdf } from 'fara-comp-react';

<Downpdf url="https://example.com/file.pdf" position="top" color="#B71C1C" />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `url` | string | - | PDF URL to download |
| `position` | string | `'top'` | Tooltip position |
| `color` | string | `'#B71C1C'` | Icon color |

### ImgHover

Image with hover preview effect.

```jsx
import { ImgHover } from 'fara-comp-react';

<ImgHover img="/logo.png" border={true} objectFit="contain" pointer={true} />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `img` | string | - | Image URL/path |
| `border` | boolean | - | `true` = rounded (50%), `false` = square |
| `objectFit` | string | `'cover'` | CSS object-fit value |
| `pointer` | boolean | `false` | Show pointer cursor |

### Modal

Overlay modal with optional close button.

```jsx
import { Modal } from 'fara-comp-react';

<Modal open={open} onClose={() => setOpen(false)} btn={true}
  btnName="Close" btnBackColor="#333" btnColor="#EAEBEF" backgroundColor="#EAEBEF"
>
  <p>Modal content</p>
</Modal>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | ReactNode | required | Modal content |
| `open` | boolean | `false` | Show/hide modal |
| `onClose` | function | - | Close handler (click outside or button) |
| `btn` | boolean | `false` | Show close button |
| `btnName` | string | `'Cerrar'` | Button text |
| `btnBackColor` | string | `'#333'` | Button background |
| `btnColor` | string | `'#EAEBEF'` | Button text color |
| `backgroundColor` | string | `'#EAEBEF'` | Modal section background |

### Pager

Paginated navigation. Uses mongoose-paginate-v2 response shape.

```jsx
import { Pager } from 'fara-comp-react';

const response = { docs: [], totalDocs: 42, limit: 10, totalPages: 5, page: 3,
  hasPrevPage: true, hasNextPage: true, prevPage: 2, nextPage: 4 };

<Pager docs={response} setQuery={setQuery} backgroundColor="#2c3e50" top={true} />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `docs` | object | - | Pagination result (mongoose-paginate-v2 shape) |
| `setQuery` | function | - | Called with `{ page: newPage }` |
| `backgroundColor` | string | `'#2c3e50'` | Current page indicator color |
| `top` | boolean | `true` | Scroll to top on page change |

### Print

Prints a specific section (via ref) or the whole page.

```jsx
import { Print } from 'fara-comp-react';

const ref = useRef();

<section ref={ref}>Printable content</section>
<Print color="gray" size="30px" position="top" useRef={ref} bodyClass="divPrint" />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `color` | string | `'gray'` | Icon color |
| `size` | string | `'30px'` | Icon size |
| `position` | string | `'top'` | Tooltip position |
| `useRef` | React.RefObject | - | Ref to the element to print |
| `bodyClass` | string | - | CSS class for printed content wrapper |

### Switch

Toggle switch for boolean values.

```jsx
import { Switch } from 'fara-comp-react';

<Switch values={values} setValues={setValues} pre={true} name="active"
  activeColor="green" setChange={setChange} label="Active"
  statusFalse="Off" statusTrue="On"
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `values` | object | - | State object containing the switch value |
| `setValues` | function | - | State setter (updates `values[name]`) |
| `pre` | boolean | `false` | Initial value fallback |
| `name` | string | `'swicth'` | Key in `values` object |
| `activeColor` | string | `'#2C5469'` | Active state color |
| `setChange` | function | - | Side-effect callback on change |
| `label` | string | `''` | Label displayed next to switch |
| `statusFalse` | string | `'NO'` | Text for off state |
| `statusTrue` | string | `'SI'` | Text for on state |

### CharacterCounter

Shows character count with min/max validation (red if out of range).

```jsx
import { CharacterCounter } from 'fara-comp-react';

<CharacterCounter min={5} max={10} text="Hello" />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `min` | number | - | Minimum characters |
| `max` | number | - | Maximum characters |
| `text` | string | `''` | Text to evaluate |

### Accordion

Collapsible panel with animated height and click-outside-to-close.

```jsx
import { Accordion } from 'fara-comp-react';

<Accordion title="Section 1" styles={{
  backColHeader: '#2f14de', colorHeader: '#fff', backColContent: '#f0f0f0',
  colorContent: '#000', paddingHeader: '1rem', paddingContent: '1rem',
  borderAcordion: '1px solid #333', iconBold: true, iconColor: '#fff',
  iconSize: '1.2rem', iconType: 'chevron', heightHeader: '100%'
}}>
  <p>Content</p>
</Accordion>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | required | Header text |
| `children` | ReactNode | required | Collapsible content |
| `styles.backColHeader` | string | `'#f0f0f0'` | Header background |
| `styles.colorHeader` | string | `'#000'` | Header text color |
| `styles.backColContent` | string | `'#fff'` | Content background |
| `styles.colorContent` | string | `'#000'` | Content text color |
| `styles.paddingHeader` | string | `'1rem'` | Header padding |
| `styles.paddingContent` | string | `'1rem'` | Content padding (unused in JS) |
| `styles.borderAcordion` | string | `'1px solid black'` | Container border |
| `styles.iconBold` | boolean/number | `2` | Icon stroke width |
| `styles.iconColor` | string | `'#2c3e50'` | Icon color |
| `styles.iconSize` | string | `'30px'` | Icon size |
| `styles.iconType` | string | `'chevron'` | Icon type (chevron rotates on open) |
| `styles.heightHeader` | string | `'100%'` | Header height |

### Popup

Floating panel triggered by text or icon click.

```jsx
import { Popup } from 'fara-comp-react';

<Popup text="Open popup" styles={{
  color: '#333', size: '20px', position: 'right', width: '250px'
}}>
  <p>Popup content</p>
</Popup>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | string | - | Trigger text (if omitted, icon is used) |
| `icon` | string | `'app'` | Icon type when no text provided |
| `children` | ReactNode | required | Content inside popup |
| `styles.color` | string | `'#f0f0f0'` | Trigger text/icon color |
| `styles.size` | string | `'30px'` | Trigger font/icon size |
| `styles.position` | string | `'left'` | Popup direction: `r`, `l`, `t`, `b`, `lt`, `rt`, `lb`, `rb` |
| `styles.width` | string | `'300px'` | Popup container width |

Position values: `r`=right, `l`=left, `t`=top, `b`=bottom, `lt`=left-top, `rt`=right-top, `lb`=left-bottom, `rb`=right-bottom.

---

## TypeScript

Import types from `'fara_comp_react'` (note: underscores, not hyphens):

```typescript
import type { IconProps, TooltipProps, AccordionProps, ModalProps } from 'fara_comp_react';
```

Available interfaces: `IconProps`, `TooltipProps`, `LoaderProps`, `SpinnerProps`, `SnackbarProps`, `ProgressBarProps`, `ScrollToTopProps`, `AutoCompleteProps`, `BadgeProps`, `CheckBoxesProps`, `CloudFileProps`, `CopyProps`, `DownpdfProps`, `ImgHoverProps`, `ModalProps`, `PagerProps`, `PrintProps`, `SpinnerHProps`, `SwitchProps`, `CharacterCounterProps`, `AccordionProps`, `PopupProps`.
