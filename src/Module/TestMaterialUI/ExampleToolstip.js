import React from 'react';
import {Grid, Tooltip, Button} from '@material-ui/core/';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

const ExampleToolstip = () => {

    const [open, setOpen] = React.useState(false);

    const handleTooltipClose = () => {
        setOpen(false);
    };

    const handleTooltipOpen = () => {
        setOpen(true);
    };
    
    return (
        <div>
            <Grid container justify="center">
                <Grid item>
                <Tooltip disableFocusListener title="Add">
                    <Button>Hover or touch</Button>
                </Tooltip>
                </Grid>
                <Grid item>
                <Tooltip disableHoverListener title="Add">
                    <Button>Focus or touch</Button>
                </Tooltip>
                </Grid>
                <Grid item>
                <Tooltip disableFocusListener disableTouchListener title="Add">
                    <Button>Hover</Button>
                </Tooltip>
                </Grid>
                <Grid item>
                <ClickAwayListener onClickAway={handleTooltipClose}>
                    <div>
                    <Tooltip
                        PopperProps={{
                        disablePortal: true,
                        }}
                        onClose={handleTooltipClose}
                        open={open}
                        disableFocusListener
                        disableHoverListener
                        disableTouchListener
                        title="Add"
                        arrow
                    >
                        <Button onClick={handleTooltipOpen}>Click</Button>
                    </Tooltip>
                    </div>
                </ClickAwayListener>
                </Grid>
            </Grid>
            </div>
    );
};

export default ExampleToolstip;