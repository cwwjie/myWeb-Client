import React, {Component} from 'react';
import { connect } from 'dva';

import EVA from './../../assets/EVA.jpg';

class MobileHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const data = this.props.homeArticles || [] ;

    return (
      <div className="mobile-home-main">
        {data.map((val, key) => (
          <div key={key} className="home-item">
            <div className="item-img">
              <img alt="item" src={EVA} />
            </div>
            <div className="item-main">
              <div className="main-title">
                {val.title}
              </div>
              <div className={val.content.length > 50 ? "main-content main-ellipsis" : "main-content"}>
                {val.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  homeArticles: state.index.homeArticles
})

export default connect(mapStateToProps)(MobileHome);