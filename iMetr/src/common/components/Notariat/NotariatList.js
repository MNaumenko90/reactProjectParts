import React from 'react';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';



const styles = theme => ({
    root: theme.root,
    notariusListSection:{
        borderTop:'1px solid #e1e1e1',
        padding: '0 30px'
    },
    notariusList:{
        margin: '0 auto',
        maxWidth: '1200px',
        width:'100%',
        [theme.breakpoints.down(1200)]: {
            padding:'0 10px',
        },

    },
    notariusListHeader:{
        padding: '27px 0 0 0',
        fontWeight:'100',
        fontSize: '24px'

    },
    notariusListContent:{
        padding: '0 0 27px 0',
        fontWeight:'300',
        fontSize: '16px',
        lineHeight: '22px'

    },
});

const NotariatList = ({classes}) => (
    <section className={classes.notariusListSection}>
        <div className={classes.notariusList}>
            <Typography className={classes.notariusListHeader} align={'left'} type="display1" component={"h2"}>
                Список нотариусов
            </Typography>
            <Typography className={classes.notariusListContent} align={'left'} type="display1" component={"h2"}>
                В данном разделе размещен полный список нотариусов Республики Беларусь. Для удобства поиска можно воспользоваться быстрым фильтром, начав вводить фамилию/имя нотариуса или название нотариальной конторы/нотариального бюро, или название нотариального округа.  Также по размещенным ниже ссылкам можно получить доступ к списку нотариусов соответствующего нотариального округа.
            </Typography>
        </div>
    </section>
);

export default withStyles(styles)(NotariatList);