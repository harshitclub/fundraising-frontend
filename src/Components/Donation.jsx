import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import '../Styles/Components/Donation.css'
import image from '../assets/gallery1.jpg'
import image2 from '../assets/gallery2.jpg'
import image3 from '../assets/gallery3.jpg'

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }


const Donation = () => {

    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
    <div className='donation-container'>
    <Box sx={{ width: '80%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}  className='box-container'>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Medical" {...a11yProps(0)} className='tab-f'/>
          <Tab label="Education" {...a11yProps(1)}  className='tab-f'/>
          <Tab label="Natural Disaster" {...a11yProps(2)} className='tab-f'/>
          <Tab label="Other" {...a11yProps(3)} className='tab-f'/>
        </Tabs>
      </Box>
      <div className='d-inner-container'>
      <TabPanel value={value} index={0}>
        <div className='donation'>
            <img src={image} alt=''/>
            <div className='d-content'>
            {/* <p className='p-1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam illo dolor quam pariatur</p> */}
            <p className='p-2'>Brain Tumor</p>
            <div className='d-div'>
                <div>
                <p className='p-3'>Raised</p>
                <p className='p-4'>₹ 11,52,373</p>
                </div>
                <div>
                <p className='p-5'>Total</p>
                <p className='p-6'>₹ 20,00,000</p>
                </div>
            </div>
            <p className='p-8'>60% Raised</p>
                <meter className='d-line' value="6" min="0" max="10">2/10</meter>
            <p className='p-7'>For Every ₹100 You Donate, Sadhana will contribute ₹8 on your behalf.</p>
            </div>
        </div>
        </TabPanel>
        <TabPanel value={value} index={0}>
        <div className='donation'>
            <img src={image2} alt=''/>
            <div className='d-content'>
            {/* <p className='p-1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam illo dolor quam pariatur</p> */}
            <p className='p-2'>Brain Tumor</p>
            <div className='d-div'>
                <div>
                <p className='p-3'>Raised</p>
                <p className='p-4'>₹ 11,52,373</p>
                </div>
                <div>
                <p className='p-5'>Total</p>
                <p className='p-6'>₹ 20,00,000</p>
                </div>
            </div>
            <p className='p-8'>60% Raised</p>
                <meter className='d-line' value="6" min="0" max="10">2/10</meter>
            <p className='p-7'>For Every ₹100 You Donate, Sadhana will contribute ₹8 on your behalf.</p>
            </div>
        </div>
        </TabPanel>
        <TabPanel value={value} index={0}>
        <div className='donation'>
            <img src={image3} alt=''/>
            <div className='d-content'>
            {/* <p className='p-1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam illo dolor quam pariatur</p> */}
            <p className='p-2'>Brain Tumor</p>
            <div className='d-div'>
                <div>
                <p className='p-3'>Raised</p>
                <p className='p-4'>₹ 11,52,373</p>
                </div>
                <div>
                <p className='p-5'>Total</p>
                <p className='p-6'>₹ 20,00,000</p>
                </div>
            </div>
            <p className='p-8'>60% Raised</p>
                <meter className='d-line' value="6" min="0" max="10">2/10</meter>
            <p className='p-7'>For Every ₹100 You Donate, Sadhana will contribute ₹8 on your behalf.</p>
            </div>
        </div>
        </TabPanel>
        </div>

        <div className='d-inner-container'>
      <TabPanel value={value} index={1}>
        <div className='donation'>
            <img src={image3} alt=''/>
            <div className='d-content'>
            {/* <p className='p-1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam illo dolor quam pariatur</p> */}
            <p className='p-2'>Brain Tumor</p>
            <div className='d-div'>
                <div>
                <p className='p-3'>Raised</p>
                <p className='p-4'>₹ 11,52,373</p>
                </div>
                <div>
                <p className='p-5'>Total</p>
                <p className='p-6'>₹ 20,00,000</p>
                </div>
            </div>
            <p className='p-8'>60% Raised</p>
                <meter className='d-line' value="6" min="0" max="10">2/10</meter>
            <p className='p-7'>For Every ₹100 You Donate, Sadhana will contribute ₹8 on your behalf.</p>
            </div>
        </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
        <div className='donation'>
            <img src={image2} alt=''/>
            <div className='d-content'>
            {/* <p className='p-1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam illo dolor quam pariatur</p> */}
            <p className='p-2'>Brain Tumor</p>
            <div className='d-div'>
                <div>
                <p className='p-3'>Raised</p>
                <p className='p-4'>₹ 11,52,373</p>
                </div>
                <div>
                <p className='p-5'>Total</p>
                <p className='p-6'>₹ 20,00,000</p>
                </div>
            </div>
            <p className='p-8'>60% Raised</p>
                <meter className='d-line' value="6" min="0" max="10">2/10</meter>
            <p className='p-7'>For Every ₹100 You Donate, Sadhana will contribute ₹8 on your behalf.</p>
            </div>
        </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
        <div className='donation'>
            <img src={image} alt=''/>
            <div className='d-content'>
            {/* <p className='p-1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam illo dolor quam pariatur</p> */}
            <p className='p-2'>Brain Tumor</p>
            <div className='d-div'>
                <div>
                <p className='p-3'>Raised</p>
                <p className='p-4'>₹ 11,52,373</p>
                </div>
                <div>
                <p className='p-5'>Total</p>
                <p className='p-6'>₹ 20,00,000</p>
                </div>
            </div>
            <p className='p-8'>60% Raised</p>
                <meter className='d-line' value="6" min="0" max="10">2/10</meter>
            <p className='p-7'>For Every ₹100 You Donate, Sadhana will contribute ₹8 on your behalf.</p>
            </div>
        </div>
        </TabPanel>
        </div>

        <div className='d-inner-container'>
      <TabPanel value={value} index={2}>
        <div className='donation'>
            <img src={image2} alt=''/>
            <div className='d-content'>
            {/* <p className='p-1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam illo dolor quam pariatur</p> */}
            <p className='p-2'>Brain Tumor</p>
            <div className='d-div'>
                <div>
                <p className='p-3'>Raised</p>
                <p className='p-4'>₹ 11,52,373</p>
                </div>
                <div>
                <p className='p-5'>Total</p>
                <p className='p-6'>₹ 20,00,000</p>
                </div>
            </div>
            <p className='p-8'>60% Raised</p>
                <meter className='d-line' value="6" min="0" max="10">2/10</meter>
            <p className='p-7'>For Every ₹100 You Donate, Sadhana will contribute ₹8 on your behalf.</p>
            </div>
        </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
        <div className='donation'>
            <img src={image3} alt=''/>
            <div className='d-content'>
            {/* <p className='p-1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam illo dolor quam pariatur</p> */}
            <p className='p-2'>Brain Tumor</p>
            <div className='d-div'>
                <div>
                <p className='p-3'>Raised</p>
                <p className='p-4'>₹ 11,52,373</p>
                </div>
                <div>
                <p className='p-5'>Total</p>
                <p className='p-6'>₹ 20,00,000</p>
                </div>
            </div>
            <p className='p-8'>60% Raised</p>
                <meter className='d-line' value="6" min="0" max="10">2/10</meter>
            <p className='p-7'>For Every ₹100 You Donate, Sadhana will contribute ₹8 on your behalf.</p>
            </div>
        </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
        <div className='donation'>
            <img src={image} alt=''/>
            <div className='d-content'>
            {/* <p className='p-1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam illo dolor quam pariatur</p> */}
            <p className='p-2'>Brain Tumor</p>
            <div className='d-div'>
                <div>
                <p className='p-3'>Raised</p>
                <p className='p-4'>₹ 11,52,373</p>
                </div>
                <div>
                <p className='p-5'>Total</p>
                <p className='p-6'>₹ 20,00,000</p>
                </div>
            </div>
            <p className='p-8'>60% Raised</p>
                <meter className='d-line' value="6" min="0" max="10">2/10</meter>
            <p className='p-7'>For Every ₹100 You Donate, Sadhana will contribute ₹8 on your behalf.</p>
            </div>
        </div>
        </TabPanel>
        </div>

        <div className='d-inner-container'>
      <TabPanel value={value} index={3}>
        <div className='donation'>
            <img src={image} alt=''/>
            <div className='d-content'>
            {/* <p className='p-1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam illo dolor quam pariatur</p> */}
            <p className='p-2'>Brain Tumor</p>
            <div className='d-div'>
                <div>
                <p className='p-3'>Raised</p>
                <p className='p-4'>₹ 11,52,373</p>
                </div>
                <div>
                <p className='p-5'>Total</p>
                <p className='p-6'>₹ 20,00,000</p>
                </div>
            </div>
            <p className='p-8'>60% Raised</p>
                <meter className='d-line' value="6" min="0" max="10">2/10</meter>
            <p className='p-7'>For Every ₹100 You Donate, Sadhana will contribute ₹8 on your behalf.</p>
            </div>
        </div>
        </TabPanel>
        <TabPanel value={value} index={3}>
        <div className='donation'>
            <img src={image2} alt=''/>
            <div className='d-content'>
            {/* <p className='p-1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam illo dolor quam pariatur</p> */}
            <p className='p-2'>Brain Tumor</p>
            <div className='d-div'>
                <div>
                <p className='p-3'>Raised</p>
                <p className='p-4'>₹ 11,52,373</p>
                </div>
                <div>
                <p className='p-5'>Total</p>
                <p className='p-6'>₹ 20,00,000</p>
                </div>
            </div>
            <p className='p-8'>60% Raised</p>
                <meter className='d-line' value="6" min="0" max="10">2/10</meter>
            <p className='p-7'>For Every ₹100 You Donate, Sadhana will contribute ₹8 on your behalf.</p>
            </div>
        </div>
        </TabPanel>
        <TabPanel value={value} index={3}>
        <div className='donation'>
            <img src={image3} alt=''/>
            <div className='d-content'>
            {/* <p className='p-1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam illo dolor quam pariatur</p> */}
            <p className='p-2'>Brain Tumor</p>
            <div className='d-div'>
                <div>
                <p className='p-3'>Raised</p>
                <p className='p-4'>₹ 11,52,373</p>
                </div>
                <div>
                <p className='p-5'>Total</p>
                <p className='p-6'>₹ 20,00,000</p>
                </div>
            </div>
            <p className='p-8'>60% Raised</p>
                <meter className='d-line' value="6" min="0" max="10">2/10</meter>
            <p className='p-7'>For Every ₹100 You Donate, Sadhana will contribute ₹8 on your behalf.</p>
            </div>
        </div>
        </TabPanel>
        </div>
        </Box>
    </div>
    </>
  )
}

export default Donation