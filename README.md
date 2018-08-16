# react-photo-preview
> - Base on react. for photo preview

## Installation
`npm install --save react-photo-preview`

## Usage
**Example with defaults**
Creating an example component
```
import React from 'react'
import PhotoPreview from 'react-photo-preview'
export default class Home extends React.Component {
    render() {
        return (
            <div>
                <PhotoPreview photos={photos} customClass="feed-preview"/>
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
