import { Card, Skeleton, CardBody, SkeletonText } from "@chakra-ui/react"

const GameCardSkeleton = () => {
  return (
    <Card width="380px" borderRadius={10} overflow="hidden">
        <Skeleton height="352px" />
        <CardBody>
            <SkeletonText/>
        </CardBody>
    </Card>
  )
}

export default GameCardSkeleton;