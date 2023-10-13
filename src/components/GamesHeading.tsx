import { Heading } from '@chakra-ui/react'
import useGameQueryStore from '../store';


const GamesHeading = () => {
  const { gameQuery} = useGameQueryStore()
  return (
    <Heading fontSize={"5xl"}> {`${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} ${ gameQuery.searchText? `${gameQuery.searchText} search results` :"Games"}`}</Heading>
  )
}

export default GamesHeading;