import useTrailers from "../hooks/useGameTrailers"

interface Props{
  gameId: number
}

const GameTrailer = ({gameId}: Props) => {
  const {data, error, isLoading} = useTrailers(gameId);
  
  const video = data?.results[0];

  if (error) throw error; 

  return (
    video ?
    <video 
      src={data?.results[0]?.data[480]}
      poster={data?.results[0]?.preview}
      controls
    />
    : null
  )
}

export default GameTrailer