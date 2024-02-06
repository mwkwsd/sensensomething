import { ISeriesDetail } from "../../../common/interfaces/ISeriesDetail"
import { VideoTitle } from "../../atoms/videoTitle/VideoTitle"

type SeriesListCardProps = {
  seriesInfo: ISeriesDetail
}

export function SeriesListCard({ seriesInfo }: SeriesListCardProps) {
  const { name, highlightUrl, genres, roles } = seriesInfo
  const short = seriesInfo.shortDescription

  return (
    <>
      <VideoTitle title={name}></VideoTitle>
    </>
  )
}
