// import UserSmallPhotoContainer from 'commponents/Common/UserSmallPhoto/UserSmallPhotoContainer';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import { ColorModeContext } from '../../MyApp';


const Header = (props) => {
   
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);

return <Box className={s.header} sx={{bgcolor: 'background.header'}}>  
    <NavLink to="/profile">
    <div className={s.Logo}>
            <div className={s.LogoSVG}><svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg"><g fill-rule="nonzero" transform="matrix(.970286 0 0 .970286 155.473 65)"><path d="m127.8 8.9c10.6-1.2 20.2-6.1 30.5-8.9 1.4 2.8 3.1 6.2 6.8 6.2 3.7.6 5.8-3 7.5-5.7 8.9 3.5 17.1 8.4 26.2 11.4 4.7 1.6 10.4 1.3 14 5.3 4.3 4.7 4.4 11.5 3.7 17.4-.9 4.7-3.6 9.7-8.6 10.9-4.8 1.2-9.6 2-14.1 4-7.3 2.9-14 7.4-21.7 9.5-1-1.8-2.1-3.5-3.2-5.3-2.3 0-4.8-.2-6.9 1-1.4 1.2-2.3 2.9-3.3 4.4-11.2-.6-21.2-7.2-32.5-7-11.7.2-23.3 3-33.9 7.9-23 9.1-41.6 27.8-51.9 50.2-5.6 12.5-9.1 26-9.6 39.7-.4 23.5 6.7 47.4 21.1 66.1 6.9 10 16.2 18.2 26.2 25 21.2 14.9 48.3 20.4 73.9 17.3 31.2-3.7 60.4-21.6 77.9-47.7 11.7-16.3 18.2-35.9 19.7-55.8 1.8-15.8-.9-31.8-5.8-46.8-3.8-12.3-10.5-23.5-18.2-33.7-3.9-5.4-8.8-9.8-13.4-14.5 9.2 6.7 16.8 15.3 23.2 24.7 11.6 16.4 18.4 35.9 20.9 55.8.6 12.5 1 25.2-1.9 37.4-4.9 25.1-18.1 48.4-36.7 65.9-9.1 9.3-20.3 16-31.7 22.1-11 5.4-22.9 9.3-35.1 10.8-24.9 4.2-51.1.9-74.1-9.7-4.8-2.4-9.4-5.2-14.1-7.7-18.5-11.5-34.4-27.5-45.2-46.4-9.7-18.2-16.9-38.1-17.5-58.7.1-10-.6-20 1.3-29.9 5.1-30.1 20.1-58.6 42.9-79 12.3-11.6 27-20.3 42.6-26.6 13-5.6 27-8.1 41-9.6z"/><path d="m118.8 106.4c5.9-.8 12-.8 18 0 12.7 2.8 23.8 12 28.8 24.1 5.9 12.1 4.2 26.8-2.6 38.2-5.8 8.6-14.3 15.6-24.5 18.1-4.4.8-8.9 2.4-13.5 1.6-6.2-1-12.6-2.3-18-5.7-13.3-7.4-21.9-22.7-20.9-38 0-8.7 4-16.9 9.1-23.8 5.6-7.5 14.4-12.4 23.6-14.5z"/></g></svg></div>
            <div>AxiixA</div> 
    </div>
    </NavLink>
    
    <Box sx={{color: 'text.paper'}}>
      <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
</Box>
}

export default Header
