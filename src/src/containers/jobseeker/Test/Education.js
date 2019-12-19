import React from 'react';
import styles from './Test.scss';
import A from '../CvMaker1/Star'

class HocVan extends React.Component {

    constructor() {
        super();
        this.state = {
            timeStart: '',
            timeEnd: '',
            trainingUnit: '',
            specialized: '',
            level: '',
            graduationType: ''
        }
        this.initialData = {
            timeStart: '4/11',
            timeEnd: '7/11',
            trainingUnit: 'Đơn Vị Đào Tạo',
            specialized: 'Chuyên ngành',
            level: 'Trình độ',
            graduationType: 'Loại tốt nghiệp'
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
                    <textarea className={`${styles.input1}`} name="timeStart" value={this.props.data.timeStart} placeholder={this.initialData.timeStart} onChange={this.onChange} />-
                    <textarea className={`${styles.input1}`} name="timeEnd" value={this.props.data.timeEnd} placeholder={this.initialData.timeEnd} onChange={this.onChange} />

                </div>
                <div className={`col-md-9  ${styles.row1__info}`}>
                    <textarea className={`${styles.input2}`} name="trainingUnit" value={this.props.data.trainingUnit} placeholder={this.initialData.trainingUnit} onChange={this.onChange} />
                    <span>Chuyên ngành</span>
                    <textarea className={`${styles.input2}`} name="specialized" value={this.props.data.specialized} placeholder={this.initialData.specialized} onChange={this.onChange} />
                    <span>Trình độ</span>
                    <textarea className={`${styles.input2}`} name="level" value={this.props.data.level} placeholder={this.initialData.level} onChange={this.onChange} />
                    <span>Loại tốt nghiệp</span>
                    <textarea className={`${styles.input2}`} name="graduationType" value={this.props.data.graduationType} placeholder={this.initialData.graduationType} onChange={this.onChange} />
                </div>
                <div className={styles.block_actions}>
                    <button className={`del ${styles.actions}`} onClick={this.handleRemove}>-Xóa</button>
                    <button className={`add ${styles.actions}`} onClick={this.addInput}>+Thêm</button>
                </div>
            </div>
        )
    }
}

export default HocVan;