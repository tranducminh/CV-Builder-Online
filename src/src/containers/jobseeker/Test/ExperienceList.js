import React, { Component } from 'react';
import styles from './Test.scss';
import Experience from './Experience';

export default class ExperienceList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    timeStart: '',
                    timeEnd: '',
                    jobPosition: '',
                    jobDescription: '',
                    achievements: ''
                }
            ]
        }
        this.initialData = {
            timeStart: '',
            timeEnd: '',
            jobPosition: '',
            jobDescription: '',
            achievements: ''
        }
    }

    addInput = (index) => {
        let data = this.state.data;
        data.splice(index + 1, 0, this.initialData)
        this.setState({
            data: data
        })
    }
    handleRemove = (index) => {
        let data = this.state.data;
        data.splice(index, 1);
        this.setState({ data: data })
    }
    onChange = (data, index) => {
        let state = this.state.data;
        state[index] = data;
        this.setState({
            data: state
        })
        console.log(this.state);
    }

    render() {
        return (
            <div>
                {this.state.data.map((item, index) => (
                    <Experience data = {item} index={index} addInput={this.addInput} handleRemove={this.handleRemove} onChange={this.onChange} />
                ))}
            </div>
        )
    }
}
