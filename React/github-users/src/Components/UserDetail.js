// import React,{useState} from 'react'
// export default function () {
//     const [userName, setuserName] = useState(localStorage.getItem('name'))
//     const [image, setimage] = useState(localStorage.getItem('img'))
//     return (
        
//         <div className="details-container">
//              {
//                 console.log(image)
//             }
//             <h2>User Detail Page</h2>
//             <h3>{userName}</h3>
//             <img src={image}/>
           
//         </div>
//     )
// }

import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin:"auto",
    marginTop:"50px",
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  const [userName, setuserName] = useState(localStorage.getItem('name'))
    const [image, setimage] = useState(localStorage.getItem('img'))
  return (
      <div className={classes.root}>
          <Typography variant="h3" style={{marginBottom:20,textAlign:'center'}}>User Details</Typography>
    <Card>
        
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="250"
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {userName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Vestibulum tempus, ipsum a tincidunt lobortis, dui arcu luctus eros, in aliquam augue urna semper libero. Mauris at malesuada diam. Nam hendrerit sit amet erat vitae auctor.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
}


