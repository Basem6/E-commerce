import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
export default function TemporaryDrawer({children}) {
    const [open, setOpen] = React.useState(false);
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };
    const DrawerList = (
        <Box className='py-8 px-4' sx={{ width: 250 , bgcolor:"black" ,minHeight:"100%" ,color:"wheat" }} role="presentation" onClick={toggleDrawer(false)}>
        {children}
        </Box>
    );
    return (
        <div>
        <Button onClick={toggleDrawer(true)} className='flex gap-2 relative  bg-[#f1c48d] py-1 px-2 rounded-md items-center'>
            <span className='fa-solid fa-arrow-down-short-wide text-black/80 '></span>
            <span className='font-normal text-black/80' >Filters</span>
        </Button>
        <Drawer open={open} onClose={toggleDrawer(false)}>
            {DrawerList}
        </Drawer>
        </div>
    );
    }
