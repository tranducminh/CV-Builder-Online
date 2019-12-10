import React from 'react';
import styles from './Vote.scss';
import A from './../../../containers/jobseeker/CvMaker1/Star'

class Vote extends React.Component {

    constructor() {
        super();
        this.state = {
            data : [
                {
                    name: 'Toàn',
                }
            ]

        }
    }
    handleRemove = (index) => {
        this.state.data.splice(index, 1);
        this.setState({ data: this.state.data })
        
    }
    render() {
        return (
            <div className={styles.voteRow}>
                {this.state.data.map((item, index) => (
                    <div className={styles.vote}>
                        <b contentEditable="true" className={styles.dataName}>{item.name}</b>
                        <A />
                        <div className={styles.block_actions}>
                            <button className={` ${styles.delAction}`} onClick={() => this.handleRemove(index)}>Xóa</button>
                            
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default Vote;