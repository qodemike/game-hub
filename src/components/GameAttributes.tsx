import { SimpleGrid,Text } from '@chakra-ui/react'
import DefinitionItem from './DefinitionItem'
import Games from '../entities/Games'
import CriticScore from './CriticScore'

interface Props{
    data: Games
}

const GameAttributes = ({data}: Props) => {
  return (
    <>
    <SimpleGrid columns={{base:2}} as='dl' >
      <DefinitionItem term="Platforms">
        {data.platforms.map(({ platform }) => (
          <Text
            lineHeight={"1.8"}
            fontFamily={"Inter"}
            fontWeight={"300"}
            key={platform.id}
          >
            {platform.name}
          </Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Metascore">
        <CriticScore score={data.metacritic}></CriticScore>
      </DefinitionItem>
      <DefinitionItem term="Genres">
        {data.genres.map((genre) => (
          <Text
            lineHeight={"1.8"}
            fontFamily={"Inter"}
            fontWeight={"300"}
            key={genre.id}
          >
            {genre.name}
          </Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Publishers">
        {data.publishers?.map((publisher) => (
          <Text
            lineHeight={"1.8"}
            fontFamily={"Inter"}
            fontWeight={"300"}
            key={publisher.id}
          >
            {publisher.name}
          </Text>
        ))}
      </DefinitionItem>
      </SimpleGrid>
    </>
  )
}

export default GameAttributes