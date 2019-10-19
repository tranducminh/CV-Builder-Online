import React from 'react';
import styles from '../SearchBar/SearchBar.scss';
import Input from '../UI/Input/Input';
import Select from '../UI/Select/Select';
import Button from '../UI/Button/Button'
const searchBar = (props) => {


    return (
        <div id="box-search-job-home" className={`${styles.box}`}>
            <div className={`container ${styles.SearchBarContainer}`}>
                <div className={`${styles.SearchBar}`}>
                    <div className={` firtRow ${styles.FirstRow}`}>
                        <div className={` row col-sm-10 ${styles.searchInput}`}>
                            {/* <div className={` ${styles.TitleSearchContainer}`}> */}
                                <Input
                                    className={`${styles.TitleSearch}`}
                                    iconClass="fa fa-search"
                                    label=""
                                    elementType="input"
                                    elementConfig={{
                                        type: 'text',
                                        placeholder: 'Tên công việc, vị trí bạn muốn ứng tuyển ...',
                                    }}
                                />
                            {/* </div> */}

                            <Select
                                elementConfig={{
                                    type: 'button',

                                }}
                            />
                            <Select
                                elementConfig={{
                                    type: 'button',


                                }}
                            />

                        </div>
                        <div className={`col-sm-2 ${styles.buttonSearch}`}>
                            <Button
                                elementConfig={{
                                    type: 'button',

                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default searchBar;