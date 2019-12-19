import React from 'react';
import styles from './Vote.scss';
import A from './../../../containers/jobseeker/CvMaker1/Star'

class Vote extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            skillName: this.props.data.skillName,
            level: this.props.data.level
        }
        this.initialData = this.props.initialData
    }
    handleRemove = () => {
        this.props.handleRemove(this.props.index)
    }
    addInput = () => {
        this.props.addInput(this.props.index)
    }

    onChange = (level) => {
        this.setState({
            level: level
        })
        this.props.onChange({
            skillName: this.props.data.skillName,
            level: level
        },
            this.props.index);
    }
    onHandleChange = (event) => {
        let target = event.target
        let value = target.value
        let name = target.name

        this.setState({
            [name]: value
        })
        let data = this.state;
        data[name] = value;
        // console.log(data);
        this.props.onChange(data, this.props.index)
    }

    render() {
        return (
            <div className={styles.vote}>
                <input contentEditable="true" className={styles.dataName} onChange={this.onHandleChange} name="skillName" value={this.props.data.skillName} placeholder={this.initialData.skillName}/>
                <A onChange={this.onChange} value={this.props.data.level} />
                <div className={styles.block_actions}>
                    <button className={styles.addAction} onClick={this.addInput}>+</button>
                    <button className={styles.delAction} onClick={this.handleRemove}>x</button>
                </div>
            </div>
        )
    }
}

export default Vote;