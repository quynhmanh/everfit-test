import React, {Component} from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import CalendarStore from './stores/CalendarStore';
import { observer } from "mobx-react"
import moment from "moment";
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    // width: 150,
    // flex: 1/7,
    boxShadow: 'none',
    backgroundColor: '#f3f5f8',
  },
  control: {
    padding: theme.spacing(2),
  },
}));

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// console.log('CalendarStore.calendarMode', Array.from(Array(CalendarStore.calendarMode)));

const dates = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

class App extends Component {
  constructor(props) {
    super(props); 
  }
  handleChange = event => {
    // setSpacing(Number(event.target.value));
  };
  render() {
  return (
    <Container maxWidth="sx" style={{height: '100%',}}>
      <Box my={4} style={{height: '100%',}}>
        <Typography variant="h4" component="h1" gutterBottom>
          {/* Create React App v4-beta example */}
        </Typography>
        {/* <ProTip /> */}
        <Grid
      justify="space-between" // Add it here :)
      container 
      spacing={24}
    >
      <Grid item>
        <Typography type="title" color="inherit">
          <button onClick={(e) => {
            CalendarStore.previousWeek();
          }}>
            <svg width="7px" height="12px" viewBox="0 0 7 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                    <g id="workout-library-1" transform="translate(-37.000000, -118.000000)" stroke="#728096" stroke-width="1.5">
                        <g id="calendar" transform="translate(13.000000, 97.000000)">
                            <g id="header" transform="translate(18.000000, 11.000000)">
                                <polyline id="arrow" points="12 21 7 16 12 11"></polyline>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
          </button>
          <button style={{
            border: 'none',
          }}>
            <svg width="16px" height="18px" viewBox="0 0 16 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="workout-library-1" transform="translate(-86.000000, -114.000000)" fill="#273d52" fill-rule="nonzero" stroke="#273d52">
                        <g id="calendar" transform="translate(13.000000, 97.000000)">
                            <g id="header" transform="translate(18.000000, 11.000000)">
                                <g id="calendar-icon" transform="translate(55.333333, 7.000000)">
                                    <path d="M14.9300292,3.13119534 C14.8250729,2.62390671 14.5801749,2.16909621 14.2303207,1.81924198 C14.1253644,1.71428571 14.0029155,1.60932945 13.8629738,1.52186589 L13.845481,1.50437318 C13.8279883,1.48688047 13.8104956,1.48688047 13.7930029,1.46938776 C13.7405248,1.43440233 13.6880466,1.39941691 13.6355685,1.3819242 L13.6180758,1.3819242 C13.2507289,1.18950437 12.8483965,1.0845481 12.393586,1.0845481 L11.3090379,1.0845481 L11.3090379,0.332361516 C11.3090379,0.157434402 11.1690962,0 10.9766764,0 C10.8017493,0 10.6443149,0.139941691 10.6443149,0.332361516 L10.6443149,1.04956268 L4.36443149,1.04956268 L4.36443149,0.332361516 C4.36443149,0.157434402 4.20699708,0 4.03206997,0 C3.85714286,0 3.69970845,0.139941691 3.69970845,0.332361516 L3.69970845,1.04956268 L2.61516035,1.04956268 C2.28279883,1.04956268 1.95043732,1.11953353 1.65306122,1.24198251 C1.32069971,1.3819242 1.02332362,1.57434402 0.778425656,1.81924198 C0.638483965,1.95918367 0.516034985,2.11661808 0.411078717,2.27405248 C0.306122449,2.44897959 0.218658892,2.62390671 0.148688047,2.81632653 C0.113702624,2.9212828 0.0787172012,3.02623907 0.0612244898,3.13119534 C0.0262390671,3.30612245 0.00874635568,3.48104956 0.00874635568,3.65597668 L0.00874635568,5.40524781 L0.00874635568,13.4693878 C0.00874635568,14.1865889 0.306122449,14.8338192 0.760932945,15.2886297 C1.23323615,15.7609329 1.88046647,16.0408163 2.58017493,16.0408163 L12.4110787,16.0408163 C13.1282799,16.0408163 13.7755102,15.7434402 14.2303207,15.2886297 C14.7026239,14.8163265 14.9825073,14.1690962 14.9825073,13.4693878 L14.9825073,5.40524781 L14.9825073,3.65597668 C14.9825073,3.48104956 14.9650146,3.30612245 14.9300292,3.13119534 Z M0.690962099,3.63848397 C0.690962099,3.49854227 0.70845481,3.37609329 0.725947522,3.25364431 C0.743440233,3.13119534 0.795918367,3.00874636 0.83090379,2.88629738 C0.900874636,2.72886297 0.988338192,2.58892128 1.07580175,2.4664723 C1.12827988,2.39650146 1.18075802,2.34402332 1.23323615,2.27405248 C1.33819242,2.16909621 1.4606414,2.08163265 1.58309038,1.9941691 C1.88046647,1.81924198 2.21282799,1.71428571 2.58017493,1.71428571 L3.66472303,1.71428571 L3.66472303,2.43148688 C3.66472303,2.60641399 3.80466472,2.7638484 3.99708455,2.7638484 C4.17201166,2.7638484 4.32944606,2.62390671 4.32944606,2.43148688 L4.32944606,1.71428571 L10.696793,1.71428571 L10.696793,2.43148688 C10.696793,2.60641399 10.8367347,2.7638484 11.0291545,2.7638484 C11.2040816,2.7638484 11.361516,2.62390671 11.361516,2.43148688 L11.361516,1.71428571 L12.4460641,1.71428571 C12.8134111,1.71428571 13.1632653,1.81924198 13.4431487,1.9941691 C13.5655977,2.08163265 13.6880466,2.16909621 13.7930029,2.27405248 C14.0553936,2.53644315 14.2478134,2.86880466 14.3177843,3.25364431 C14.335277,3.37609329 14.3527697,3.51603499 14.3527697,3.63848397 L14.3527697,5.0728863 L0.690962099,5.0728863 L0.690962099,3.63848397 Z M14.3702624,13.451895 C14.3702624,13.9941691 14.1603499,14.483965 13.8104956,14.8338192 C13.4606414,15.1836735 12.9708455,15.393586 12.4460641,15.393586 L2.61516035,15.393586 C2.09037901,15.393586 1.60058309,15.1836735 1.25072886,14.8338192 C0.900874636,14.483965 0.690962099,13.9941691 0.690962099,13.4693878 L0.690962099,5.72011662 L14.3702624,5.72011662 L14.3702624,13.451895 Z" id="Shape" stroke-width="0.5"></path>
                                    <path d="M10.2380242,7.56729115 C10.0498668,7.44263913 9.79568686,7.49614071 9.67180519,7.68665221 L6.82109068,12.3880346 L5.47680136,10.4740752 C5.31085361,10.3188429 5.05257374,10.3294433 4.89888913,10.496423 C4.74579286,10.6628107 4.75572104,10.9238806 4.92168718,11.0773369 L6.62708661,13.3458461 L6.67323428,13.3881738 L6.72932852,13.4093376 L6.79652762,13.4375684 L6.86490339,13.4481503 L6.96306371,13.4469663 L7.00279483,13.4375499 L7.11731827,13.3893393 L7.13542801,13.3764079 L7.20555041,13.3252558 L7.23827665,13.2711622 L10.3566109,8.13762317 C10.4805293,7.94711167 10.4279283,7.69192467 10.2380242,7.56729115 Z" id="Shape" stroke-width="0.3"></path>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
          </button>
          <DatePicker
            startDate={moment().toDate()}
            endDate={moment().add(1, "days").toDate()}
            // selectsStart={moment().subtract(CalendarStore.offsetDays, "days").toDate()}
            // selectsEnd={moment().subtract(CalendarStore.offsetDays, "days").add(CalendarStore.calendarMode * 7, "days").toDate()}
            onChange={this.handleChange}
          />
          <div style={{
            display: 'inline',
            margin: "0 15px",
          }}>
            <span>{moment().subtract(CalendarStore.offsetDays, "days").format("MMM Do").toString()}</span>
            <span> - {moment().subtract(CalendarStore.offsetDays, "days").add(CalendarStore.calendarMode * 7, "days").format("MMM Do").toString()}</span>
          </div>
          <button onClick={(e) => {
            CalendarStore.nextWeek();
          }}>
            <svg width="7px" height="12px" viewBox="0 0 7 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                    <g id="workout-library-1" transform="translate(-219.000000, -118.000000)" stroke="#728096" stroke-width="1.5">
                        <g id="calendar" transform="translate(13.000000, 97.000000)">
                            <g id="header" transform="translate(18.000000, 11.000000)">
                                <polyline id="arrow-copy" transform="translate(191.500000, 16.000000) rotate(180.000000) translate(-191.500000, -16.000000) " points="194 21 189 16 194 11"></polyline>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
          </button>
        </Typography>
      </Grid>

      <Grid item>
        <div>
          <Button style={{
            backgroundColor: CalendarStore.calendarMode === 1 ? "black" : "white",
            color: CalendarStore.calendarMode === 1 ? "white" : "black",
          }} onClick={(e) => {
            CalendarStore.calendarMode = 1;
          }}>
            1 week
          </Button>
          <Button style={{
            backgroundColor: CalendarStore.calendarMode === 2 ? "black" : "white",
            color: CalendarStore.calendarMode === 2 ? "white" : "black",
          }} onClick={(e) => {
            CalendarStore.calendarMode = 2;
          }}>
            2 week
          </Button>
          <Button style={{
            backgroundColor: CalendarStore.calendarMode === 4 ? "black" : "white",
            color: CalendarStore.calendarMode === 4 ? "white" : "black",
          }} onClick={(e) => {
            CalendarStore.calendarMode = 4;
          }}>
            4 week
          </Button>
        </div>
      </Grid>
    </Grid>
    <Grid item xs={12}>
              <Grid container justify="center" spacing={1}>
                {[0, 1, 2, 3, 4, 5, 6].map((value, i) => (
                  <Grid key={value} item  style={{width: '14%',}}>
                    <p style={{margin: 0}}>{dates[i]}</p>
                  </Grid>
                ))}
              </Grid>
            </Grid>
        <Grid container className={""} spacing={2} style={{height: 'calc(100% - 100px)',}}>
          {Array(CalendarStore.calendarMode).fill(0).map((i, j) => 
            <Grid item xs={12} style={{height: `${CalendarStore.calendarMode === 1 ? "100%" : CalendarStore.calendarMode === 2 ? "50%" : "25%"}%`,}}>
              <Grid container justify="center" spacing={2} style={{height: '100%',}}>
                {[0, 1, 2, 3, 4, 5, 6].map((value, i) => {
                  var date = moment().subtract(CalendarStore.offsetDays, "days").add(j * 7 + value, "days");
                  var iscurrentDate = date.isSame(new Date(), "day");
                  console.log('iscurrentdate ', iscurrentDate);
                  return (
                  <Grid key={value} item  style={{width: '14%', height: '100%',}}>
                  <Paper className={""} style={{width: '100%', height: '100%', backgroundColor: '#f3f5f8',}}>
                    <button
                      style={{
                        marginLeft: '7px' ,
                        marginTop: '7px',
                        borderRadius: '50%',
                        width: '30px',
                        height: '30px',
                        color: iscurrentDate ? 'white' : 'black',
                        backgroundColor: iscurrentDate ? 'purple' : 'transparent',
                        border: !iscurrentDate && 'none',
                      }}
                    >
                    {date.format('D').toString()}</button>
                    </Paper>
                </Grid>
                )}
                )}
              </Grid>
            </Grid>)}
      {/* <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {[0, 1, 2, 3, 4, 5, 6].map(value => (
            <Grid key={value} item  style={{width: '14%',}}>
              <Paper className={classes.paper} style={{width: '100%',}}>
                </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {[0, 1, 2, 3, 4, 5, 6].map(value => (
            <Grid key={value} item  style={{width: '14%',}}>
              <Paper className={classes.paper} style={{width: '100%',}}>
                </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid> */}
      {/* <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {[0, 1, 2, 3, 4, 5, 6].map(value => (
            <Grid key={value} item  style={{width: '14%',}}>
              <Paper className={classes.paper} style={{width: '100%',}}>
                </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid> */}
      {/* <Grid item xs={12}>
        <Paper className={classes.control}>
          <Grid container>
            <Grid item>
              <FormLabel>spacing</FormLabel>
              <RadioGroup
                name="spacing"
                aria-label="spacing"
                value={spacing.toString()}
                onChange={handleChange}
                row
              >
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(value => (
                  <FormControlLabel
                    key={value}
                    value={value.toString()}
                    control={<Radio />}
                    label={value.toString()}
                  />
                ))}
              </RadioGroup>
            </Grid>
          </Grid>
        </Paper>
      </Grid> */}
    </Grid>
    {/* <Copyright /> */}
      </Box>
    </Container>
  );
    }
}

const a = observer(App);

export default a;