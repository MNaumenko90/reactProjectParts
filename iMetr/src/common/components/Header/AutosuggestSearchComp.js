import React from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import { MenuItem } from 'material-ui/Menu';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

const suggestions = [
    { label: 'Afghanistan' },
    { label: 'Aland Islands' },
    { label: 'Albania' },
    { label: 'Algeria' },
    { label: 'American Samoa' },
    { label: 'Andorra' },
    { label: 'Angola' },
    { label: 'Anguilla' },
    { label: 'Antarctica' },
    { label: 'Antigua and Barbuda' },
    { label: 'Argentina' },
    { label: 'Armenia' },
    { label: 'Aruba' },
    { label: 'Australia' },
    { label: 'Austria' },
    { label: 'Azerbaijan' },
];

function renderInput(inputProps) {
    const { classes, autoFocus, value, ref, ...other } = inputProps;

    return (
        <TextField
            autoFocus={autoFocus}
            className={classes.textField}
            value={value}
            inputRef={ref}
            InputProps={{
                classes: {
                    input: classes.input,
                },
                ...other,
            }}
        />
    );
}

function renderSuggestion(suggestion, { query, isHighlighted }) {
    const matches = match(suggestion.label, query);
    const parts = parse(suggestion.label, matches);

    return (
        <MenuItem selected={isHighlighted} component="div">
            <div>
                {parts.map((part, index) => {
                    return part.highlight ? (
                        <Typography type="caption" key={index}>
                            {part.text}
                        </Typography>
                    ) : (
                        <Typography type="caption" key={index} component={"strong"}>
                            {part.text}
                        </Typography>
                    );
                })}
            </div>
        </MenuItem>
    );
}

function renderSuggestionsContainer(options) {
    const { containerProps, children } = options;

    return (
        <Paper {...containerProps} square>
            {children}
        </Paper>
    );
}

function getSuggestionValue(suggestion) {
    return suggestion.label;
}

function getSuggestions(value) {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    let count = 0;

    return inputLength === 0
        ? []
        : suggestions.filter(suggestion => {
            const keep =
                count < 5 && suggestion.label.toLowerCase().slice(0, inputLength) === inputValue;

            if (keep) {
                count += 1;
            }

            return keep;
        });
}

const styles = theme => ({
    container: {
        flexGrow: 1,
        position: 'relative',
        //height: 200,
        zIndex:100,
    },
    suggestionsContainerOpen: {
        position: 'absolute',
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit * 3,
        left: 0,
        right: 0,
    },
    suggestion: {
        display: 'block',
    },
    suggestionsList: {
        margin: 0,
        padding: 0,
        listStyleType: 'none',
    },
    textField: {
        width: '100%',
        '& > div': {
            border:0,
            background:'transparent',
            color:'#fff',
            '& > input': {
                height:25,
                //padding:0,
            },
        },
    },
});

class IntegrationAutosuggest extends React.Component {
    state = {
        value: '',
        suggestions: [],
    };

    handleSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: getSuggestions(value),
        });
    };

    handleSuggestionsClearRequested = () => {
        this.setState({
            suggestions: [],
        });
    };

    handleChange = (event, { newValue }) => {
        this.setState({
            value: newValue,
        });
    };

    render() {
        const { classes } = this.props;

        return (
            <Autosuggest
                theme={{
                    container: classes.container,
                    suggestionsContainerOpen: classes.suggestionsContainerOpen,
                    suggestionsList: classes.suggestionsList,
                    suggestion: classes.suggestion,
                }}
                renderInputComponent={renderInput}
                suggestions={this.state.suggestions}
                onSuggestionsFetchRequested={this.handleSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.handleSuggestionsClearRequested}
                renderSuggestionsContainer={renderSuggestionsContainer}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={{
                    autoFocus: true,
                    classes,
                    placeholder: 'Поиск по сайту',
                    value: this.state.value,
                    onChange: this.handleChange,
                }}
            />
        );
    }
}

IntegrationAutosuggest.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IntegrationAutosuggest);