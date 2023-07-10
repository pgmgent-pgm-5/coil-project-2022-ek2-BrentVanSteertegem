import { ContainerProps } from './Container';
import { StAppContainer } from './Container.styled';

export const AppContainer = ({ children }: ContainerProps) => {
    return (
        <StAppContainer>
            {children}
        </StAppContainer>
    )
}