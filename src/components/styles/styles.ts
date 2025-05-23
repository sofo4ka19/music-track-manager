import { css } from "styled-components";
import styled from "styled-components";

const flexBetween = css`
    display: flex;
    justify-content: space-between;
    padding: 5px;
`;
export const TrackCard = styled.div`
    ${flexBetween}
    align-items: center;
    width: 100%;
    background: ${({ theme }) => theme.colors.dark};
    color:  ${({ theme }) => theme.colors.text};
    border-radius: ${({ theme }) => theme.borderRadius};
    margin-bottom: 15px;
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
export const Button = styled.button<{$lined?: boolean;}>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.$lined ? "none" :({ theme }) => theme.colors.text};
    color: ${props => props.$lined ? ({ theme }) => theme.colors.text : ({ theme }) => theme.colors.dark};
    font-family: ${({ theme }) => theme.fonts.main};
    border-radius: ${({ theme }) => theme.borderRadius};
    border:  ${({ $lined, theme }) => $lined ? `2px solid ${theme.fonts.main}` : 'none'};
    cursor: pointer;
    padding:10px;
`;
export const Icon = styled(Button)`
    background:none;
    color: ${({ theme }) => theme.colors.text};
    height: 45px;
`;
const enterInfo = css`
    border-radius: ${({ theme }) => theme.borderRadius};
    color: ${({ theme }) => theme.colors.dark};
    background: ${({ theme }) => theme.colors.light};
    flex: 1;
    padding: 10px;
`;
export const Input = styled.input`
    ${enterInfo}
    height: 45px;
`;
export const SelectDiv = styled.div`
    ${enterInfo}
    ${flexBetween}
`;
export const Label = styled.label`
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: ${({ theme }) => theme.fontSizes.mid};
`;
export const FlexBetween = styled.div<{ width?: string, $wrap?:boolean }>`
    width: ${({ width }) => width || "100%"};
    flex-wrap:${({$wrap}) => $wrap ? 'wrap': 'nowrap'};
    ${flexBetween};
`;
export const Header = styled.h1<{ size?: string }>`
    text-align: center;
    width: 100%;
    font-size: ${({ size, theme }) => size || theme.fontSizes.big};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.heading};
`;
export const PlayerContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 80px;
  background: ${({ theme }) => theme.colors.light};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-shadow: 0 -2px 5px rgba(0,0,0,0.1);
`;

export const Title = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.dark};
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

 export const Progress = styled.input`
  width: 300px;
`;
export const Container = styled.div`
    background: ${({ theme }) => theme.colors.background};
    width: 100%;
    min-height: 100vh;
    padding: 50px 5%;
    box-sizing: border-box;
`;
export const Overlay = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius};
  display: flex;
  flex-direction: column;
  padding: 20px;
  min-width: 50%;
`;
export const Tag = styled.div`
    display: flex;
    align-items: center;
    background: ${({ theme }) => theme.colors.light};
    color: ${({ theme }) => theme.colors.dark}
    padding: 4px 8px;
    border-radius: ${({ theme }) => theme.borderRadius};
`;
export const GenreSelect = styled.div`
  margin-top: 8px;
  background: ${({ theme }) => theme.colors.text};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 8px;
  max-height: 150px;
  overflow-y: auto;
  div {
    padding: 6px;
    cursor: pointer;
    &:hover {
      background-color:${({ theme }) => theme.colors.light};
    }
  }
`;