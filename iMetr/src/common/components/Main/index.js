import React, {Component} from 'react';
import { withStyles } from 'material-ui/styles';
import Helmet from 'react-helmet';

// Components
import SectionAgencysComp from './SectionAgencys';
import SectionAllPropertyComp from './SectionAllProperty';
import SectionProposeComp from './SectionPropose';
import SectionMasonryComp from './SectionMasonry';
import SectionCardsComp from './SectionCards';
import SectionSearchComp from '../../containers/SectionSearch';
import SectionPopularComp from './SectionPopular';
import SectionBottomLinksComp from './SectionBottomLinks';

const styles = theme => ({

});
class Main extends Component {

    render() {
        const {popular, goAgency, goDeveloper, goRieltor} = this.props;

        if(!popular) return null;

        return (
            <div>
                <Helmet>
                    <title>Imetr.by недвижимость в Минске и других городах Беларуси</title>
                    <meta name="description" content="Вся недвижимость Минска и Беларуси на портале Imetr.by. Покупка, продажа недвижимости в Минске." />
                </Helmet>

                <main>
                    <SectionSearchComp/>

                    <SectionCardsComp/>

                    {this.props.subdomen === null &&
                        <SectionMasonryComp/>
                    }
                    {this.props.subdomen === null &&
                        <SectionPopularComp popular={this.props.popular}/>
                    }

                    <SectionAgencysComp
                        goAgency={goAgency}
                        goDeveloper={goDeveloper}
                        goRieltor={goRieltor}
                    />

                    <SectionAllPropertyComp/>

                    <SectionProposeComp/>

                    {this.props.subdomen === null &&
                        <SectionBottomLinksComp subdomen={this.props.subdomen}/>
                    }
                </main>
            </div>
        );
    };
};

export default withStyles(styles)(Main);