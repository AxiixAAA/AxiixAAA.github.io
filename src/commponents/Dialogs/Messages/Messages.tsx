
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { FC, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { TOpponent, TOpponentMessages } from "../../../api/dialogs";
import userImage from '../../../assets/images/user.png';
import { TUserProfile } from "../../../type/types";
import { InputField } from "../InputField/InputField";

type Theme = {
    palette: any;
  };
const useStyles:any = makeStyles((theme:Theme) => ({
    
    wrapper: {
        height: '81vh',
        padding: '10px 15px',
        backgroundColor: theme.palette.background.paper,
        borderRadius: '8px',
        overflowY: 'auto',
        overflowX: 'hidden',
        width: '535px',

// >>>>>>>>>>>>>>>>>
        border: '2px solid red',
// >>>>>>>>>>>>>>>>>
    },
    messageWrapper:{
        padding: '5px',
        display: 'flex',
        alignItems: 'flex-start',
        gap: '20px',
    },
    
    message:{
        width: '370px',
        margin: '0',
        marginRight: '20px',
        padding: '0',
        overflowWrap: 'break-word',
    },
    
    
    photo:{
        marginTop: '5px',
        borderRadius: '50%',
        verticalAlign: 'middle',
    },
    
    senderName:{
        margin: '0',
        padding: '0',
        color: '#F53838',
        fontSize:'20px',
    },
    
    chooseOpponent:{
        color: 'var(--font-grey-disactive)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '60%',
    },
    
    
}));

export const Messages: FC<TProps> = ({ messages, currentOpponent, authProfile }) => {
    const classes = useStyles()
    const divRef = useRef<HTMLDivElement>(null)

    const scrollToBottom = () => {
        divRef.current?.scrollIntoView(true);
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    return <Box className={classes.wrapper}>
        {currentOpponent.id
            ? messages.map(m => {
                return <Box key={m.id} className={classes.messageWrapper}>
                    <Box className={classes.photoWrapper}>
                        <Link to={`/users/${m.senderId}`}>
                            <img
                                src={currentOpponent.id === m.senderId
                                    ? currentOpponent.photos.small || userImage
                                    : authProfile.photos.small || userImage}
                                alt='фото пользователя'
                                width='50px'
                                className={classes.photo}
                            />
                        </Link>
                    </Box>
                    <Box>
                        <p className={classes.senderName}>{m.senderName}</p>
                        <p className={classes.message}>{m.body}</p>
                    </Box>

                </Box>
            })
            : <Box className={classes.chooseOpponent}>Выберите собеседника</Box>}
            <Box ref={divRef}></Box> {/* for autosrolling to this div */}
            <InputField currentOpponent={currentOpponent} />
    </Box>
}


type TProps = {
    messages: TOpponentMessages[]
    currentOpponent: TOpponent
    authProfile: TUserProfile
}