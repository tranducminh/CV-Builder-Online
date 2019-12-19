import React, { Component } from 'react'
import Vote from './Vote';
import styles from './Vote.scss'

export default class VoteList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    skillName: '',
                    level: 0
                }
            ]
        }
        this.initialData = this.props.initialData
    }

    addInput = (index) => {
        let data = this.state.data;
        data.splice(index + 1, 0, this.initialData)
        this.setState({
            data: data
        })
        this.props.onChange(this.state.data)
    }
    handleRemove = (index) => {
        let data = this.state.data;
        data.splice(index, 1);
        this.setState({ data: data })
        this.props.onChange(this.state.data)
    }
    onChange = (data, index) => {
        let state = this.state.data;
        state[index] = data;
        this.setState({
            data: state
        })
        this.props.onChange(this.state.data)
    }

    render() {
        return (
            <div className={styles.voteRow}>
                {this.state.data.map((item, index) => (
                    <Vote data={item} index={index} addInput={this.addInput} handleRemove={this.handleRemove} onChange={this.onChange} initialData={this.initialData} />
                ))}
            </div>
        )
    }
}