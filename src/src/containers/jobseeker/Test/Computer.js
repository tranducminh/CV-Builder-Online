import React from 'react';
import styles from './Test.scss';
import VoteList from '../../../components/UI/Vote/VoteList';

class Computer extends React.Component {

    constructor() {
        super();
        this.state = {
            itSkills: [
                {
                    skillName: "",
                    level: 0
                }
            ]
        }

        this.initialData = {
            skillName: "Excel",
            level: 0
        }
    }
    onChange = (data) => {
        this.setState({
            itSkills: data
        })
    }

    render() {
        return (
            <div>
                <div className={`row ${styles.row}`}>
                    <VoteList initialData={this.initialData} onChange={this.onChange} />
                </div>
            </div>
        )
    }
}

export default Computer;