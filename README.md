# react-pic-preview
> - Base on react. for photo preview

## Installation
`npm install --save react-pic-preview`

## Usage
**Example with defaults**
Creating an example component
```
import React from 'react'
import PicPreview from 'react-pic-preview'
export default class Home extends React.Component {
    render() {
        return (
            <div>
                <PicPreview photos={photos} customClass="feed-preview"/>
            </div>
        )
    }
}
```

## Properties
### photos
**Type** Array
your photos list
### customClass
**Type** String
your custom className

## License
ISC