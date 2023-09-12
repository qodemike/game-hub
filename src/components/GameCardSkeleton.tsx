import { Card, Skeleton, CardBody, SkeletonText } from "@chakra-ui/react"

const GameCardSkeleton = () => {
  return (
    <Card width="350" borderRadius={10} overflow='hidden'>
        <Skeleton height="250px" />
        <CardBody>
            <SkeletonText/>
        </CardBody>
    </Card>
  )
}

export default GameCardSkeleton;