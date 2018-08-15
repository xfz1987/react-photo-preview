/**
 * 图片预览组件
 * created by xfz
 * time: 20180815
 */

import React from 'react';
import './index.css'

export default class PicPreview extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isShow: false,
      curIndex: -1,
    }
  }

  render() {
    let { photos, customClass} = this.props
    let { isShow, curIndex } = this.state
    return (
      <div className={customClass?`pic-preview ${customClass}`:'pic-preview'}>
        {photos.map((t,i) => <img src={t} key={i} alt="文章封面" onClick={() => this.setState({isShow: true,curIndex: i})} />)}
        {
          (curIndex!=-1&&isShow) && (
            <div className="pic-outer" onClick={() => this.setState({isShow: false})}>
              <div className="pic-container" onClick={e => e.stopPropagation()}>
                <div className={"pic-close"} onClick={e => {e.stopPropagation();this.setState({isShow: false})}}></div>
                {curIndex?<div className="pic-prev" onClick={e => {e.stopPropagation();this.setState({curIndex:curIndex-1})}}></div>:''}
                <div className="pic-inner"><img src={photos[curIndex]} alt="预览图片"/></div>
                {curIndex<photos.length-1?<div className="pic-next" onClick={e => {e.stopPropagation();this.setState({curIndex:curIndex+1})}}></div>:''}
              </div>
            </div>
          )
        }
      </div>
    )
  }
}

PicPreview.defaultProps = {
  photos: [],
  customClass: ''
}
