import React from 'react';
import * as PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import EventCard from './EventCard.js';
import eventInfo from './eventInfo.json';
import Grid from "@material-ui/core/Grid";

const styles = () => ({
    root: {
        flexGrow: 1
    },
    header: {
        textAlign: 'center'
    }
});

const EventApp = ({classes}) => {
    return (
        <Grid className={classes.root} spacing={8} container>
            {
                eventInfo.map((event, index) => (
                    <Grid key={index} item>
                        <EventCard
                            abbr={event.abbr}
                            title={event.title}
                            subheader={event.subheader}
                            brief={event.brief}
                            description={event.description}
                        />
                    </Grid>
                ))}
        </Grid>
    );
};

EventApp.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EventApp);
