import React from 'react';
import styles from './Test.scss';
import A from './../CvMaker1/Star'

class Education extends React.Component {
    
    constructor() {
        super();
        this.state = {
            data: [
                {
                    id: '1',
                    time: '4/11',
                    time1: '7/11',
                    info: 'Đơn Vị Đào Tạo',
                    info1: 'Chuyên ngành',
                    info2: 'Trình độ',
                    info3 : 'Loại tốt nghiệp'
                },
            

            ]

        }

        this.initialData = {
            time: '4/11',
            time1: '7/11',
            info: 'Đơn Vị Đào Tạo',
            info1: 'Chuyên ngành',
            info2: 'Trình độ'
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

                    <p className={`${styles.changeline}`}>
                    <b>Nghe</b>
                    <A/>
                  </p>
                  <p className={`${styles.changeline}`}>
                    <b>Nói</b>
                    <A />
                  </p>
                  <p className={`${styles.changeline}`}>
                    <b>Đọc</b>
                    <A />
                  </p>
                  <p className={`${styles.changeline}`}>
                    <b>Viết</b>
                    <A />
                  </p>
                  <p className={`${styles.changeline}`}>
                    <b>Địa chỉ</b>
                    <A />
                  </p>
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

export default Education;