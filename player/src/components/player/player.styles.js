import styled from 'styled-components';

import media from '../../styles/media';
import { colors } from '../../styles/theme';

export const MusicCard = styled.div`
@media ${media.phone} {
    color: ${colors.neutral};
    background: ${colors.secondary};
    flex-direction: column;
    width: 100%;
    justify-content: center;
    text-align: center;
}
@media${media.mobile} {
    
}
`