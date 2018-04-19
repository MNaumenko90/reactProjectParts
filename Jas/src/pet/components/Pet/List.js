import React from 'react';
import injectSheet from 'react-jss';
import { Table, Input, Popconfirm, Form, Icon , Row, Col, Button} from 'antd';
import AddPet from '../../../pet/containers/Pet/FormEdit';

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
    btnGroups: {
        marginTop:30,
        position:'relative',
        '& button:last-child':{
            marginLeft:20,
        },
    },
    btnGroup: {
        marginTop:30,
        '& button:last-child':{
            marginLeft:20,
        },
    },
    mobileTableItem: {
        padding: [30, 0, 20],
        borderBottom: '2px solid #979294',
        display: 'none',
        '& span': {
            textTransform:'capitalize',
        },
    },
    TableText: {
        display:'flex',
        alignItems:'center',
        '& h5': {
            marginRight:10,
            display:'inline-block',
            marginBottom:0,
        },
        '& > div': {
            marginLeft:20,
            alignItems:'center',
            '& > span': {
                marginRight:10,
            },
        },
    },
    iconTable: {
        fontSize: 16,
    },
    '@media (max-width: 768px)': {
        mobileTableItem: {
            display: 'block',
            '& h5': {
                fontSize:16,
            },
            '& span': {
                fontSize:16,
                display:'inline-block',
                fontWeight: 700,
            },
        },
        tableDesctop: {
            display: 'none',
        },
    },
    '@media (max-width: 480px)': {
        btnGroup: {
            '& button:last-child':{
                marginLeft:0,
                marginTop:20,
            },
        },
        btnGroups: {
            '& button:last-child':{
                marginLeft:0,
                marginTop:20,
            },
        },
    },
};

class SectionTableTest extends React.Component {

    constructor(props) {
        super(props);
        this.columns = [{
            title: 'Pet Name',
            dataIndex: 'name',
            key: 'name',
            render: (value, record) => {
                if(!value)
                    return '';
                let txt = value[0].toUpperCase() + value.substr(1);
                return this.renderColumns(txt, record, 'name');
            },
        }, {
            title: 'Color',
            dataIndex: 'color',
            key: 'color',
            render: (value, record) => this.renderColumns(value, record, 'color'),
        }, {
            title: 'Breed',
            dataIndex: 'breed',
            key: 'breed',
            render: (value, record) => this.renderColumns(value, record, 'breed'),
        }, {
            title: 'Pet Sex',
            dataIndex: 'sex',
            key: 'sex',
            render: (value, record) =>{
                let txt = value == 'Male' ? 'Male' : 'Female';
                return this.renderColumns(txt, record, 'sex');
            }
        }, {
            title: 'Pet Type',
            dataIndex: 'type',
            key: 'type',
            render: (value, record) => {
                if(!value)
                    return '';
                let txt = value[0].toUpperCase() + value.substr(1);
                return this.renderColumns(txt, record, 'type');
            }
        }, {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
            render: (value, record) => {
                let txt = value === 'Under 6 months' ? 'Under 6 months' : 'Over 6 months' ;
                return this.renderColumns(txt, record, 'age');
            }
        }, {
            title: 'Fixed',
            dataIndex: 'neutered',
            key: 'neutered',
            render: (value, record) => {
                let txt = value ? 'Yes' : 'No';
                return this.renderColumns(txt, record, 'neutered');
            }
        }, {
            title: 'Location',
            dataIndex: 'GisAddress',
            key: 'GisAddress',
            render: (value, record) => {
                let txt = this.getAddressCodeName((value||{}).CODE);
                return this.renderColumns(txt, record, 'location');
            }
        }, {
            title: 'Actions',
            dataIndex: 'action',
            key: 'action',
            render: (value, record) => {
                const { edit } = this.props;
                return (
                    <div className="editable-row-operations">
                        <span>
                            <Icon type={ record.objectId ? "edit" : "close" } onClick={() => this.edit(record.objectId)}/>
                            {/*<Icon type={ record.objectId === (edit || {}).objectId ? "close" : "edit" } onClick={() => this.edit(record.objectId)}/>*/}
                        </span>
                        <Popconfirm title="Sure to delete?" onConfirm={() => this.onDelete(record.objectId)}>
                            <Icon type="delete"/>
                        </Popconfirm>
                    </div>
                );
            },
        }];
        this.state = {
            pagination: false,
            value: this.props.value,
            hideButton:false,
            stateBtns: false,
        };
    }

    componentWillMount() {
        this.props.getPetsList();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.petlist !== this.props.petlist) {
            this.setState({hideButton:false});
        }
    }

    renderColumns(text, record, column) {
        return <div> {text} </div>;
    }

    edit(key) {
        const {petlist, editStartPet, edit} = this.props;
        if((edit||{}).objectId === key){
            this.setState({hideButton:false, stateBtns: true});
            return editStartPet(null);
        }

        const record = petlist.find(v=>v.objectId === key);
        this.setState({hideButton:true, stateBtns: false});

        return editStartPet(record);

    }

    onDelete = (key) => {
        const {deletePet} = this.props;
        return deletePet(key);
    };

    addPet = () => {
        const {editStartPet} = this.props;
        const record = {};
        this.setState({hideButton:true, stateBtns: false});
        return editStartPet(record);
    };

    onFinish = () => {
        const {editStartPet} = this.props;
        const record = null;
        this.setState({hideButton:false, stateBtns: true});
        editStartPet(record);
        this.props.goMain();
    };

    savePetAction = () => {
        this.setState({stateBtns: true});
    }

    remove = () => {
        this.props.resetPetErrors();
        this.setState({hideButton:false, stateBtns: false});
    };

    getAddressCodeName = (code)=> ((this.props.codeconf||[]).find(v=>v.code == code)||{}).name;

    render() {
        const {classes, edit} = this.props;
        const dataSource = this.props.petlist.map((record, key) => ({
            key: key,
            petName: `${record.name ? record.name : '-'}`,
            petType: `${record.type ? record.type : '-'}`,
            color: `${record.color ? record.color : '-'}`,
            breed: `${record.color ? record.breed : '-'}`,
            sex: `${record.sex ? record.sex : '-'}`,
            location: this.getAddressCodeName((record.GisAddress||{}).CODE),
            age: `${record.age ? record.age : '-'}`,
            action: record.objectId,
            fixed: record.neutered ? 'Yes' : 'No',
        }));

        return (
            <div>
                <Table
                    rowKey="objectId"
                    dataSource={this.props.petlist}
                    className={classes.tableDesctop}
                    columns={this.columns}
                    {...this.state} />

                <div>
                    {dataSource.map((record, value) => <div key={value} className={classes.mobileTableItem}>
                        <h5>Pet Name: <span>{record.petName}</span></h5>
                        <h5>Color: <span>{record.color}</span></h5>
                        <h5>Breed: <span>{record.breed}</span></h5>
                        <h5>Pet Sex: <span>{record.sex}</span></h5>
                        <h5>Pet Type: <span>{record.petType}</span></h5>
                        <h5>Age: <span>{record.age}</span></h5>
                        <h5>Fixed: <span>{record.fixed}</span></h5>
                        <h5>Location: <span>{record.location}</span></h5>

                        <div className={classes.TableText}><h5>Actions:</h5>
                                    <div className="editable-row-operations">
                                        <span>
                                            <Icon className={classes.iconTable} type={ record.objectId ? "edit" : "edit" } onClick={() => this.edit(record.action)}/>
                                        </span>
                                        <Popconfirm title="Sure to delete?" onConfirm={() => this.onDelete(record.action)}>
                                            <Icon className={classes.iconTable} type="delete"/>
                                        </Popconfirm>
                                    </div>
                        </div>
                    </div>)}
                </div>

                {!this.state.hideButton ?
                    <div className={classes.wrapper}>
                        <Row type="flex">
                            <Col lg={24} md={24} sm={24} xs={24} align="right" className={classes.btnGroups}>

                                <Button type="primary" size="large" onClick={this.addPet}>ADD ANOTHER PET</Button>
                                <Button type="primary" size="large" onClick={this.onFinish}>Finished</Button>
                            </Col>
                        </Row>
                    </div>
                    : <div><br/><br/></div>
                }

                {this.state.hideButton ?
                    <div>
                        <AddPet stateBtns={this.state.stateBtns}>
                        {edit !== null ?
                            <div className={classes.wrapper}>
                                <Row type="flex">
                                    <Col lg={24} md={24} sm={24} xs={24} align="right" className={classes.btnGroup}>
                                        <Button type="primary" size="large" onClick={this.remove} className={classes.btnCancel}>cancel</Button>
                                        <Button type="primary" htmlType="submit" size="large">{edit.objectId ? "Save" : "Add Pet"}</Button>
                                    </Col>
                                </Row>
                            </div>
                            : null }
                        </AddPet>
                    </div>
                    : null }

            </div>
        );
    }
}
const SectionTable = Form.create({})(SectionTableTest);

export {SectionTable};
export default injectSheet(styles)(SectionTable);