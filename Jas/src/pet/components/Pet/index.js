
import React from 'react';
import injectSheet from 'react-jss';
import { Row, Col , Button } from 'antd';

//components
import FormCart from '../../containers/Pet/FormEdit';
import List from '../../containers/Pet/List';

//images
import icon from './assets/images/icon.png';


const styles = {
    wrapper: {
        maxWidth:1077,
        margin:'0 auto',
    },
    pageTitle: {
        border: '1px solid #ffffff',
        backgroundColor: '#f7f7f7',
        padding:'32px 0',
        marginBottom:35,
        '& h2': {
            textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
            fontFamily:'Quicksand-Light',
            lineHeight: '42px',
            fontWeight:300,
            marginBottom:0,
        },
    },
    borderRight: {
        borderRight:'1px solid #d2d2d2',
    },
    createSide: {
        '& h3': {
            marginTop:17,
        },
        '& button': {
            marginBottom:50,
        },
    },
};


class Login extends React.Component {

    render() {
        const {classes} = this.props;

        return (
            <section>
                <div className={classes.pageTitle}>
                    <div className={classes.wrapper}>
                        <Row type="flex" align="middle">
                            <Col lg={2} md={2} sm={2} xs={12} align="center">
                                <img src={icon} alt={'Joint Animal Services'}/>
                            </Col>
                            <Col lg={10} md={10} sm={10} xs={12}>
                                <h2>
                                    License Index
                                </h2>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className={classes.wrapper}>
                    <Row type="flex">
                        <Col lg={6} md={6} sm={12} xs={12}>
                            <Row type="flex" className={classes.loginSide}>
                                <Col >
                                    <List/>
                                    <FormCart/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </section>
        );
    }
};

export default injectSheet(styles)(Login);
