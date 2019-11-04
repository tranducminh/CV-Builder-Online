import React from 'react';
import { PopupboxManager, PopupboxContainer} from 'react-popupbox';
import styles from './CvMaker1.scss';
class CVMaker1 extends React.Component {
    openPopupbox() {
        const content = (
          <div>
            <p className="quotes">Work like you don't need the money.</p>
            <p className="quotes">Dance like no one is watching.</p>
            <p className="quotes">And love like you've never been hurt.</p>
            <span className="quotes-from">― Mark Twain</span>
          </div>
        )
        PopupboxManager.open({ content })
      }

      render() {
        return (
          <div>
            <button onClick={this.openPopupbox}>Click me</button>
            <PopupboxContainer />
          </div>
        )
      }
}

export default CVMaker1;