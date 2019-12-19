import React from 'react';
import avt from './../../../assets/image/avt.png';
import EducationList from '../Test/EducationList';
import ExperienceList from './../Test/ExperienceList'
import LanguageList from './../Test/LanguageList'
import Computer from './../Test/Computer';
import styles from './CvMaker1.scss';
import InputWithTitle from '../../../components/UI/InputForm/WithTitle/Input';
import Title from '../../../components/UI/Title/Type1/Title';
import CV1 from '../ExportPDF/CV1/CV1';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer'
import ReactPDF from '@react-pdf/renderer';
class CVMaker1 extends React.Component {

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
        return (
            <div className={`${styles.container}`}>

                <div className={styles.row}>
                    <div className={styles.row1}>
                        <div className={styles.row_left}>
                            <div className={styles.bg_avt}>
                                <img className={styles.avt_img} src={avt} />
                                <div className={`${styles.btnChange}`}>
                                    <i className="fa fa-camera"></i>
                                    Chọn ảnh
                        </div>
                            </div>
                        </div>
                        <div className={styles.row_right}>
                            <span className={`${styles.line}`}></span>
                            <h1>Nguyễn Tiến Toàn</h1>

                            <h4 contentEditable="true" placeholder="Nguyễn Tiến Toàn">Nguyễn Tiến Toàn</h4>
                            <textarea className={` ${styles.change2}`} name="info" contentEditable="true" placeholder="Nhập mục tiêu nghề nghiệp" onChange={this.onChange} />
                        </div>
                    </div>
                    <div className={styles.row2}>
                        <div className={styles.row_left}>
                            <div className={`box ${styles.CVMaker__left__info}`}>
                                <Title icon="fas fa-mobile-alt" title="THÔNG TIN" />
                                <div className={`${styles.CVMaker__left__info__job}`}>
                                    <InputWithTitle title="Giới tính" placeholder="Nam" />
                                    <InputWithTitle title="Ngày sinh" placeholder="16-07-1999" />
                                    <InputWithTitle title="Email" placeholder="toanleaderuet@gmail.com" />
                                    <InputWithTitle title="Điện thoại" placeholder="0368604656" />
                                    <InputWithTitle title="Địa chỉ" placeholder="63/1/33 Trần Quốc Vượng" />
                                </div>
                            </div>
                            <div className={`box ${styles.CVMaker__left__like}`}>
                                <Title icon="fas fa-laptop" title="TIN HỌC" />
                                <Computer />

                            </div>
                        </div>
                        <div className={styles.row_right}>
                            <div className={`box ${styles.CVMaker__left__like}`}>
                                <Title icon="fas fa-briefcase" title="KINH NGHIỆM" />
                                <ExperienceList />
                            </div>
                            <div className={`box ${styles.CVMaker__left__like}`}>
                                <Title icon="fas fa-briefcase" title="HỌC VẤN" />
                                <EducationList />
                            </div>
                            <div className={`box ${styles.CVMaker__left__like}`}>
                                <Title icon="fas fa-headphones-alt" title="NGOẠI NGỮ" />
                                <LanguageList />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    {/* <PDFDownloadLink document={<CV1 />} fileName="somename.pdf">
                        {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
                    </PDFDownloadLink> */}
                </div>

            </div >
        )
    }
}

export default CVMaker1;