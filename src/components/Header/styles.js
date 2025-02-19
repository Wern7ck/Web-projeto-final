import styled from 'styled-components'

export const Container = styled.div`
   display: flex;
    width: 1368px;
    padding: 24px 123px;
    align-items: center;
    gap: 32px;

    background: ${({theme}) => theme.COLORS.DARK_600};

`