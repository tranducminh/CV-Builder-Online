import React, { Component } from 'react';
import styles from './Test.scss';
import Education from './Education';

export default class ExperienceList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    timeStart: '',
                    timeEnd: '',
                    trainingUnit: '',
                    specialized: '',
                    level: '',
                    graduationType: ''
                }
            ]
        }
        this.initialData = {
            timeStart: '',
            timeEnd: '',
            trainingUnit: '',
            specialized: '',
            level: '',
            graduationType: ''
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
                    <Education data={item} index={index} addInput={this.addInput} handleRemove={this.handleRemove} onChange={this.onChange} />
                ))}
            </div>
        )
    }
}
