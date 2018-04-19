import React from 'react';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper'
import classNames from 'classnames';

const styles = theme => ({
    root: theme.root,
    houseListSection:{
        borderTop:'1px solid #e1e1e1',
        padding: '30px',
        backgroundColor: '#f3f5f6'
    },
    houseList:{
        margin: '0 auto',
        maxWidth: '1200px',
        width:'100%',
        [theme.breakpoints.down(1200)]: {
            padding:'0 10px',
        },

    },
    houseListHeader:{
        fontWeight:'100',
        fontSize: '24px'

    },
    houseListContent:{
        borderBottom:'1px solid #ebebeb',
        '&:last-child':{
            borderBottom:'none',
        },
        fontFamily: `'Exo 2'`,
        fontSize:16,
        '& span': {
            color: '#9299a2',
            fontWeight:100,
            textTransform:'uppercase'

        },
        '& a': {
            color: '#519be2',
            textDecoration:'none',
        },
        '& p': {
            margin:0,
            '& span': {
                color: '#9299a2',
            },
        },
        '& $viewAllMenu': {
            textDecoration:'underline',
        },
    },
    asideBlock: {
        cursor:'pointer',
        marginTop:'15px',
        fontFamily: `'Exo 2'`,
        '& div':{
            padding:'3px 5px'
        }
    },
});

const HouseList = ({classes}) => (
    <section className={classes.houseListSection}>
        <div className={classes.houseList}>
            <Typography className={classes.houseListHeader} align={'left'} type="display1" component={"h2"}>
                Перечень домов, находящихся на обслуживании РСЦ
            </Typography>
            <Paper className={classes.asideBlock}>
            <Grid container className={classNames(classes.root,classes.houseListContent)} spacing={16}>
                <Grid item xs={12} sm={12} md={3}><span>Наименование улицы</span></Grid>
                <Grid item xs={12} sm={12} md={9}><span>Номера домов</span></Grid>
            </Grid>
            <Grid container className={classNames(classes.root,classes.houseListContent)} spacing={16}>
                <Grid item xs={12} sm={12} md={3}><p>ул. Слободская</p></Grid>
                <Grid item xs={12} sm={12} md={9}><p>135, 137, 141, 143, 145, 149, 153, 155, 157, 159, 163, 165, 167, 173, 175, 177, 89, 91, 95, 107, 105, 111, 113, 115, 117, 119, 121, 125, 127</p></Grid>
            </Grid>
            <Grid container className={classNames(classes.root,classes.houseListContent)} spacing={16}>
                <Grid item xs={12} sm={12} md={3}><p>ул. Ежи Гедройца</p></Grid>
                <Grid item xs={12} sm={12} md={9}><p>10, 12, 18</p></Grid>
            </Grid>
            <Grid container className={classNames(classes.root,classes.houseListContent)} spacing={16}>
                <Grid item xs={12} sm={12} md={3}><p>пр-д Слободской</p></Grid>
                <Grid item xs={12} sm={12} md={9}><p>4, 6, 8, 10, 14, 18, 22, 24, 26, 28</p></Grid>
            </Grid>
            <Grid container className={classNames(classes.root,classes.houseListContent)} spacing={16}>
                <Grid item xs={12} sm={12} md={3}><p>пр-т Дзержинского</p></Grid>
                <Grid item xs={12} sm={12} md={9}><p>129</p></Grid>
            </Grid>
            <Grid container className={classNames(classes.root,classes.houseListContent)} spacing={16}>
                <Grid item xs={12} sm={12} md={3}><p>ул. Сергея Есенина</p></Grid>
                <Grid item xs={12} sm={12} md={9}><p>4, 6, 6/1, 6/2, 6/3, 8, 16, 18, 20, 22, 3/1, 3/2, 7, 9, 11, 15, 19, 19А, 19Б, 23/1, 23/2, 25/1, 25/2, 29, 31/1, 31/2, 31/3, 33/2, 35/1, 35/2, 40, 42</p></Grid>
            </Grid>
            <Grid container className={classNames(classes.root,classes.houseListContent)} spacing={16}>
                <Grid item xs={12} sm={12} md={3}><p>ул. Космонавтов</p></Grid>
                <Grid item xs={12} sm={12} md={9}><p>3/1, 3/2, 3/3, 3/4, 3/5, 3/6, 4, 5/1, 6, 7/1, 7/2, 8 ,9/1, 9/2, 10, 11, 12, 13/1, 14, 15/1, 16, 17, 18, 23/1, 23/2, 23/3, 25, 27, 33, 37, 41, 43, 47, 30, 32, 34, 36, 38, 38/2, 40/1, 40/2, 42, 44, 46, 48</p></Grid>
            </Grid>
            <Grid container className={classNames(classes.root,classes.houseListContent)} spacing={16}>
                <Grid item xs={12} sm={12} md={3}><p>ул. Курганная</p></Grid>
                <Grid item xs={12} sm={12} md={9}><p>1 ,2, 3, 4, 5, 5А, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 16А, 17, 18, 19, 20, 21, 22, 23А, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 39А, 40, 41, 42, 43, 44, 45, 45А, 46, 48, 57, 59, 61, 63, 65, 67, 69, 71, 73, 75, 79, 81, 83, 85, 87, 89</p></Grid>
            </Grid>
            </Paper>
        </div>
    </section>
);

export default withStyles(styles)(HouseList);