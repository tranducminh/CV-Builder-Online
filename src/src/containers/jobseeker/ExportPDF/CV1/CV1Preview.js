import React from 'react';
import {PDFViewer, StyleSheet} from '@react-pdf/renderer';
import CV1 from './CV1';

const CV1Preview = () => {
    const style = {
        container: {
            width: '100%',
            height: 'auto',
            overflow: 'auto'
        }
    }
    const styles = StyleSheet.create({
        container: {
            width: '100%',
            // height: 1000,
            textOverflow: 'auto'
        }
    })
    return (
        <div style = {style.container}>
            <PDFViewer  children = {<CV1 />} width="100%" height={550} >
            
            </PDFViewer>
        </div>
    )
}

export default CV1Preview;  