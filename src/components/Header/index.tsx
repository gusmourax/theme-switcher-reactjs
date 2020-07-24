import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components'

import {
    Container,
    ThemeSwitcher
} from './styles';

interface Props {
    toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {

    const theme = useContext(ThemeContext);

    return (
        <Container>
            <h2>Hello, World!!!</h2>
            <ThemeSwitcher
                size={25}
                onClick={toggleTheme}
                theme={theme}
            />
        </Container>
    );
}

export default Header;