import React from 'react';
import styles from './Test.scss';
class CVMaker extends React.Component {

    constructor() {
        super();
        this.state = {
            data: [
                {
                    time: '4/11',
                    time1: '7/11',
                    info: 'Dai hoc uet',
                    info1: 'chuyen nganh cntt',
                    info2: 'khoa dom gai'
                }
            ]

        }
        this.initialData = {
            time: '4/11',
            time1: '7/11',
            info: 'Dai hoc uet',
            info1: 'chuyen nganh cntt',
            info2: 'khoa dom gai'
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
    handleRemove = (index)=>{
        this.state.data.splice(index, 1);
        this.setState({data: this.state.data})
    }
    handleSubmit=(e) => {
        console.log(this.state);
    }
    render() {
        return (
            <div>
                {this.state.data.map((item, index) => (
                    <div className={styles.row1}>
                        <div className={styles.row1__time}>
                            <input name="time" contentEditable="true" placeholder={item.time} onChange={this.onChange} />-
                    <input name="time1" contentEditable="true" placeholder={item.time1} onChange={this.onChange} />
                        </div>
                        <div className={styles.row1__info}>
                            <input name="info" contentEditable="true" placeholder={item.info} onChange={this.onChange} />
                            <input name="info1" contentEditable="true" placeholder={item.info1} onChange={this.onChange} />
                            <input name="info2" contentEditable="true" placeholder={item.info2} onChange={this.onChange} />
                        </div>
                        <button onClick={()=> this.handleRemove(index)}>remove</button>
                    </div>
                    
                ))}
                <button onClick={this.addInput}>add</button>
                <button onClick={(e) => this.handleSubmit(e)}>Submit</button>
                
            </div>
        )
    }
}

export default CVMaker;