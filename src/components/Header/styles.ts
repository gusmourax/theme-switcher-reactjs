import styled from 'styled-components';
import { MdBrightnessMedium } from 'react-icons/md';
import { shade, lighten } from 'polished';

export const Container = styled.header`
    height: 60px;
    background: ${props => props.theme.colors.primary};
    display: flex;
    align-items: center;
    padding: 0 30px;
    color: #FFF;
    justify-content: space-between;
`

export const ThemeSwitcher = styled(MdBrightnessMedium)`
    cursor: pointer;
    color: ${props => props.theme.title === 'light' ?
        shade(0.6, props.theme.colors.primary) : lighten(0.6, props.theme.colors.primary)};
    &:hover {
        opacity: 0.7;
        transition: all 0.5s;
    }
`