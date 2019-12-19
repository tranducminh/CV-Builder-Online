import React from 'react';
import styles from './Test.scss';
import VoteList from '../../../components/UI/Vote/VoteList'

class Education extends React.Component {

    constructor() {
        super();
        this.state = {
            lgName: "",
            language_skills: []
        }
        this.initialData = {
            lgName: "",
            language_skills: [
                {
                    skillName: "Nghe",
                    level: 0
                }
            ]
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
    onVoteChange = (data) => {
        this.setState({
            language_skills: data
        })
        this.props.onChange(this.state, this.props.index)
    }
    render() {
        return (
            <div>
                <div className={`row ${styles.row}`}>
                    <input className={styles.title} placeholder="Tiếng anh" value={this.props.data.lgName} onChange={this.onChange} name="lgName"/>
                    <VoteList initialData = {this.initialData.language_skills[0]} onChange={this.onVoteChange}/>
                    <div className={styles.block_actions}>
                        <button className={`del ${styles.actions}`} onClick={this.handleRemove}>-Xóa</button>
                        <button className={`add ${styles.actions}`} onClick={this.addInput}>+Thêm</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Education;