import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const Create = () => {
  return (
    <>
      <Typography
        variant='h6'
        color='textSecondary'
        component='h2'
        gutterBottom
      >
        Create a New Note
      </Typography>
      <Button type='submit' color='primary'>
        Submit
      </Button>{' '}
    </>
  )
}

export default Create
