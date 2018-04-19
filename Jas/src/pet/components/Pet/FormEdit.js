import React from 'react';
import injectSheet from 'react-jss';
import { Form, Input, Icon, Button ,Row, Col,Select,AutoComplete} from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;

const styles = {
    wrapper: {
        maxWidth: 1175,
        margin: '0 auto',
    },
    addPet: {
        border: '1px solid #bfbfbf',
        backgroundColor: '#f7f7f7',
        padding:'50px 0',
        marginTop:30,
    },
    btnGroup: {
        marginTop:30,

    },
    firstLetter: {
        '& input': {
        textTransform: 'capitalize',
        },
    },
};

class FormEdit extends React.Component {
    state = {
        petTypeSelect: 'dog',
        petBreedSelect: [],
        autoCompleteResult: [],
    };
    hasError = propName =>!!this.getErrorMessage(propName);
    getErrorMessage = propName =>{
        const {getFieldError, isFieldTouched } = this.props.form;
        let err_message = (isFieldTouched(propName) && getFieldError(propName)) || ((this.props.errors||[]).find(v=>v.property === propName)|| {}).message || '';
        return err_message;
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.resetErrors();
        const { edit } = this.props;
        let vals, isValid = true;

        this.props.form.validateFields((errors, values) => {
            vals = values||{};
            if(errors){
                for(let property in errors){
                    let prop_errors = (errors[property]||{}).errors||[];
                    if(Array.isArray(prop_errors)){
                        isValid = false;
                        prop_errors.map(v=>{
                            this.props.addError(Object.assign({}, v, {property}));
                        });
                    }
                }
            }
        });

        if (!isValid)
            return false;

        this.props.form.resetFields();

        vals.objectId = edit.objectId || undefined;
        vals.neutered = isFinite(parseInt(vals.neutered)) ? !!parseInt(vals.neutered) : undefined;

        this.props.savePet(vals);
        return false;
    };

    componentWillReceiveProps(nextProps) {
        if( (!!this.props.edit && !nextProps.edit) || ( (this.props.edit||{}).objectId !== (nextProps.edit||{}).objectId)){
            this.props.resetErrors();
            this.props.form.resetFields();
        }
        if (nextProps.stateBtns !== this.props.stateBtns) {
            this.handleSubmit();
        }
    }

    changePetType = (e) => {
        this.props.form.setFieldsValue({breed: null});
    };

    getSelectBreedOptions = () => {
        return this.state.autoCompleteResult.map(v => (
            <AutoCompleteOption key={v}>{v}</AutoCompleteOption>
        ));
    };

    handleSearch = (value) => {
        const { config } = this.props;
        const { getFieldValue } = this.props.form;
        const type = getFieldValue('type');


        let val = value.toLowerCase();
        let autoCompleteResult;
        if (!value) {
            autoCompleteResult = type ? config.breeds.filter(v=> v.type === type) : config.breeds;
        } else {
            autoCompleteResult = type ? config.breeds.filter(v=> v.type === type && v.name.toLowerCase().indexOf(val) >= 0)
                : config.breeds.filter(v=> v.name.toLowerCase().indexOf(val) >= 0);
        }

        autoCompleteResult = autoCompleteResult.sort(
            function (a, b) {
                if(a.sort === b.sort) {return 0;}
                return a.sort < b.sort ? -1 : 1 ;
            }
        ).map(v=>v.name).filter((v, i, a)=>v && a.indexOf(v) == i);

        this.setState({ autoCompleteResult });
    }



    render() {
        const {classes, edit ,config} = this.props;
        const { getFieldDecorator } = this.props.form;
        if(edit == null){
            return null;
        }
        let PetConfig=this.props.config.colors;
        PetConfig.sort((a, b) => a.name === b.name ? 0 : (a.name < b.name ? -1 : 1));

        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <div className={classes.wrapper}>
                        <Row type="flex">
                            <Col lg={12} md={12} sm={24} xs={24}>
                                <FormItem
                                    validateStatus={this.hasError('type') ? 'error' : ''}
                                    help={this.getErrorMessage('type') || ''}
                                >
                                    {getFieldDecorator('type', {
                                        validateTrigger: [],
                                        rules: [{required: true, message: 'Please select pet type'}],
                                        initialValue: edit.type,
                                        onSelect: this.changePetType,
                                    })(
                                        <Select placeholder="Pet Type *">
                                            <Option value="cat">Cat</Option>
                                            <Option value="dog">Dog</Option>
                                        </Select>
                                    )}
                                </FormItem>

                                <FormItem
                                    validateStatus={this.hasError('sex') ? 'error' : ''}
                                    help={this.getErrorMessage('sex') || ''}
                                >
                                    {getFieldDecorator('sex', {
                                        validateTrigger: [],
                                        rules: [{required: true, message: 'Please select pet sex'}],
                                        initialValue: edit.sex,
                                    })(
                                        <Select placeholder="Sex *">
                                            <Option value="Male">Male</Option>
                                            <Option value="Female">Female</Option>
                                        </Select>
                                    )}
                                </FormItem>

                                <FormItem
                                    validateStatus={this.hasError('neutered') ? 'error' : ''}
                                    help={this.getErrorMessage('neutered') || ''}
                                >
                                    {getFieldDecorator('neutered', {
                                        validateTrigger: [],
                                        rules: [{required: true, message: 'Please select pet Neutered state'}],
                                        initialValue: typeof edit.neutered === "boolean" ? (edit.neutered ? '1' : '0') : undefined,
                                    })(
                                        <Select placeholder="Spayed/Neutered *">
                                            <Option value="1">Spayed/Neutered</Option>
                                            <Option value="0">Not Spayed/Neutered</Option>
                                        </Select>
                                    )}
                                </FormItem>
                                <FormItem
                                    validateStatus={this.hasError('age') ? 'error' : ''}
                                    help={this.getErrorMessage('age') || ''}
                                >
                                    {getFieldDecorator('age', {
                                        validateTrigger: [],
                                        rules: [{required: true, message: 'Please select pet age'}],
                                        initialValue: edit.age,
                                    })(
                                        <Select placeholder="Age *">
                                            <Option value="Under 6 months">Under 6 months</Option>
                                            <Option value="Over 6 months">Over 6 months</Option>
                                        </Select>
                                    )}
                                </FormItem>

                            </Col>
                            <Col lg={12} md={12} sm={24} xs={24}>
                                <FormItem
                                    validateStatus={this.hasError('name') ? 'error' : ''}
                                    help={this.getErrorMessage('name') || ''}
                                >
                                    {getFieldDecorator('name', {
                                        validateTrigger: [],
                                        rules: [{ required: true, message: 'Please enter your Pet Name' }],
                                        initialValue: edit.name||null,
                                    })(
                                        <Input prefix={""} placeholder="Pet Name *" type="text" className={classes.firstLetter}/>
                                    )}
                                </FormItem>
                                <FormItem>
                                    {getFieldDecorator('color', {
                                        validateTrigger: [],
                                        rules: [{ required: true, message: 'Please select your pet color' }],
                                        initialValue: edit.color,
                                    })(
                                        <Select placeholder="Color *"
                                        >
                                            {PetConfig && PetConfig.map(item => {
                                                return <Option key={item.name} value={item.name}>{item.name}</Option>
                                            })}
                                        </Select>
                                    )}
                                </FormItem>

                                <FormItem>
                                    {getFieldDecorator('breed', {
                                        validateTrigger: [],
                                        rules: [ {required: true, message: 'Please select your pet Breed'},],
                                        initialValue: edit.breed,
                                    })(
                                        <AutoComplete
                                            dataSource={this.getSelectBreedOptions()}
                                            onSelect={()=>{}}
                                            onBlur={()=>{}}
                                            onChange={this.handleSearch}
                                            placeholder="Breed *"
                                            className={classes.infoAutocomplite}
                                            tabIndex="7"
                                        />
                                    )}
                                </FormItem>
                                <FormItem>
                                    {getFieldDecorator('chip', {
                                        initialValue: edit.chip||null,
                                    })(
                                        <Input prefix={""} placeholder="Chip Number"/>
                                    )}
                                </FormItem>
                            </Col>
                        </Row>
                    </div>
                    {this.props.children ? this.props.children :
                        <div className={classes.wrapper}>
                            <Row type="flex">
                                <Col lg={24} md={24} sm={24} xs={24} align="right" className={classes.btnGroup}>
                                    <Button htmlType="submit" type="primary" size="large">{edit.objectId ? "Save" : "Add Pet"}</Button>
                                </Col>
                            </Row>
                        </div>
                    }
                </Form>
            </div>
        );


    }
}
const formEdit = Form.create({})(FormEdit);
export {formEdit};
export default injectSheet(styles)(formEdit);