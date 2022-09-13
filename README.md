# <p style="text-align: center">ui-components-react-js</p>

# Getting started
``npm i ui-components-react-js``

## Gallery

Import component:
```typescript
import Gallery from "ui-components-react-js";
```

Use component inside JSX:

```typescript jsx
<Gallery imageList={[]} cssProperties={{}} />
```

``imageList`` takes an array of strings (images sources):

```typescript
import img1 from './source/images/image1.png';
import img2 from './source/images/image2.png';
import img3 from './source/images/image3.png';
```

```typescript jsx
imageList={[img1, img2, img3]}
```

``cssProperties`` - write css properties here. They will be applied to the gallery.

```typescript
cssProperties={{
    width: '90vw',
    maxWidth: '600px',
    aspectRatio: '16 / 9',
    background: 'rgba(0, 0, 0, 0.5)',
    outline: 'transparent',
    borderRadius: '5px'
}}
```

Ready to use component looks like:
```typescript jsx
<Gallery
    imageList={[img1, img2, img3]}
    cssProperties={{
        width: '90vw',
        maxWidth: '600px',
        aspectRatio: '16 / 9',
        background: 'rgba(0, 0, 0, 0.5)',
        outline: 'transparent',
        borderRadius: '5px'
   }}
/>
```