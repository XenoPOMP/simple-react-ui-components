# React Simple Image Gallery
Author: [XenoPOMP](https://github.com/XenoPOMP)

## How to use:

Component gets couple of arguments. \
1. ``imageList`` - it takes array of strings (images sources)

```typescript
import img1 from './Source/images/20220126222356_1.jpg';
import img2 from './Source/images/6fb9f5be29.jpg';
import img3 from './Source/images/akm.png';
import img4 from './Source/images/ak74m.png';
import img5 from './Source/images/P90.png';
import img6 from './Source/images/MK47_Mutant.png';
```

```
imageList={[img1, img2, img3, img4, img5, img6]}
```

2. ``cssProperties`` - write css properties here. They will be applied to the gallery.

```
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
    imageList={[img1, img2, img3, img4, img5, img6]}
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