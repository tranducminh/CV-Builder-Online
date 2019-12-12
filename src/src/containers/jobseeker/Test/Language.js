import React from 'react';
import styles from './Test.scss';
import Vote from '../../../components/UI/Vote/Vote'

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
                    info3: 'Loại tốt nghiệp'
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

        // this.handleRemove = this.handleRemove.bind(this);

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
    handleRemove(index){
        debugger;
        let data = this.state.data.splice(index, 1);
        console.log(data);
        this.setState({ data: data })
    }
    handleSubmit = (e) => {
        console.log(this.state);
    }
    render() {
        return (
            <div>
                {this.state.data.map((item, index) => (
                    <div className={`row ${styles.row}`}>

                        <Vote name="Nghe" />
                        <Vote name="Nói"/>
                        <Vote name="Đọc"  />
                        <Vote name="Viết" />

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