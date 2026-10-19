import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

const IMAGES = [
  'https://images.unsplash.com/photo-1542744095-291d1f67b221?auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1505691723518-36a0f2f6d6f6?auto=format&fit=crop&w=800&q=60'
]

export default function Gallery(){
  return (
    <div>
      <Typography variant="h5" component="h2" gutterBottom>Einblicke</Typography>
      <Grid container spacing={2}>
        {IMAGES.map((src, idx) => (
          <Grid item xs={12} sm={6} md={3} key={idx}>
            <Card>
              <CardMedia
                component="img"
                height="160"
                image={src}
                alt={`Einblick ${idx + 1}`}
                loading="lazy"
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
