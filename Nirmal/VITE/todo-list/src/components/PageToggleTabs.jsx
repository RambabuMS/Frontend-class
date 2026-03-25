import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

export default function PageToggleTabs() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}        
        textColor="primary"
        indicatorColor="primary"
        aria-label="primary tabs example"
      >
        <Tab value="one" label="All Tasks" sx={{color: 'white'}} component={Link} to="/" />
        <Tab value="two" label="Pending Tasks" sx={{color: 'white'}}  component={Link} to="/pending"/>
        <Tab value="three" label="Completed Tasks" sx={{color: 'white'}}  component={Link} to="/completed"/>
      </Tabs>
    </Box>
  );
}
