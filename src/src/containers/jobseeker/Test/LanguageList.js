import React, { Component } from 'react';
import styles from './Test.scss';
import Language from './Language';

export default class LanguageList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    lgName: "",
                    language_skills: []
                }
            ]
        }
        this.initialData = {
            lgName: "",
            language_skills: []
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
                    <Language data={item} index={index} addInput={this.addInput} handleRemove={this.handleRemove} onChange={this.onChange} />
                ))}
            </div>
        )
    }
}
