import React from 'react'
import styles from './CVbuildBox.scss'

class CVbuildBox extends React.Component{
    render(){
        return(
            <div className={`${styles.cv__flex}`}>
                <a className="image">
                    <img src={ this.props.img } />
                </a>
                <div className={`${styles.cvTitle}`}>
                    <h2>{ this.props.tittle }</h2>
                </div>
            </div>
        );
    }
}
export default CVbuildBox;