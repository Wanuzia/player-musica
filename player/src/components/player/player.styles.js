import styled from 'styled-components';

import media from '../../styles/media';
import { colors } from '../../styles/theme';

export const MusicCard = styled.div`
    color: ${colors.neutral};
    background: ${colors.secondary};
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-content: center;
    margin: 2.3rem;

@media${media.tablet} {
    display: flex;
    flex-direction: row;
}
`

export const CardImage = styled.img`
    width: 190px;
    height: 190px;
`

export const Title = styled.h2`
    weight: 700;
`

export const Typography = styled.div`
margin: 2.3rem;
`
export const Controls = styled.div`
display: flex;
margin-bottom: 2.3rem;
justify-content: space-evenly;
`

export const ControlButton = styled.button`
`