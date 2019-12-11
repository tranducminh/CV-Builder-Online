import React from 'react';
import styles from './Test.scss';
class Experience extends React.Component {

    constructor() {
        super();
        this.state = {
            timeStart: '',
            timeEnd: '',
            jobPosition: '',
            jobDescription: '',
            achievements: ''
        }

        this.initialData = {
            timeStart: '4/11',
            timeEnd: '7/11',
            jobPosition: 'Nhập Chức Danh',
            jobDescription: 'Mô tả công việc',
            achievements: 'Thành tích đạt được'
        }



    }
    handleRemove = () => {
        this.props.handleRemove(this.props.index)
    }
    addInput = () => {
        this.props.addInput(this.props.index)
    }
    onChange = (event) => {
        let target = event.target
        let value = target.value
        let name = target.name

        this.setState({
            [name]: value
        })
        let data = this.state;
        data[name] = value; 
        this.props.onChange(data, this.props.index)

    }

    render() {
        return (

            <div className={`row ${styles.row}`}>

                <div className={` col-md-3  ${styles.row1__time}`}>
                    <textarea className={`${styles.input1}`} name="timeStart" value={this.props.data.timeStart} onChange={this.onChange} />-
                    <textarea className={`${styles.input1}`} name="timeEnd" value={this.props.data.timeEnd} onChange={this.onChange} />

                </div>
                <div className={`col-md-9  ${styles.row1__info}`}>
                    <textarea className={`${styles.input2}`} name="jobPosition" value={this.props.data.jobPosition} onChange={this.onChange} />
                    <span>Mô tả công việc</span>
                    <textarea className={`${styles.input2}`} name="jobDescription" value={this.props.data.jobDescription} onChange={this.onChange} />
                    <span>Thành tích đạt được</span>
                    <textarea className={`${styles.input2}`} name="achievements" value={this.props.data.achievements} onChange={this.onChange} />
                </div>
                <div className={styles.block_actions}>
                    <button className={`del ${styles.actions}`} onClick={this.handleRemove}>-Xóa</button>
                    <button className={`add ${styles.actions}`} onClick={this.addInput}>+Thêm</button>
                </div>
            </div>

        )
    }
}

export default Experience;