import { Role } from '../../common/constants/enums'
import { IVideoListPageInfo } from '../../common/interfaces/IVideoListPageInfo'

export const videoListPagesInfo: { [key in Role]: IVideoListPageInfo } & {
  documentary: IVideoListPageInfo
} = {
  director_of_photography: {},
  director_producer: {
    subheaderText:
      'Risus velit lectus ut vitae sit nunc mauris mattis erat. Posuere adipiscing nisi lacinia lacinia facilisi venenatis aliquam. Nec enim et cursus vitae velit elementum. Euismod nunc blandit arcu mi commodo amet sed viverra.',
  },
  documentary: {},
}
