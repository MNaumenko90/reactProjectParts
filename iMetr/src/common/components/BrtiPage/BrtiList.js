import React from 'react';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';



const styles = theme => ({
    root: theme.root,
    brtiListSection:{
        borderTop:'0',
        //padding: '0 30px'
    },
    brtiList:{
        margin: '0 auto',
        maxWidth: '1200px',
        width:'100%',
        padding:'0 12px',
        [theme.breakpoints.down(1200)]: {
            padding:'0 10px',
        },

    },
    brtiListHeader:{
        padding: '0',
        fontWeight:'100',
        fontSize: '24px'

    },
    brtiListContent:{
        padding: '0 0 27px 0',
        fontWeight:'300',
        fontSize: '16px',
        lineHeight: '22px'

    },
});

const BrtiList = ({classes}) => (
    <section className={classes.brtiListSection}>
        <div className={classes.brtiList}>
            <Typography className={classes.brtiListHeader} align={'left'} type="display1" component={"h2"}>
                Список агентств по регистрации
            </Typography>
            <Typography className={classes.brtiListContent} align={'left'} type="display1" component={"h2"}>
                В данном разделе размещен полный список нотариусов Республики Беларусь. Для удобства поиска можно воспользоваться быстрым фильтром, начав вводить фамилию/имя нотариуса или название нотариальной конторы/нотариального бюро, или название нотариального округа.  Также по размещенным ниже ссылкам можно получить доступ к списку нотариусов соответствующего нотариального округа.
            </Typography>
        </div>
    </section>
);

export default withStyles(styles)(BrtiList);