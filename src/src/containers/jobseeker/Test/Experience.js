import React from 'react';
import styles from './Test.scss';
class Experience extends React.Component {

    constructor() {
        super();
        this.state = {
            data: [
                {
                    id: '1',
                    time: '4/11',
                    time1: '7/11',
                    info: 'Nhập Chức Danh',
                    info1: 'Mô tả công việc',
                    info2: 'Thành tích đạt được'
                },
            

            ]

        }

        this.initialData = {
            time: '4/11',
            time1: '7/11',
            info: 'Nhập Chức Danh',
            info1: 'Mô tả công việc',
            info2: 'Thành tích đạt được'
        }



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

                        <div className={` col-md-3  ${styles.row1__time}`}>
                            <textarea className={`${styles.input1}`} name="time" contentEditable="true" placeholder={item.time} onChange={this.onChange} />-
                            <textarea className={`${styles.input1}`} name="time1" contentEditable="true" placeholder={item.time1} onChange={this.onChange} />

                        </div>
                        <div className={`col-md-9  ${styles.row1__info}`}>
                            <textarea className={`${styles.input2}`} name="info" contentEditable="true" placeholder={item.info} onChange={this.onChange} />
                            <span>Mô tả công việc</span>
                            <textarea className={`${styles.input2}`} name="info1" contentEditable="true" placeholder={item.info1} onChange={this.onChange} />
                            <span>Thành tích đạt được</span>
                            <textarea className={`${styles.input2}`} name="info2" contentEditable="true" placeholder={item.info2} onChange={this.onChange} />
                        </div>
                        <div className={styles.block_actions}>
                            <button className={`del ${styles.actions}`} onClick={() => this.handleRemove(index)}>-Xóa</button>
                            <button className={`add ${styles.actions}`} onClick={this.addInput}>+Thêm</button>
                        </div>
                    </div>
                    
                ))}
                

                <button className={styles.actions} onClick={(e) => this.handleSubmit(e)}>Submit</button>

            </div>
        )
    }
}

export default Experience;