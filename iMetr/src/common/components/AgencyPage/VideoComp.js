import React, {Component} from 'react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import { Player } from 'video-react';
import "video-react/dist/video-react.css";
import Typography from 'material-ui/Typography';
import Dialog, {
    DialogContent,
    DialogTitle,
} from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import MetrIcon from '../../../common/components/Icon';

import image from './assets/images/party.png';


const styles = theme => ({
    root: theme.root,
    containerVideo: {
        position:'relative',
        '& .video-react-big-play-button': {
            left:'50%',
            transform: 'translateX(-25px) translateY(-20px)',
            top:'50%',
            width: '1.5em',
            borderRadius:'3em',
        },
        '& span': {
            position:'absolute',
            color:'#fff',
            left:0,
            bottom:0,
            right:0,
            padding: '14px 12px 20px 22px',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            '& small': {
                display:'block',
                opacity:.5,
            },
        },
    },
    allOfficesTitle: {
        display:'flex',
        fontSize:18,
        padding:'30px 60px 17px 30px',
        alignItems:'center',
        justifyContent:'space-between',
        position:'relative',
    },
    closeModal: {
        cursor:'pointer',
        minWidth:50,
        position:'absolute',
        top:0,
        right:0,
    },
    modalContent: {
        '& p': {
            paddingLeft:30,
            paddingBottom:12,
        },
    },
});

const items = [
    {
        videoUlr: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
        videoTitle: 'Презентация ЖК «Пирс»',
        videoDescr: 'Описание презентации',
    },
    {
        videoUlr: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
        videoTitle: 'Презентация ЖК «Пирс»2',
        videoDescr: 'Описание презентации',
    },
    {
        videoUlr: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
        videoTitle: 'Презентация ЖК «Пирс»3',
        videoDescr: 'Описание презентации',
    },
];

class VideoComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            videoUlr: '',
            videoTitle: '',
            videoDescr: '',
        };
    };

    handleClickOpen = (item) => {
        this.setState({
            open: true,
            videoUlr: item.videoUlr,
            videoTitle: item.videoTitle,
            videoDescr: item.videoDescr,
        });
    };

    handleRequestClose = () => {
        this.setState({ open: false });
    };

    render() {
        const {classes,fullScreen} = this.props;
        return (
            <Grid container spacing={16} className={classes.root}>

                    {items.map((item) => {
                        return (
                            <Grid key={item.videoTitle} item xs={12} sm={12} md={4} className={classes.containerVideo}>
                                <div onClick={() => this.handleClickOpen(item)}>
                                    <Player
                                        ref="player"
                                        playsInline
                                        poster={image}
                                        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                                    />
                                    <Typography type="body2" component={"span"}>
                                        {item.videoTitle}
                                        <small>youtube.com</small>
                                    </Typography>
                                </div>
                            </Grid>
                        )
                    })}

                    <Dialog
                        open={this.state.open}
                        fullScreen={fullScreen}
                        maxWidth={"md"}
                    >
                        <Grid container className={classes.root} spacing={0}>
                            <Grid item xs={12} className={classes.allOfficesTitle}>
                                <Typography type="body1" component={"h3"} className={classes.pageTitle}>
                                    {this.state.videoTitle}
                                </Typography>
                                <Button className={classes.closeModal} onClick={this.handleRequestClose}>
                                    <MetrIcon>letter-x</MetrIcon>
                                </Button>
                            </Grid>
                            <Grid item xs={12} className={classes.modalContent}>
                                <Typography type="caption" component={"p"}>
                                    {this.state.videoDescr}
                                </Typography>
                                <div className={classes.containerVideo}>
                                <Player
                                    ref="player"
                                    playsInline
                                    poster={image}
                                    src={this.state.videoUlr}
                                />
                                </div>
                            </Grid>
                        </Grid>
                    </Dialog>


            </Grid>

        )
    }
}
export default withStyles(styles)(VideoComp);