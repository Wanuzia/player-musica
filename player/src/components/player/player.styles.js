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
export const Typography = styled.div`
margin: 2.3rem;
text-align: center;
display: flex;
flex-direction: column;
padding: 0px;
gap: 9.6px;
`
export const Title = styled.p`
font-weight: 700;
font-size: 24px;
`
export const Artist = styled.p`
color: #C4C4CC;
font-size: 19px;
`
export const Controls = styled.div`
display: flex;
margin-bottom: 2.3rem;
justify-content: space-evenly;
`
export const ControlButton = styled.button`
`
export const TimeElapsed = styled.p`

`
