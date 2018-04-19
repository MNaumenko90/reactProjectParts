import React, {Component} from 'react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import classNames from 'classnames';

// images
import aboutBg from './assets/images/mainAboutBg.png';

const styles = theme => ({
    gradientBg: {
        backgroundImage: 'linear-gradient(to top, #ffffff 0%, #e9eeee 100%)',
        padding:'60px 0',
        '& h2': {
            fontWeight:100,
        },
    },
    root: theme.root,
    aboutTextWrapper: {
        // '@media (min-width: 700px': {
        //     width: '100% !important',
        //     maxWidth: '100% !important',
        //     flexBasis: '100% !important',
        // },
    },
    aboutText: {
        marginTop:39,
        lineHeight: '24px',
    },
});

class SectionAllPropertyComp extends Component {

    render() {
        const {classes} = this.props;
        return (
            <section className={classNames(classes.gradientBg)}>
                <Typography type="display1" align={'center'} component={"h2"}>
                    Вся недвижимость Беларуси у нас
                </Typography>
                <Grid container spacing={24} className={classes.root}>
                    <Grid item xs={12} sm={6}>
                        <img src={aboutBg} alt={'iMetr'}/>
                    </Grid>
                    <Grid item xs={12} sm={6} className={classes.aboutTextWrapper}>
                        <Typography type="caption" component="p" className={classes.aboutText}>
                            Купить или продать квартиру, дом, земельный участок, офис или магазин, склад или
                            производство, сдать или снять жилую или коммерческую недвижимость – не сложно, если знать,
                            где искать и с чего начать поиски. Продать или купить, снять или сдать недвижимость можно
                            как в агентстве недвижимости, так собственными силами, при наличии свободного времени,
                            опыта, компетенции и желания. Для этого достаточно воспользоваться профессиональной базой
                            недвижимости на портале iMetr.by.
                        </Typography>
                        <Typography type="caption" component="p" className={classes.aboutText}>
                            Если вы решили продать или купить квартиру, снять или сдать жилую недвижимость или
                            находитесь в поисках загородной или коммерческой недвижимости, квартиры в новостройках
                            Минска, то iMetr.by поможет Вам! iMetr.by — это удобный сайт для поиска недвижимости по
                            точному адресу или по карте, с учётом всех интересующих Вас параметров. На iMetr.by — тысячи
                            актуальных объявлений о продаже или аренде объектов недвижимости, в том числе новостроек в
                            Минске и по всей Беларуси, ежедневно на сайте появляются новые объявления по различным
                            сегментам рынка недвижимости. Объявления содержат адреса, описания объектов, информацию об
                            инфраструктуре, фотографии, стоимость, контактные данные, диапазоны площадей и цен,
                            статистику и аналитику. А так же максимально полную информацию о профессиональных участниках
                            рынка: агентствах недвижимости и застройщиках, их рейтинги и отзывы о них.
                        </Typography>
                    </Grid>
                </Grid>
            </section>
        );
    };
};

export default withStyles(styles)(SectionAllPropertyComp);


