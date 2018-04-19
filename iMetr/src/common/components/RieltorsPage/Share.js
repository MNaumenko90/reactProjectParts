import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';

import {ShareButtons, generateShareIcon,} from 'react-share';

const {
    FacebookShareButton,
    GooglePlusShareButton,
    TwitterShareButton,
    VKShareButton,
    OKShareButton,
} = ShareButtons;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const GooglePlusIcon = generateShareIcon('google');
const VKIcon = generateShareIcon('vk');
const OKIcon = generateShareIcon('ok');

const styles = theme => ({
    social: {
        display: 'flex',
        alignItems: 'center',
    },
    socItem: {
        marginLeft: '5px',
        '&:first-child': {
            marginLeft: 0,
        },
    },
});

class Social extends Component {


    render() {

        const {classes} = this.props;

        const shareUrl = 'http://Imetr.by';
        const title = 'Imetr';

            return(<div className={classes.social}>
                    <TwitterShareButton
                        url={shareUrl}
                        title={title}
                        className={classes.socItem}>
                        <TwitterIcon
                            size={26}
                            round/>
                    </TwitterShareButton>
                    <VKShareButton
                        url={shareUrl}
                        windowWidth={660}
                        windowHeight={460}
                        className={classes.socItem}>
                        <VKIcon
                            size={26}
                            round/>
                    </VKShareButton>
                    <FacebookShareButton
                        url={shareUrl}
                        quote={title}
                        className={classes.socItem}>
                        <FacebookIcon
                            size={26}
                            round/>
                    </FacebookShareButton>
                    <GooglePlusShareButton
                        url={shareUrl}
                        className={classes.socItem}>
                        <GooglePlusIcon
                            size={26}
                            round/>
                    </GooglePlusShareButton>
                    <OKShareButton
                        url={shareUrl}
                        windowWidth={660}
                        windowHeight={460}
                        className={classes.socItem}>
                        <OKIcon
                            size={26}
                            round/>
                    </OKShareButton>

                </div>
            )
    };
}

export default withStyles(styles)(Social);