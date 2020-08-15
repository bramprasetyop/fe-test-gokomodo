import React from 'react'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core'
import ImageError from '../../assets/image/image-error.png';

const GKCard = (props) => {
  const { name, id, toggleModal } = props
  return (
    <div onClick={toggleModal}>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={name}
            height="140"
            image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            onError={e => e.target.src = ImageError}
            title={name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  )
};
export default GKCard
