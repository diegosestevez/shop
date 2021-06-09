import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(()=> ({
   root:
        {
            background: 'whitesmoke',
            marginTop: '8vh',
            // marginBottom:'8vh',
            height: '100vh',
            flexGrow: 1,
            backgroundImage: 'url(https://dbakevlar.com/wp-content/uploads/2019/04/EA8CFD0B-9BF8-4598-AD27-3F524735D7DB.gif)',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundRepeat:'no-repeat',
            backgroundSize: 'cover',
        },    
   content:
        {
            margin: '2vh 0',
        }, 
   heading:
        {
        textAlign: 'center',
        color: 'white',
        },
    button:
        {
            margin: 'auto',
            display: 'block',
            width: '85px',
            color:'white',
            borderColor:'white',
            "&:hover":{
                borderColor:'white',
                backgroundColor:'white',
                color: 'black',
            },
            "&:active":{
                borderColor:'red',
                backgroundColor:'red',
                color: 'grey',
            }
        },
    paragraph:
        {
            padding: '0 10vw 3rem 10vw',
            textAlign: 'justify',
        },
    divider:
    {
        borderTop: 'dotted 10px red', 
        width:'25%', 
        marginBottom: '4rem',
        marginTop:'1rem',
    },    
    cardContainer:
        {
            paddingBottom: '3rem',
        },    
    card:
        {
         cursor: 'pointer',    
        },        
    media: 
        {
            height: 0,
            paddingTop: '56.25%', // 16:9
        },
    cardContent: 
        {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
        },
    cardActions:
    {
        justifyContent:'flex-end',
    },
    texture:
    {
        paddingTop:'3rem',
        backgroundImage: " url(https://www.transparenttextures.com/patterns/french-stucco.png)",
    }              
}));