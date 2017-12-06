import React, { Component } from 'react';
import * as moment from 'moment';

class CommentsItemReply extends Component {
  render() {
    return (
      this.props.item.hasOwnProperty('kids') && Array.isArray(this.props.item.kids) ?
        this.props.item.kids.map((kid, index) =>
          kid === null || (kid.hasOwnProperty('deleted') && kid.deleted) ?
            <div key={index}></div>
          :
            <div className="pl-3" key={index}>
              <small className="text-muted">{kid.by} | {moment.unix(kid.time).fromNow()}</small><br/>
              <div id="text" dangerouslySetInnerHTML={{__html: kid.text}}/>
              
              <CommentsItemReply item={kid} />
            </div>
        )
      :
        <div></div>
    );
  }
}

export default CommentsItemReply;
