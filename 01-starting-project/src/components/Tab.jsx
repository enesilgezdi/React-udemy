export default function Table({ children, buttons, ButtonsContainer = "menu" }) {
    // const ButtonContainer = buttonsContainer;
    return (
        <>
            <ButtonsContainer>
                {buttons}
            </ButtonsContainer>

            {children}
        </>
    )
}