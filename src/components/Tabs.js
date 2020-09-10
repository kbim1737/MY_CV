import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SchoolIcon from '@material-ui/icons/School';
import LanguageIcon from '@material-ui/icons/Language';
import ComputerIcon from '@material-ui/icons/Computer';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import TimelineIcon from '@material-ui/icons/Timeline';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import Box from '@material-ui/core/Box';
import SchoolGrid from './SchoolGrid';
import LanguageDivider from './LanguageDivider';
import SkillChips from './SkillChips';
import CertificationDividers from './CertificationDividers';
import ProjectsList from './ProjectsList';
import StrengthsList from './StrengthsList';
import PassionsList from './PassionsList';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
          <Box p={3}>{children}</Box>    
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: 'auto',
    backgroundColor: theme.palette.background.paper,
  },
  appbar: {
    width: 'auto',
    marginBottom: '2rem',
  }
}));

export default function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit" className={classes.appbar}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="Education" icon={<SchoolIcon />} {...a11yProps(0)} />
          <Tab label="Languages" icon={<LanguageIcon />} {...a11yProps(1)} />
          <Tab label="Skills" icon={<ComputerIcon />} {...a11yProps(2)} />
          <Tab label="Certifications" icon={<VerifiedUserIcon />} {...a11yProps(3)} />
          <Tab label="Projects" icon={<TimelineIcon />} {...a11yProps(4)} />
          <Tab label="Strengths" icon={<FlashOnIcon />} {...a11yProps(5)} />
          <Tab label="Passions" icon={<EmojiPeopleIcon />} {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <SchoolGrid/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <LanguageDivider/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <SkillChips/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <CertificationDividers/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <ProjectsList/>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <StrengthsList/>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <PassionsList/>
      </TabPanel>
    </div>
  );
}
