import React from 'react';
import styles from './Test.scss';
import Vote from '../../../components/UI/Vote/Vote';

class Computer extends React.Component {
    
    constructor() {
        super();
        this.state = {
            data: []

        }

        this.initialData = {}
    }
    onChange = (event) => {
        let target = event.target
        let value = target.value
        let name = target.name

        this.setState({
            [name]: value
        })

    }

    


    addInput = () => {
        this.setState({
            data: [
                ...this.state.data,
                this.initialData
            ]
        })
    }
    handleRemove = (index) => {
        this.state.data.splice(index, 1);
        this.setState({ data: this.state.data })
    }
    handleSubmit = (e) => {
        console.log(this.state);
    }
    render() {
        return (
            <div>
                {this.state.data.map((item, index) => (
                    <div className={`row ${styles.row}`}>
                  <Vote name="Nghe"/>
                  <Vote name="Nói"/>
                  <Vote name="Đọc"/>
                  <Vote name="Viết"/>
                 
                        <div className={styles.block_actions}>
                            <button className={`del ${styles.actions}`} onClick={() => this.handleRemove(index)}>-Xóa</button>
                            <button className={`add ${styles.actions}`} onClick={this.addInput}>+Thêm</button>
                        </div>
                    </div>

                ))}


                {/* <button className={styles.actions} onClick={(e) => this.handleSubmit(e)}>Submit</button> */}

            </div>
        )
    }
}

export default Computer;