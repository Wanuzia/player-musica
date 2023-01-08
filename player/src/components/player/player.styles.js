import styled from 'styled-components';

import media from '../../styles/media';
import { colors } from '../../styles/theme';

export const Card = styled.div`
@media ${media.phone} {
    color: ${colors.neutral};
    background: ${colors.secondary}
}
`