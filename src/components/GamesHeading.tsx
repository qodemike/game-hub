import { Heading } from '@chakra-ui/react'
import styles from './GamesHeading.module.css'
import React from 'react'
import { GameQueries } from '../App'

interface Props{
    gameQueries: GameQueries;
}

const GamesHeading = ({ gameQueries }: Props) => {
  return (
    <Heading className={styles.heading} fontSize={"5xl"}>{`${gameQueries.platform?.name || ''} ${gameQueries.genre?.name || ''} Games`}</Heading>
  )
}

export default GamesHeading;