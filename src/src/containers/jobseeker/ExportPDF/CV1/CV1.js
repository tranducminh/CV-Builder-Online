import React, { Component } from 'react';
import font from '../../../../assets/font/JosefinSans-Regular.ttf';
import avt from '../../../../assets/image/avt.png';
import {
    Page,
    Text,
    View,
    Document,
    StyleSheet,
    Image,
    Font
} from "@react-pdf/renderer";

export default class CV1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cvType: null,
            cv_info: {
                title: "",
                jobPurpose: "",
                email: "",
                fullname: "",
                birthday: "",
                sex: "",
                image: "",
                phone: "",
                address: ""
            },
            educations: [
                {
                    timeStart: "",
                    timeEnd: "",
                    specialized: "",
                    level: 0,
                    graduationType: ""
                }
            ],
            experiences: [
                {
                    timeStart: "",
                    timeEnd: "",
                    jobPosition: "",
                    jobDescription: "",
                    achievements: ""
                }
            ],
            languages: [
                {
                    lgName: "",
                    language_skills: [
                        {
                            skillName: "",
                            level: 0
                        }
                    ]
                }
            ],
            itSkills: {
                it_skill_infos: [
                    {
                        skillName: "",
                        level: 0
                    }
                ]
            }
        }
    }
    render() {
        Font.register({ family: 'Roboto', src: font, fontStyle: 'normal', fontWeight: 'normal' });

        const styles = StyleSheet.create({
            container: {
                fontFamily: 'Roboto',
                fontSize: 20
            },
            header: {
                padding: 50,
                backgroundColor: '#7B9CFF',
                position: 'relative',
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center'
            },
            avt: {
                width: 100,
                height: 100,
                border: 2,
                borderColor: '#000000',
                borderStyle: 'solid',
                transform: '10 10'
            }

        })

        return (
            <Document>
                <Page style={styles.container}>
                    <View style={styles.header}>
                        <Image style={styles.avt} src={avt}></Image>
                        <Text>Trần Đức Minh</Text>
                    </View>
                </Page>
            </Document>
        )
    }
}
