import { Card } from '@mui/material'
import { ISeriesDetail } from '../../common/interfaces/ISeriesDetail'
import { useLoaderData } from 'react-router-dom'

type SeriesDetailPageProps = {}

export function SeriesDetailPage({}: SeriesDetailPageProps) {
  const seriesInfo = useLoaderData() as ISeriesDetail

  return <Card>{seriesInfo.fullDescription}</Card>
}
