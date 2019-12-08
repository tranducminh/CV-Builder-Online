import React from 'react';
import avt from './../../../assets/image/avt.png';
import Education from '../Test/Education';
import Experience from './../Test/Experience'
import HocVan from './../Test/HocVan'
import styles from './CvMaker1.scss';
import A from './Star';
class CVMaker1 extends React.Component {

  onClick = () => {

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
          {/* <A /> */}
          <div className={styles.row2}>
            <div className={styles.row_left}>
              <div className={`box ${styles.CVMaker__left__info}`}>
                <div className={`icon ${styles.icon}`}>
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <div className={`nameBox ${styles.CVMaker__left__info__name}`}>
                  <span className={`${styles.line1}`}></span>
                  <h3>THÔNG TIN</h3>
                </div>
                <div className={`${styles.CVMaker__left__info__job}`}>
                  <p className={`${styles.changeline}`}>
                    <b>Giới tính</b>
                    <input className={`change ${styles.change1}`} placeholder="Nam" contenteditable="true" datatype="select" />
                  </p>
                  <p className={`${styles.changeline}`}>
                    <b>Ngày sinh</b>
                    <input className={`change ${styles.change1}`} placeholder="16-07-1999" contenteditable="true" datatype="select" />
                  </p>
                  <p className={`${styles.changeline}`}>
                    <b>Email</b>
                    <input className={`change ${styles.change1}`} placeholder="toanleaderuet@gmail.com" contenteditable="true" datatype="select" />
                  </p>
                  <p className={`${styles.changeline}`}>
                    <b>Điện thoại</b>
                    <input className={`change ${styles.change1}`} placeholder="0368604656" contenteditable="true" datatype="select" />
                  </p>
                  <p className={`${styles.changeline}`}>
                    <b>Địa chỉ</b>
                    <textarea className={`change ${styles.change1}`} placeholder="63/1/33 Trần Quốc Vượng" contenteditable="true" datatype="select" />
                  </p>
                </div>
              </div>
              <div className={`box ${styles.CVMaker__left__like}`}>
                <div className={`icon ${styles.icon}`}>
                  <i className="fas fa-laptop"></i>
                </div>

                <div className={`nameBox ${styles.CVMaker__left__info__name}`}>
                  <span className={`${styles.line1}`}></span>
                  <h3>TIN HỌC</h3>
                </div>
                <div className={`${styles.CVMaker__left__info__job}`}>
                  <p className={`${styles.changeline}`}>
                    <b>Word</b>
                    <A />
                  </p>
                  <p className={`${styles.changeline}`}>
                    <b>Excel</b>
                    <A />
                  </p>
                  <p className={`${styles.changeline}`}>
                    <b>Power Point</b>
                    <A />
                  </p>
                  <p className={`${styles.changeline}`}>
                    <b>Outlook</b>
                    <A />
                  </p>
                  <p className={`${styles.changeline}`}>
                    <b>Địa chỉ</b>
                    <A />
                  </p>
                </div>
              </div>
              <div className={styles.addblock}>
                <button >Add block</button>
                <ul className={styles.addBlockItem} onClick={this.onClick} >
                  <li>
                    <i class="fas fa-skiing"></i>
                    <span className={styles.title}>Skill</span>
                  </li>
                  <li>
                    <i class="fas fa-file-alt"></i>
                    <span className={styles.title}>Text</span>
                  </li>

                </ul>
              </div>
            </div>
            <div className={styles.row_right}>
              <div className={`box ${styles.CVMaker__left__like}`}>
                <div className={`icon ${styles.icon}`}>
                  <i className="fas fa-briefcase"></i>
                </div>

                <div className={`nameBox ${styles.CVMaker__left__info__name}`}>
                  <span className={`${styles.line1}`}></span>
                  <h3>KINH NGHIỆM</h3>
                </div>
                {/* <div className={`${styles.CVMaker__left__info__job}`}>
                                <input className={`change ${styles.change2}`} placeholder="Nhập sở thích" contenteditable="true" />
                            </div> */}
                <Experience name="" />
              </div>
              <div className={`box ${styles.CVMaker__left__like}`}>
                <div className={`icon ${styles.icon}`}>
                  <i className="fas fa-briefcase"></i>
                </div>

                <div className={`nameBox ${styles.CVMaker__left__info__name}`}>
                  <span className={`${styles.line1}`}></span>
                  <h3>HỌC VẤN</h3>
                </div>
                {/* <div className={`${styles.CVMaker__left__info__job}`}>
                                <input className={`change ${styles.change2}`} placeholder="Nhập sở thích" contenteditable="true" />
                            </div> */}
                <HocVan name="" />
              </div>
              <div className={`box ${styles.CVMaker__left__like}`}>
                <div className={`icon ${styles.icon}`}>
                  <i className="fas fa-headphones-alt"></i>
                </div>

                <div className={`nameBox ${styles.CVMaker__left__info__name}`}>
                  <span className={`${styles.line1}`}></span>
                  <h3>TIẾNG ANH</h3>
                </div>

                <Education />
              </div>
              <div className={styles.addblock}>
                <button >Add block</button>
                <ul className={styles.addBlockItem} onClick={this.onClick} >
                  <li>
                    <i class="fas fa-skiing"></i>
                    <span className={styles.title}>Skill</span>
                  </li>
                  <li>
                    <i class="fas fa-file-alt"></i>
                    <span className={styles.title}>Text</span>
                  </li>

                </ul>
              </div>
              <div className={styles.addblock}>
                <button >Add block</button>
                <ul className={styles.addBlockItem} onClick={this.onClick} >
                  <li>
                    <i class="fas fa-skiing"></i>
                    <span className={styles.title}>Skill</span>
                  </li>
                  <li>
                    <i class="fas fa-file-alt"></i>
                    <span className={styles.title}>Text</span>
                  </li>

                </ul>
              </div>
              
            </div>

          </div>
        </div>

      </div>
    )
  }
}

export default CVMaker1;