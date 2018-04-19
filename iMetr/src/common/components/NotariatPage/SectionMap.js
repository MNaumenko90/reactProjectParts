import React, {Component} from 'react';
import { withStyles } from 'material-ui/styles';
import { YMaps, Map, GeoObject, Placemark } from 'react-yandex-maps';


const styles = theme => ({});

const mapState = { center: [53.877149, 27.555332], zoom: 16 , controls: []};

class SectionMap extends Component {
    state = { width: '100%', height: '100%' };

    render() {
        const {classes} = this.props;
        const { width, height } = this.state;

        return (
            <YMaps className={classes.mapWrap}>
                <Map state={mapState} width={width} height={height}>
                    <Placemark
                        geometry={{
                            coordinates: [53.877149, 27.555332],
                        }}
                        properties={{
                            // The placemark content.
                            //iconContent: 'Я тащусь',
                            hintContent: 'Content',
                        }}
                        // Options.
                        options={{
                            // The placemark's icon will stretch to fit its contents.
                            preset: 'islands#blueHomeIcon',
                            // The placemark can be moved.
                            draggable: false,
                        }}
                    />
                </Map>
            </YMaps>

        )
    }
}
export default withStyles(styles)(SectionMap);