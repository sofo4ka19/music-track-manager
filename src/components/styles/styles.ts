import { css } from "styled-components";
import styled from "styled-components";

const flexBetween = css`
    display: flex;
    justify-content: space-between;
    padding: 5px;
`;
export const TrackCard = styled.div`
    ${flexBetween}
    width: 90%;
    background: ${({ theme }) => theme.colors.background};
    color:  ${({ theme }) => theme.colors.text};
    border-radius: ${({ theme }) => theme.borderRadius};
`;
export const TrackImg = styled.img`
    border-radius: ${({ theme }) => theme.borderRadius};
    height: 70px;
    width: 95px;
    margin-right: 15px;
`;
export const NameText = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.mid};
    font-family: ${({ theme }) => theme.fonts.main}
`;
export const AuthorText = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-family: ${({ theme }) => theme.fonts.main}
`;
export const Button = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.dark};
    font-family: ${({ theme }) => theme.fonts.main}
    border: none;
    cursor: pointer;
    padding:10px;
`;
export const Icon = styled(Button)`
    background:none;
    color: ${({ theme }) => theme.colors.text};
    height: 45px;
`;