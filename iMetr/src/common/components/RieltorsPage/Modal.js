import React from 'react';
import Dialog, {
    DialogContent,
    DialogTitle,
} from 'material-ui/Dialog';

import image from './assets/images/party.png';
class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleRequestClose = () => {
        this.setState({ open: false });
    };

    render() {
        return (
            <div>
                <img src={image} alt={'iMetr'} onClick={this.handleClickOpen} />
                <Dialog open={this.state.open}>
                    <DialogTitle onClick={this.handleRequestClose}>X</DialogTitle>
                    <DialogContent>
                        <img src={image} alt={'iMetr'}/>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }
}

export default Modal;