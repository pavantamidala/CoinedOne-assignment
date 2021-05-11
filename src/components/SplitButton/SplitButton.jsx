import React,{useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import {useHistory} from 'react-router-dom';
import CustomizedRadios from '../RadioButton/RadioButton'



const options = ["Class Time", "ALL Time", "Study Time","Free Time"];
let routes = ["classtime","/","studytime","freetime"]
export default function SplitButton(props) {
    
    let currentlyActive = "All Time"
    
    function selectedItem(path) {
        switch (path) {
            case "/":
                currentlyActive = "All Time"
                return currentlyActive
            case "/classtime":
                currentlyActive = "Class Time"
                return currentlyActive
            case "/studytime":
                currentlyActive = "Study Time"
                return currentlyActive
            case "/freetime":
                currentlyActive = "Free Time"
                return currentlyActive
            default:
                currentlyActive = "All Time"
                return currentlyActive;
        }
    }
    
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    
    const handleClick = () => {
        console.info(`You clicked ${options[selectedIndex]}`);
    };
    
    
    const handleMenuItemClick = (event, index) => {
        
        setOpen(false);
    };
    
    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };
    
    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        
        setOpen(false);
    };
    let history = useHistory()
    
    selectedItem(history.location.pathname)
    
    return (
        
        <Grid container direction="column"  alignItems="center">
            <Grid item xs={12}>
                <ButtonGroup variant="contained" color="primary" ref={anchorRef} aria-label="split button">
                    <Button onClick={handleClick}>{currentlyActive}</Button>
                   
                    <Button
                        color="primary"
                        size="small"
                        aria-controls={open ? 'split-button-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-label="select merge strategy"
                        aria-haspopup="menu"
                        onClick={handleToggle}
                    >
                        <ArrowDropDownIcon />
                    </Button>
                </ButtonGroup>
                <Popper open={open} placement="bottom-start" anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{
                                transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                            }}
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList id="split-button-menu">

                                            <CustomizedRadios setOpen={setOpen} onClick={(e)=>handleMenuItemClick(e)} />
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </Grid>
        </Grid>
    );
}
