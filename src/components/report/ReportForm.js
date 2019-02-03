import React from 'react';
import * as PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Button from "../common/Button";
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

function getModalStyle() {
    const top = 50;
    const left = 50;
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        marginLeft: '5%',
        marginRight: '5%'
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
        outline: 'none',
    },
    paper1: {
        padding: theme.spacing.unit * 1,
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },
});

const categories = [
    {
        value: 'ACA',
        label: 'Academic Matters',
    },
    {
        value: 'REM',
        label: 'Residential Matters',
    },
    {
        value: 'FAI',
        label: 'Facility Issue',
    },
    {
        value: 'CLR',
        label: 'Cleaness Report',
    },
];

const reporters = [
    {
        value: 'STU',
        label: 'Student',
    },
    {
        value: 'STA',
        label: 'Staff',
    },
    {
        value: 'ALU',
        label: 'Alumni',
    },
    {
        value: 'VIS',
        label: 'Vistor',
    },
];

const initialState = {
    name: '',
    phone: '',
    email: '',
    matric: '',
    category: 'ACA',
    reporter: 'STU',
    issues: '',
    open: false
};

class ReportForm extends React.Component {
    state = {
        name: '',
        phone: '',
        email: '',
        matric: '',
        category: 'ACA',
        reporter: 'STU',
        issues: '',
        open: false
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    handleSubmit = () => {
        this.handleOpen()
    };

    handleClear = () => {
        this.setState(initialState);
    };

    render() {
        const {classes} = this.props;
        return (
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    id="name-field"
                    label="Name"
                    style={{width: '45%', marginRight: '4%'}}
                    placeholder="Your Full Name as on Matric Card"
                    required
                    fullWidth
                    value={this.state.name}
                    onChange={this.handleChange('name')}
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="matric-no-field"
                    label="Phone No"
                    style={{width: '45%', marginLeft: "4%"}}
                    placeholder="Phone Number"
                    fullWidth
                    value={this.state.phone}
                    onChange={this.handleChange('phone')}
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="email-field"
                    label="Email"
                    style={{width: '45%', marginRight: "4%"}}
                    placeholder="Your Email Address"
                    required
                    fullWidth
                    value={this.state.email}
                    onChange={this.handleChange('email')}
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="matric-no-field"
                    label="Matric No./Staff No."
                    style={{width: '45%', marginLeft: "4%"}}
                    placeholder="Your Matric/Staff Number"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="select-issue-category"
                    select
                    label="Select Issue Category"
                    value={this.state.category}
                    onChange={this.handleChange('category')}
                    style={{width: '45%', marginRight: "4%"}}
                    SelectProps={{
                        MenuProps: {
                            className: classes.menu,
                        },
                    }}
                    margin="normal"
                    variant="outlined"
                >
                    {categories.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    id="select-reporter-category"
                    select
                    label="You are?"
                    value={this.state.reporter}
                    onChange={this.handleChange('reporter')}
                    style={{width: '45%', marginLeft: "4%"}}
                    SelectProps={{
                        MenuProps: {
                            className: classes.menu,
                        },
                    }}
                    margin="normal"
                    variant="outlined"
                >
                    {reporters.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    id="outlined-uncontrolled"
                    label="Your Issues"
                    style={{width: '98%', height: '200'}}
                    required
                    multiline
                    rows="4"
                    rowsMax="8"
                    className={classes.textField}
                    value={this.state.issues}
                    onChange={this.handleChange('issues')}
                    margin="normal"
                    variant="outlined"
                />
                <div style={{display: "flex"}}>
                    <div style={{flexGrow: 1}}/>
                    <Button variant="contained" color="primary" onClick={this.handleSubmit}>
                        Submit
                    </Button>

                    <Button variant="contained" onClick={this.handleClear}>
                        <Typography color="error">Discard</Typography>
                    </Button>
                </div>

                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    <div style={getModalStyle()} className={classes.paper}>
                        <Typography variant="h6" id="modal-title">
                            Thank you for your submission
                        </Typography>
                        <Typography variant="subtitle1" id="simple-modal-description">
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </Typography>
                        <Grid container spacing={24}>
                            <Grid item xs={6}>
                                <Paper className={classes.paper1}>Name: {this.state.name} </Paper>
                            </Grid>
                            <Grid item xs={6}>
                                <Paper className={classes.paper1}>Email: {this.state.email}</Paper>
                            </Grid>
                            <Grid item xs={12}>
                                <Paper className={classes.paper1}>Issue: {this.state.issues}</Paper>
                            </Grid>
                        </Grid>
                    </div>
                </Modal>
            </form>
        );
    }
}

ReportForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ReportForm);