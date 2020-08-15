import React, { Component } from 'react'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core'
import ImageError from '../../assets/image/image-error.png';

interface GKCardProps {
  name: string,
  id: number
  toggleModal(): void
}

class WPCard extends Component<GKCardProps> {
  constructor(props: GKCardProps) {
    super(props)
    this.state= {}
  }

  render() {
    const { name, id, toggleModal } = this.props
    return (
      <div onClick={toggleModal}>
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              alt={name}
              height="140"
              image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
              onError={(e: any) => e.target.src = ImageError}
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
  }
};

export default WPCard

